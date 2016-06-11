import Boom from 'Boom';
import Joi from 'Joi';
import ProductsController from './../controllers/Products';
import Foodkeepers from './../models/Foodkeepers';
import Markets from './../models/Markets';
import Products from './../models/Products';
import Users from './../models/Users';

/**
 * Retourne la distance maximale de recherche
 * en radian. En fonction du perimètre ID.
 *
 * @param  {integer} perimeterId  identifiant du périmètre
 * @return {float}                distance maximale en radian
 */
function getMaxDistance(perimeterId) {
  const EARTH_RADIUS = 6371;
  if (perimeterId === 0) {
    return 0.1 / EARTH_RADIUS; // 100m
  } else if (perimeterId === 1) {
    return 0.2 / EARTH_RADIUS; // 200m
  } else if (perimeterId === 2) {
    return 0.5 / EARTH_RADIUS; // 500m
  }
}

// GET: all markets
const getAll = {
  handler: (request, reply) => {
    Markets.find()
      .then(markets => reply(markets))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: market by id
const getMarketById = {
  handler: (request, reply) => {
    Markets.findById(request.params.marketId)
      .populate('foodkeeper', 'name picture location.coordinates')
      .exec()
      .then(market => reply(market))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: ally by market id
const getAllyByMarketId = {
  handler: (request, reply) => {
    // récupère les informations suivante du market
    // - _id
    // - perimeter
    // - foodkeeper._id
    // - foodkeeper.location.coordinates
    //
    // puis:
    // - retourne les id des foodkeepers situé dans
    // le périmètre défini
    const p1 = Markets.findById(request.params.marketId)
      .select('_id perimeter foodkeeper')
      .populate('foodkeeper', 'location.coordinates')
      .exec()
      .then(market => {
        return Foodkeepers.find()
          .where({ _id: { $ne: market.foodkeeper._id } }) // ne pas retourner le foodkeeper lié au market
          .where('location.coordinates')
          .near({
            center: market.foodkeeper.location.coordinates,
            maxDistance: getMaxDistance(market.perimeter),
            spherical: true,
          })
          .select('_id');
      });

    // récupère l'identifiant de l'utilisateur
    // qui est accocié à la place du marché
    const p2 = Users.find({ markets: request.params.marketId })
      .select('_id');

    // effectuer la réponse
    Promise.all([p1, p2])
      .then(values => {
        Users.find({ foodkeepers: { $in: values[0] } }) // liste de foodkeepers
          .select('-login')
          .where({ _id: { $ne: values[1][0]._id } }) // exclure l'utilisateur lié à la place du marché
          .then(users => reply(users))
          .catch(error => reply(Boom.badImplementation(error)));
      })
      .catch(err => console.log(err));
  },
};

// GET: products by market id
const getProductsByMarketId = {
  handler: (request, reply) => {
    // récupère les foodkeepers liés à l'utilisateur
    Users.find({ markets: request.params.marketId })
      .select('foodkeepers')
      .exec()
      .then((userFoodkeepers) => {
        // récupère les informations suivante du market
        // - _id
        // - perimeter
        // - foodkeeper._id
        // - foodkeeper.location.coordinates
        //
        // puis:
        // - retourne les id des foodkeepers situé dans
        // le périmètre défini
        Markets.findById(request.params.marketId)
          .select('_id perimeter foodkeeper')
          .populate('foodkeeper', 'location.coordinates')
          .exec()
          .then(market => {
            Foodkeepers.find({ _id: { $nin: userFoodkeepers[0].foodkeepers } })
              .where('location.coordinates')
              .near({
                center: market.foodkeeper.location.coordinates,
                maxDistance: getMaxDistance(market.perimeter),
                spherical: true,
              })
              .select('_id')
              .then((foodkeepersList) => {
                // retourner les produits disponibles
                Products.find({ foodkeepers: { $in: foodkeepersList } }) // liste de foodkeepers
                  .where('quantity').gt(0)
                  .then(products => reply(ProductsController.getProductList(products)))
                  .catch(error => reply(Boom.badImplementation(error)));
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
};

// GET: markets by user id
const getMarketsByUserId = {
  handler: (request, reply) => {
    Users.findById(request.params.userId)
      .select('markets')
      .exec()
      .then(marketsId =>
        Markets.find({ _id: { $in: marketsId.markets } })
          .populate('foodkeeper', 'name picture')
          .exec()
          .then(markets => reply(markets))
          .catch(error => reply(Boom.badImplementation(error)))
      )
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// POST: create a new market
const create = {
  handler: (request, reply) => {
    // création d'un foodkeeper
    const market = new Markets();
    market.perimeter = request.payload.perimeter;
    market.foodkeeper = request.payload.foodkeeper;
    market.userId = request.payload.userId;

    // on sauvegarde les données
    market.save()
      .then(response => {
        // lier la place de marcher à l'utilisateur
        Users.findByIdAndUpdate(market.userId,
          { $push: { 'markets': { _id: response._id } } },
          { safe: true, upsert: true, new: true }
        )
        .then(() => reply({ statusCode: 200, message: 'Successfully created' }))
        .catch(error => reply(Boom.badImplementation(error)));
      })
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// PUT: market by id
const updateMarketById = {
  validate: {
    payload: {
      favorite: Joi.boolean(),
      perimeter: Joi.number().min(0).max(2),
    },
  },
  handler: (request, reply) => {
    const update = {
      favorite: request.payload.favorite,
    };

    Markets.update({ _id: request.params.marketId }, { $set: update })
      .then(() => reply({ statusCode: 200, message: 'Successfully updated' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: all markets
const removeAll = {
  handler: (request, reply) => {
    Markets.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: market by id
const removeMarketById = {
  handler: (request, reply) => {
    Markets.remove({ _id: request.params.marketId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

export default {
  getAll,
  getMarketById,
  getMarketsByUserId,
  getAllyByMarketId,
  getProductsByMarketId,
  create,
  updateMarketById,
  removeAll,
  removeMarketById,
};

import Boom from 'Boom';
import Joi from 'Joi';
import geocoding from 'google-geocoding';
import Foodkeepers from './../models/Foodkeepers';
import Users from './../models/Users';

// GET: all foodkeepers
const getAll = {
  handler: (request, reply) => {
    Foodkeepers.find()
      .then(foodkeepers => reply(foodkeepers))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: foodkeeper by id
const getFoodkeeperById = {
  handler: (request, reply) => {
    Foodkeepers.findById(request.params.foodkeeperId)
      .then(foodkeeper => reply(foodkeeper))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// POST: create a new foodkeeper
const create = {
  /*validate: {
    payload: {
      name: Joi.string().min(2).max(30),
      description: Joi.string().min(2).max(100),
      picture: Joi.string(),
      location: {
        street: Joi.string().min(2).max(100),
        city: Joi.string().min(2).max(100),
        zipcode: Joi.string().min(2).max(10),
      },
    },
  },*/
  handler: (request, reply) => {
    // récupérer la latitude et longitude
    geocoding.geocode(`${request.payload.location.street}, ${request.payload.location.city}, France`, (err, location) => {
      if (err || !location) {
        reply(Boom.badImplementation(err));
      } else {
        const coordinates = [location.lng, location.lat];

        // création d'un foodkeeper
        const foodkeeper = new Foodkeepers();
        foodkeeper.name = request.payload.name;
        foodkeeper.description = request.payload.description;
        foodkeeper.picture = request.payload.picture;
        foodkeeper.location.street = request.payload.location.street;
        foodkeeper.location.number = request.payload.location.number;
        foodkeeper.location.apartment = request.payload.location.apartment;
        foodkeeper.location.floor = request.payload.location.floor;
        foodkeeper.location.additional = request.payload.location.additional;
        foodkeeper.location.infos = request.payload.location.infos;
        foodkeeper.location.city = request.payload.location.city;
        foodkeeper.location.zipcode = request.payload.location.zipcode;
        foodkeeper.location.coordinates = coordinates;

        // on sauvegarde les données
        foodkeeper.save()
          .then((response) => {
            // lier le garde manger à l'utilisateur
            Users.findByIdAndUpdate(request.payload.userId,
              { $push: { 'foodkeepers': { _id: response._id } } },
              { safe: true, upsert: true, new: true }
            )
            .then(() => reply({ statusCode: 200, message: 'Successfully created' }))
            .catch(error => reply(Boom.badImplementation(error)));
          })
          .catch(error => reply(Boom.badImplementation(error)));
      }
    });
  },
};

// PUT: foodkeeper by id
const updateFoodkeeperById = {
  validate: {
    payload: {
      name: Joi.string().min(2).max(30),
      description: Joi.string().min(2).max(100),
      picture: Joi.string(),
      location: {
        street: Joi.string().min(2).max(100),
        number: Joi.string().min(1).max(4),
        apartment: Joi.string().min(1).max(4),
        floor: Joi.number().integer(),
        additional: Joi.string().min(2).max(100),
        infos: Joi.string().min(2).max(100),
        city: Joi.string().min(2).max(100),
        zipcode: Joi.string().min(2).max(10),
        coordinates: [Joi.number(), Joi.number()],
      },
    },
  },
  handler: (request, reply) => {
    const datas = {
      name: request.payload.name,
      description: request.payload.description,
      picture: request.payload.picture,
      location: {
        street: request.payload.location.street,
        number: request.payload.location.number,
        apartment: request.payload.location.apartment,
        floor: request.payload.location.floor,
        additional: request.payload.location.additional,
        infos: request.payload.location.infos,
        city: request.payload.location.city,
        zipcode: request.payload.location.zipcode,
        coordinates: request.payload.location.coordinates,
      },
    };

    Foodkeepers.update({ _id: request.params.foodkeeperId }, { $set: datas })
      .then(() => reply({ statusCode: 200, message: 'Successfully updated' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: all foodkeepers
const removeAll = {
  handler: (request, reply) => {
    Foodkeepers.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: foodkeeper by id
const removeFoodkeeperById = {
  handler: (request, reply) => {
    Foodkeepers.remove({ _id: request.params.foodkeeperId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

export default {
  getAll,
  getFoodkeeperById,
  create,
  updateFoodkeeperById,
  removeAll,
  removeFoodkeeperById,
};

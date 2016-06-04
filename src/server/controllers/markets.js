import Boom from 'Boom';
import Joi from 'Joi';
import Markets from './../models/Markets';

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
      .populate('foodkeeper', 'name description picture location')
      .exec()
      .then(market => reply(market))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// POST: create a new market
const create = {
  handler: (request, reply) => {
    reply('POST: create a new market');
  },
};

// PUT: market by id
const updateMarketById = {
  validate: {
    payload: {
      favorite: Joi.boolean(),
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
  create,
  updateMarketById,
  removeAll,
  removeMarketById,
};

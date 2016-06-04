import Boom from 'Boom';
import Joi from 'Joi';
import Foodkeepers from './../models/Foodkeepers';

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
  handler: (request, reply) => {
    reply('POST: create a new foodkeeper');
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
        postcode: Joi.string().min(2).max(10),
        coordinates: [Joi.number(), Joi.number()],
      },
    },
  },
  handler: (request, reply) => {
    const update = {
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
        postcode: request.payload.location.postcode,
        coordinates: request.payload.location.coordinates,
      },
    };

    Foodkeepers.update({ _id: request.params.foodkeeperId }, { $set: update })
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

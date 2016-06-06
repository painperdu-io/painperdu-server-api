import Boom from 'Boom';
import Joi from 'Joi';
import Products from './../models/Products';

// GET: all products
const getAll = {
  handler: (request, reply) => {
    Products.find()
      .then(products => reply(products))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: product by id
const getProductById = {
  handler: (request, reply) => {
    Products.findById(request.params.productId)
      .populate('foodkeepers', 'name description picture location')
      .exec()
      .then(product => reply(product))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: users by foodkeeper id
const getProductsByFoodkeeperId = {
  handler: (request, reply) => {
    Products.find({ foodkeepers: request.params.foodkeeperId })
      .then(products => reply(products))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// POST: create a new product
const create = {
  handler: (request, reply) => {
    reply('POST: create a new product');
  },
};

// PUT: product by id
const updateProductById = {
  validate: {
    payload: {
      icon: Joi.string(),
      name: Joi.string().alphanum().min(2).max(50),
      description: Joi.string().min(3).max(250),
      type: Joi.string().valid('raw', 'homemade'),
      quantity: Joi.number().integer().min(1),
      dlc: Joi.number().integer().min(1),
      available: Joi.boolean(),
    },
  },
  handler: (request, reply) => {
    const update = {
      icon: request.payload.icon,
      name: request.payload.name,
      description: request.payload.description,
      type: request.payload.type,
      quantity: request.payload.quantity,
      dlc: request.payload.dlc,
      available: request.payload.available,
    };

    Products.update({ _id: request.params.productId }, { $set: update })
      .then(() => reply({ statusCode: 200, message: 'Successfully updated' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: all products
const removeAll = {
  handler: (request, reply) => {
    Products.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: product by id
const removeProductById = {
  handler: (request, reply) => {
    Products.remove({ _id: request.params.productId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

export default {
  getAll,
  getProductById,
  getProductsByFoodkeeperId,
  create,
  updateProductById,
  removeAll,
  removeProductById,
};

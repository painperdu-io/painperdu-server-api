import Boom from 'Boom';
import Joi from 'Joi';
import Products from './../models/products';

// GET: all products
const getAll = {
  handler: (request, reply) => {
    reply('GET: all products');
  },
};

// GET: product by id
const getProductById = {
  handler: (request, reply) => {
    reply('GET: product by id');
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
  handler: (request, reply) => {
    reply('PUT: product by id');
  },
};

// DELETE: all products
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all products');
  },
};

// DELETE: product by id
const removeProductById = {
  handler: (request, reply) => {
    reply('DELETE: product by id');
  },
};

export default {
  getAll,
  getProductById,
  create,
  updateProductById,
  removeAll,
  removeProductById,
};

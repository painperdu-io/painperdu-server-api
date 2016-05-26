import Boom from 'Boom';
import Joi from 'Joi';
import Foodkeepers from './../models/foodkeepers';

// GET: all foodkeepers
const getAll = {
  handler: (request, reply) => {
    reply('GET: all foodkeepers');
  },
};

// GET: foodkeeper by id
const getFoodkeeperById = {
  handler: (request, reply) => {
    reply('GET: foodkeeper by id');
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
  handler: (request, reply) => {
    reply('PUT: foodkeeper by id');
  },
};

// DELETE: all foodkeepers
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all foodkeepers');
  },
};

// DELETE: foodkeeper by id
const removeFoodkeeperById = {
  handler: (request, reply) => {
    reply('DELETE: foodkeeper by id');
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

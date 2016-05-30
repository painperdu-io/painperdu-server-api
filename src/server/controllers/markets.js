import Boom from 'Boom';
import Joi from 'Joi';
import Markets from './../models/Markets';

// GET: all markets
const getAll = {
  handler: (request, reply) => {
    reply('GET: all markets');
  },
};

// GET: market by id
const getMarketById = {
  handler: (request, reply) => {
    reply('GET: market by id');
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
  handler: (request, reply) => {
    reply('PUT: market by id');
  },
};

// DELETE: all markets
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all markets');
  },
};

// DELETE: market by id
const removeMarketById = {
  handler: (request, reply) => {
    reply('DELETE: market by id');
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

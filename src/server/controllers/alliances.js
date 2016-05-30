import Boom from 'Boom';
import Joi from 'Joi';
import Alliances from './../models/Alliances';

// GET: all alliances
const getAll = {
  handler: (request, reply) => {
    reply('GET: all alliances');
  },
};

// GET: alliance by id
const getAllianceById = {
  handler: (request, reply) => {
    reply('GET: alliance by id');
  },
};

// POST: create a new alliance
const create = {
  handler: (request, reply) => {
    reply('POST: create a new alliance');
  },
};

// PUT: alliance by id
const updateAllianceById = {
  handler: (request, reply) => {
    reply('PUT: alliance by id');
  },
};

// DELETE: all alliances
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all alliances');
  },
};

// DELETE: alliance by id
const removeAllianceById = {
  handler: (request, reply) => {
    reply('DELETE: alliance by id');
  },
};

export default {
  getAll,
  getAllianceById,
  create,
  updateAllianceById,
  removeAll,
  removeAllianceById,
};

import Boom from 'Boom';
import Joi from 'Joi';
import Alliances from './../models/Alliances';

// GET: all alliances
const getAll = {
  handler: (request, reply) => {
    Alliances.find()
      .then(alliances => reply(alliances))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: alliance by id
const getAllianceById = {
  handler: (request, reply) => {
    Alliances.findById(request.params.allianceId)
      .then(alliance => reply(alliance))
      .catch(error => reply(Boom.badImplementation(error)));
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
    Alliances.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: alliance by id
const removeAllianceById = {
  handler: (request, reply) => {
    Alliances.remove({ _id: request.params.allianceId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
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

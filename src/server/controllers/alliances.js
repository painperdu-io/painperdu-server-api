import Boom from 'Boom';
import Joi from 'Joi';
import Alliances from './../models/Alliances';

/**
 * Rajouter le type pour déterminer si la personne
 * est le demandeur ou le donneur du produit.
 *
 * @param  {array} user       utilisateur courrant
 * @param  {array} alliances  liste des alliances mongodb
 * @return {array}            liste des alliances traitées
 */
function getUserType(user, alliances) {
  let response = [];

  for (let i = 0; i < alliances.length; i++) {
    let alliance = alliances[i].toObject();

    // ajout l'état d'urgence
    if (user == alliance.giver) {
      alliance.type = 'giver';
    } else {
      alliance.type = 'applicant';
    }

    response.push(alliance);
  }

  return response;
}

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

// GET: alliance by user id
const getAlliancesByUserId = {
  handler: (request, reply) => {
    Alliances.find({ $or: [{'applicant': request.params.userId}, {'giver': request.params.userId}] })
      .sort('-updatedAt')
      .populate('product')
      .exec()
      .then(alliances => reply(getUserType(request.params.userId, alliances)))
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
  getAlliancesByUserId,
  create,
  updateAllianceById,
  removeAll,
  removeAllianceById,
};

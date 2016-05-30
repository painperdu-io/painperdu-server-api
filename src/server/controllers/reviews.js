import Boom from 'Boom';
import Joi from 'Joi';
import Reviews from './../models/Reviews';

// GET: all reviews
const getAll = {
  handler: (request, reply) => {
    reply('GET: all reviews');
  },
};

// GET: review by id
const getReviewById = {
  handler: (request, reply) => {
    reply('GET: review by id');
  },
};

// POST: create a new review
const create = {
  handler: (request, reply) => {
    reply('POST: create a new review');
  },
};

// PUT: review by id
const updateReviewById = {
  handler: (request, reply) => {
    reply('PUT: review by id');
  },
};

// DELETE: all reviews
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all reviews');
  },
};

// DELETE: review by id
const removeReviewById = {
  handler: (request, reply) => {
    reply('DELETE: review by id');
  },
};

export default {
  getAll,
  getReviewById,
  create,
  updateReviewById,
  removeAll,
  removeReviewById,
};

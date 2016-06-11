import Boom from 'Boom';
import Joi from 'Joi';
import Reviews from './../models/Reviews';

// GET: all reviews
const getAll = {
  handler: (request, reply) => {
    Reviews.find()
      .then(reviews => reply(reviews))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: review by id
const getReviewById = {
  handler: (request, reply) => {
    Reviews.findById(request.params.reviewId)
      .then(review => reply(review))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// POST: create a new review
const create = {
  handler: (request, reply) => {
    // création d'une alliance
    const review = new Reviews();
    review.note = request.payload.note;
    review.foodkeeper = request.payload.foodkeeper;

    // on sauvegarde les données
    review.save()
      .then(() => reply({ statusCode: 200, message: 'Successfully created' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// PUT: review by id
const updateReviewById = {
  validate: {
    payload: {
      note: Joi.number().integer().min(0).max(5),
    },
  },
  handler: (request, reply) => {
    const update = {
      note: request.payload.note,
    };

    Reviews.update({ _id: request.params.reviewId }, { $set: update })
      .then(() => reply({ statusCode: 200, message: 'Successfully updated' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: all reviews
const removeAll = {
  handler: (request, reply) => {
    Reviews.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: review by id
const removeReviewById = {
  handler: (request, reply) => {
    Reviews.remove({ _id: request.params.reviewId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
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

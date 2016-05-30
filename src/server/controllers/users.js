import Boom from 'Boom';
import Joi from 'Joi';
import Users from './../models/Users';

// GET: all users
const getAll = {
  handler: (request, reply) => {
    Users.find({}, (error, users) => {
      if (!error) {
        return reply(users);
      }
      return reply(Boom.badImplementation(error));
    });
  },
};

// GET: user by id
const getUserById = {
  handler: (request, reply) => {
    Users.find({ 'id': request.params.id }, (error, user) => {
      if (!error) {
        return reply(user);
      }
      return reply(Boom.badImplementation(error));
    });
  },
};

// POST: create a new user
const create = {
  validate: {
    payload: {
      id: Joi.string().required(),
      mail: Joi.string().required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    }
  },
  handler: (request, reply) => {
    const user = new Users(request.payload);
    user.save((error, user) => {
        if (!error) {
          return reply(user).created('/users/' + user._id); // HTTP 201
        }
        if (11000 === err.code || 11001 === err.code) {
          return reply(Boom.forbidden("please provide another user id, it already exist"));
        }
        return reply(Boom.forbidden(err)); // HTTP 403
    });
  },
};

// PUT: user by id
const updateUserById = {
  handler: (request, reply) => {
    reply('PUT: user by id');
  },
};

// DELETE: all users
const removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all users');
  },
};

// DELETE: user by id
const removeUserById = {
  handler: (request, reply) => {
    reply('DELETE: user by id');
  },
};

export default {
  getAll,
  getUserById,
  create,
  updateUserById,
  removeAll,
  removeUserById,
};

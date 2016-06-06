import Boom from 'Boom';
import Joi from 'Joi';
import Users from './../models/Users';

// GET: all users
const getAll = {
  handler: (request, reply) => {
    Users.find()
      .select('-login')
      .then(users => reply(users))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: user by id
const getUserById = {
  handler: (request, reply) => {
    Users.findById(request.params.userId)
      .select('-login')
      .populate('markets', 'favorite')
      .populate('foodkeepers', 'name description picture location')
      .exec()
      .then(user => reply(user))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: accomplices by user id
const getAccomplicesByUserId = {
  handler: (request, reply) => {
    Users.findById(request.params.userId)
      .select('foodkeepers')
      .exec()
      .then(foodkeepers =>
        Users.find({ foodkeepers: { "$in": foodkeepers.foodkeepers }})
          .select('-login')
          .where({ _id: { "$ne": request.params.userId }})
          .then(users => reply(users))
          .catch(error => reply(Boom.badImplementation(error)))
      )
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// GET: users by foodkeeper id
const getUsersByFoodkeeperId = {
  handler: (request, reply) => {
    Users.find({ foodkeepers: request.params.foodkeeperId })
      .select('-login')
      .where({ _id: { "$ne": request.params.userId }})
      .then(users => reply(users))
      .catch(error => reply(Boom.badImplementation(error)));
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
  validate: {
    payload: {
      email: Joi.string().email(),
      picture: Joi.string(),
      score: Joi.number().integer(),
    }
  },
  handler: (request, reply) => {
    const update = {
      email: request.payload.email,
      picture: request.payload.picture,
      score: request.payload.score,
    };

    Users.update({ _id: request.params.userId }, { $set: update })
      .then(() => reply({ statusCode: 200, message: 'Successfully updated' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: all users
const removeAll = {
  handler: (request, reply) => {
    Users.remove({})
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

// DELETE: user by id
const removeUserById = {
  handler: (request, reply) => {
    Users.remove({ _id: request.params.userId })
      .then(() => reply({ statusCode: 200, message: 'Successfully deleted' }))
      .catch(error => reply(Boom.badImplementation(error)));
  },
};

export default {
  getAll,
  getUserById,
  getAccomplicesByUserId,
  getUsersByFoodkeeperId,
  create,
  updateUserById,
  removeAll,
  removeUserById,
};

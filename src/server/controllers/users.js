// GET: all users
exports.getAll = {
  handler: (request, reply) => {
    reply('GET: all users');
  }
};

// GET: user by id
exports.getUserById = {
  handler: (request, reply) => {
    reply('GET: user by id');
  }
};

// POST: create a new user
exports.create = {
  handler: (request, reply) => {
    reply('POST: create a new user');
  }
};

// PUT: user by id
exports.updateUserById = {
  handler: (request, reply) => {
    reply('PUT: user by id');
  }
};

// DELETE: all users
exports.removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all users');
  }
};

// DELETE: user by id
exports.removeUserById = {
  handler: (request, reply) => {
    reply('DELETE: user by id');
  }
};

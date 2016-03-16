// GET: all rates
exports.getAll = {
  handler: (request, reply) => {
    reply('GET: all rates');
  }
};

// GET: rate by id
exports.getRateById = {
  handler: (request, reply) => {
    reply('GET: rate by id');
  }
};

// POST: create a new rate
exports.create = {
  handler: (request, reply) => {
    reply('POST: create a new rate');
  }
};

// PUT: rate by id
exports.updateRateById = {
  handler: (request, reply) => {
    reply('PUT: rate by id');
  }
};

// DELETE: all rates
exports.removeAll = {
  handler: (request, reply) => {
    reply('DELETE: all rates');
  }
};

// DELETE: rate by id
exports.removeRateById = {
  handler: (request, reply) => {
    reply('DELETE: rate by id');
  }
};

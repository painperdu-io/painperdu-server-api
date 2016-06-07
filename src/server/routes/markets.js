import Markets from './../controllers/Markets';

export default [
  // GET
  { method: 'GET', path: '/markets', config: Markets.getAll },
  { method: 'GET', path: '/markets/{marketId}', config: Markets.getMarketById },
  { method: 'GET', path: '/markets/user/{userId}', config: Markets.getMarketsByUserId },
  { method: 'GET', path: '/markets/{marketId}/ally', config: Markets.getAllyByMarketId },
  { method: 'GET', path: '/markets/{marketId}/products', config: Markets.getProductsByMarketId },

  // POST
  { method: 'POST', path: '/markets', config: Markets.create },

  // PUT
  { method: 'PUT', path: '/markets/{marketId}', config: Markets.updateMarketById },

  // DELETE
  { method: 'DELETE', path: '/markets', config: Markets.removeAll },
  { method: 'DELETE', path: '/markets/{marketId}', config: Markets.removeMarketById },
];

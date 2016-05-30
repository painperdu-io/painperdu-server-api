import Markets from './../controllers/Markets';

export default [
  // GET
  { method: 'GET', path: '/markets', config: Markets.getAll },
  { method: 'GET', path: '/markets/{marketId}', config: Markets.getMarketById },

  // POST
  { method: 'POST', path: '/markets', config: Markets.create },

  // PUT
  { method: 'PUT', path: '/markets/{marketId}', config: Markets.updateMarketById },

  // DELETE
  { method: 'DELETE', path: '/markets', config: Markets.removeAll },
  { method: 'DELETE', path: '/markets/{marketId}', config: Markets.removeMarketById },
];

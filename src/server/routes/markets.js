import markets from './../controllers/markets';

export default [
  // GET
  { method: 'GET', path: '/markets', config: markets.getAll },
  { method: 'GET', path: '/markets/{marketId}', config: markets.getMarketById },

  // POST
  { method: 'POST', path: '/markets', config: markets.create },

  // PUT
  { method: 'PUT', path: '/markets/{marketId}', config: markets.updateMarketById },

  // DELETE
  { method: 'DELETE', path: '/markets', config: markets.removeAll },
  { method: 'DELETE', path: '/markets/{marketId}', config: markets.removeMarketById },
];

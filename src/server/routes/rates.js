import rates from './../controllers/rates';

export default [
  // GET
  { method: 'GET', path: '/rates', config: rates.getAll },
  { method: 'GET', path: '/rates/{rateId}', config: rates.getRateById },

  // POST
  { method: 'POST', path: '/rates', config: rates.create },

  // PUT
  { method: 'PUT', path: '/rates/{rateId}', config: rates.updateRateById },

  // DELETE
  { method: 'DELETE', path: '/rates', config: rates.removeAll },
  { method: 'DELETE', path: '/rates/{rateId}', config: rates.removeRateById },
];

import foodkeepers from './../controllers/foodkeepers';

export default [
  // GET
  { method: 'GET', path: '/foodkeepers', config: foodkeepers.getAll },
  { method: 'GET', path: '/foodkeepers/{foodkeeperId}', config: foodkeepers.getFoodkeeperById },

  // POST
  { method: 'POST', path: '/foodkeepers', config: foodkeepers.create },

  // PUT
  { method: 'PUT', path: '/foodkeepers/{foodkeeperId}', config: foodkeepers.updateFoodkeeperById },

  // DELETE
  { method: 'DELETE', path: '/foodkeepers', config: foodkeepers.removeAll },
  { method: 'DELETE', path: '/foodkeepers/{foodkeeperId}', config: foodkeepers.removeFoodkeeperById },
];

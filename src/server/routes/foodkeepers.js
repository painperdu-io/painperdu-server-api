import Foodkeepers from './../controllers/Foodkeepers';

export default [
  // GET
  { method: 'GET', path: '/foodkeepers', config: Foodkeepers.getAll },
  { method: 'GET', path: '/foodkeepers/{foodkeeperId}', config: Foodkeepers.getFoodkeeperById },

  // POST
  { method: 'POST', path: '/foodkeepers', config: Foodkeepers.create },

  // PUT
  { method: 'PUT', path: '/foodkeepers/{foodkeeperId}', config: Foodkeepers.updateFoodkeeperById },

  // DELETE
  { method: 'DELETE', path: '/foodkeepers', config: Foodkeepers.removeAll },
  { method: 'DELETE', path: '/foodkeepers/{foodkeeperId}', config: Foodkeepers.removeFoodkeeperById },
];

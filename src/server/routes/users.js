import Users from './../controllers/Users';

export default [
  // GET
  { method: 'GET', path: '/users', config: Users.getAll },
  { method: 'GET', path: '/users/{userId}', config: Users.getUserById },

  // POST
  { method: 'POST', path: '/users', config: Users.create },

  // PUT
  { method: 'PUT', path: '/users/{userId}', config: Users.updateUserById },

  // DELETE
  { method: 'DELETE', path: '/users', config: Users.removeAll },
  { method: 'DELETE', path: '/users/{userId}', config: Users.removeUserById },
];

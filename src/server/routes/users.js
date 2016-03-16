import users from './../controllers/users';

export default [
  // GET
  { method: 'GET', path: '/users', config: users.getAll },
  { method: 'GET', path: '/users/{userId}', config: users.getUserById },

  // POST
  { method: 'POST', path: '/users', config: users.create },

  // PUT
  { method: 'PUT', path: '/users/{userId}', config: users.updateUserById },

  // DELETE
  { method: 'DELETE', path: '/users', config: users.removeAll },
  { method: 'DELETE', path: '/users/{userId}', config: users.removeUserById },
];

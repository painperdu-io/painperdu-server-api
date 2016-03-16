import routes from './../routes';

const api = {
  register: (server, options, next) => {
    server.route(routes);
    next();
  }
};

api.register.attributes = {
  name: 'api',
  version: '1.0.0'
};

export default api;

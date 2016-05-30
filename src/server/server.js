import Hapi from 'hapi';
import Logdown from 'logdown';
import db from './db';
import plugins from './plugins';
import nconf from './../config';

const logger = new Logdown({ prefix: 'server' });
const HOST = process.env.HOST || nconf.get('server:host');
const PORT = process.env.PORT || nconf.get('server:port');

// create hapi server
const server = new Hapi.Server();
server.connection({
  host: HOST,
  port: PORT,
  labels: ['api']
});

// connect to mongodb
db.connect();

// configure hapi server
server.register(plugins, { routes: { prefix: '/api/v1' } }, (error) => {
  if (error) {
    logger.error(error);
  } else {
    server.start(() => {
      logger.info('Server listening at ' + server.info.uri);
    });
  }
});
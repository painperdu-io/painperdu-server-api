import Logdown from 'logdown';
import mongoose from 'mongoose';
import nconf from './../config';
import DataFixtures from './datafixtures';

mongoose.Promise = Promise;

const logger = new Logdown({ prefix: 'db' });

const db = {
  connect() {
    // initialize now, connect later
    // const connection = mongoose.createConnection();
    //
    // // configure options
    // const opts = {
    //   server: {
    //     auto_reconnect: true
    //   },
    //   //user: nconf.get('database:username'),
    //   //pass: nconf.get('database:password')
    // };
    //
    // // connect to database
    // connection.open(
    //   nconf.get('database:host'),
    //   nconf.get('database:db'),
    //   nconf.get('database:port'),
    //   opts
    // );

    // mongoose connection
    const host = nconf.get('database:host');
    const port = nconf.get('database:port');
    const database = nconf.get('database:db');
    mongoose.connect(`mongodb://${host}:${port}/${database}`);
    const connection = mongoose.connection;

    // log events
    connection.on('error', (error) => {
      logger.error(`Connection with database failed — ${error}`);
    });
    connection.once('open', () => {
      logger.info('Connection with database succeeded.');
      if (nconf.get('database:datafixtures')) {
        logger.info('Reset database with datafixtures.');
        const dataFixtures = new DataFixtures();
        dataFixtures.init()
          .catch(err => logger.error(err));
      }
    });
  },
};

export default db;

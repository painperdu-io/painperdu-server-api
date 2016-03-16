import Logdown from 'logdown';
import mongoose from 'mongoose';
import nconf from './../config';

const logger = new Logdown({ prefix: 'db' });

const db = {
  connect() {
    // initialize now, connect later
    const connection = mongoose.createConnection();

    // configure options
    const opts = {
      server: {
        auto_reconnect: true
      },
      //user: nconf.get('database:username'),
      //pass: nconf.get('database:password')
    };

    // connect to database
    connection.open(
      nconf.get('database:host'),
      nconf.get('database:db'),
      nconf.get('database:port'),
      opts
    );

    // log events
    connection.on('error', (error) => {
      logger.error(`Connection with database failed — ${error}`);
    });
    connection.on('open', () => {
      logger.info('Connection with database succeeded.');
    });
  }
};

export default db;

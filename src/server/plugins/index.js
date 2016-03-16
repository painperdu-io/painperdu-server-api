import api from './api';
import good from 'good';
import goodconsole from 'good-console';

const plugins = [
  { register: api },
  { register: good,
    options: {
      opsInterval: 1000,
      reporters: [{
        reporter: goodconsole,
        events: {
          request: '*',
          log: '*',
          response: '*',
          error: '*',
        }
      }]
    }
  }
];

export default plugins;

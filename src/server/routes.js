import fs from 'fs';
import path from 'path';

let routes = [];
fs.readdirSync(path.join(__dirname, 'routes')).forEach((file) => {
  const name = file.split('.').shift();
  routes = routes.concat(require(path.join(__dirname, `routes/${name}`)).default);
});

export default routes;

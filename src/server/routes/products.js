import Products from './../controllers/Products';

export default [
  // GET
  { method: 'GET', path: '/products', config: Products.getAll },
  { method: 'GET', path: '/products/{productId}', config: Products.getProductById },
  { method: 'GET', path: '/products/foodkeeper/{foodkeeperId}', config: Products.getProductsByFoodkeeperId },

  // POST
  { method: 'POST', path: '/products', config: Products.create },

  // PUT
  { method: 'PUT', path: '/products/{productId}', config: Products.updateProductById },

  // DELETE
  { method: 'DELETE', path: '/products', config: Products.removeAll },
  { method: 'DELETE', path: '/products/{productId}', config: Products.removeProductById },
];

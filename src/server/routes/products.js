import products from './../controllers/products';

export default [
  // GET
  { method: 'GET', path: '/products', config: products.getAll },
  { method: 'GET', path: '/products/{productId}', config: products.getProductById },

  // POST
  { method: 'POST', path: '/products', config: products.create },

  // PUT
  { method: 'PUT', path: '/products/{productId}', config: products.updateProductById },

  // DELETE
  { method: 'DELETE', path: '/products', config: products.removeAll },
  { method: 'DELETE', path: '/products/{productId}', config: products.removeProductById },
];

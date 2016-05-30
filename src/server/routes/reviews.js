import Reviews from './../controllers/Reviews';

export default [
  // GET
  { method: 'GET', path: '/reviews', config: Reviews.getAll },
  { method: 'GET', path: '/reviews/{reviewId}', config: Reviews.getReviewById },

  // POST
  { method: 'POST', path: '/reviews', config: Reviews.create },

  // PUT
  { method: 'PUT', path: '/reviews/{reviewId}', config: Reviews.updateReviewById },

  // DELETE
  { method: 'DELETE', path: '/reviews', config: Reviews.removeAll },
  { method: 'DELETE', path: '/reviews/{reviewId}', config: Reviews.removeReviewById },
];

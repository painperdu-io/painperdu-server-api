import reviews from './../controllers/reviews';

export default [
  // GET
  { method: 'GET', path: '/reviews', config: reviews.getAll },
  { method: 'GET', path: '/reviews/{reviewId}', config: reviews.getReviewById },

  // POST
  { method: 'POST', path: '/reviews', config: reviews.create },

  // PUT
  { method: 'PUT', path: '/reviews/{reviewId}', config: reviews.updateReviewById },

  // DELETE
  { method: 'DELETE', path: '/reviews', config: reviews.removeAll },
  { method: 'DELETE', path: '/reviews/{reviewId}', config: reviews.removeReviewById },
];

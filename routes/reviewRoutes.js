const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(function(req, res){
    authController.ristrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview}
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.ristrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(function(req, res){
    authController.ristrictTo('user', 'admin'),
    reviewController.deleteReview}
  );

module.exports = router;

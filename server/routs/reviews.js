const express = require('express');
const router = new express.Router();
const review = require('../controllers/reviews');
const auth = require('../middleWare/auth');
const isLogedClient = require('../middleWare/isLogedClient');


/*
                      =======================
                      Loged user's preveliges
                      =======================
*/

//Post review
router.post('/', isLogedClient, (req, res) => review.postReview(req, res));

//Get all user's reviews
router.get('/', auth, (req, res) => review.getReviews(req, res));

//Get user's specific review
router.get('/:id', auth, (req, res) => review.getSingleReview(req, res));

//Update user's specific review
router.patch('/:id', auth, (req, res) => review.updateReview(req, res));

//Delete user's specific review
router.delete('/:id', auth, (req, res) => review.deleteReview(req, res));


module.exports = router;
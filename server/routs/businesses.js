const express = require('express');
const router = new express.Router();
const business = require('../controllers/businesses');
const auth = require('../middleWare/auth');
const isLogedProvider = require('../middleWare/isLogedProvider');


/*
                      =======================
                      Loged user's preveliges
                      =======================
*/


//Add business
router.post('/', isLogedProvider, (req, res) => business.addBuisness(req, res));

//Get all user's businesses
router.get('/', auth, (req, res) => business.getMyBuisnesses(req, res));

//Update user's specific business
router.patch('/:id', auth, (req, res) => business.updateBuisness(req, res));

//Delete user's specific business
router.delete('/:id', auth, (req, res) => business.deleteBuisness(req, res));


/*
                      =======================
                      All users' preveliges
                      =======================
*/

//Get specific business
router.get('/:id', (req, res) => business.getSingleBuisness(req, res));

//Get all business' reviews
router.get('/:id/reviews', (req, res) => business.getBusinessReviews(req, res));

//Get list of businesses in the country
router.get('/nearest/:country', (req, res) => business.inCountry(req, res));

module.exports = router;
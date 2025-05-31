const express = require('express');
const router = express.Router();

// Pages logic to render to our website
router.get('/', (req, res) => {
    res.render('pages/home');   
});

router.get('/courses', (req,res) => {
    res.render('pages/courses');
});

router.get('/events', (req,res) => {
    res.render('pages/events');
});

router.get('/about', (req,res) => {
    res.render('pages/about');
});

router.get('/contact', (req,res) => {
    res.render('pages/contact');
});

router.get('/faq', (req,res) => {
    res.render('pages/faq');
});

module.exports = router;
 
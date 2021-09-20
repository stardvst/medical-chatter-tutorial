const { singup, login } = require('../controllers/auth');

const router = require('express').Router();

router.post('/signup', singup);
router.post('/login', login);

module.exports = router;

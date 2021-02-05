const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/checkEmail', usersCtrl.checkEmail);
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/checkEmail', usersCtrl.checkEmail);
/*---------- Protected Routes ----------*/
router.get('/getFriends', usersCtrl.getFriends);
router.post('/addFriend/:id', usersCtrl.addFriend);
router.post('/removeFriend/:id', usersCtrl.removeFriend);

module.exports = router;
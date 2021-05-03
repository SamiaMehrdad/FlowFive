const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/checkEmail', usersCtrl.checkEmail);
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/checkEmail', usersCtrl.checkEmail);
router.get('/setTempUser',usersCtrl.setTempUser);
/*---------- Protected Routes ----------*/
router.post('/getFriends', usersCtrl.getFriends);
router.post('/addFriend', usersCtrl.addFriend);
router.post('/removeFriend', usersCtrl.removeFriend);
router.post('/searchUsers',usersCtrl.searchUsers);

module.exports = router;
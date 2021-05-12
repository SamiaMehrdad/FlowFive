const express = require('express');
const router = express.Router();
const roomCtrl = require('../../controllers/rooms');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.get('/getall', roomCtrl.getAll);
router.post('/getRooms', roomCtrl.getOpenRooms);
router.post('/join', roomCtrl.join);
router.post('/leave', roomCtrl.leave);
router.post('/open', roomCtrl.open);
router.post('/close', roomCtrl.close);
router.post('/message', roomCtrl.message);
module.exports = router; 
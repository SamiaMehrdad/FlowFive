const express = require('express');
const router = express.Router();
const roomCtrl = require('../../controllers/rooms');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.get('/join', roomCtrl.getAll);
router.post('/join/:id', roomCtrl.join);
router.post('/leave/', roomCtrl.leave);
router.post('/message/:id', roomCtrl.message);
module.exports = router; 
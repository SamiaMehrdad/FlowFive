const express = require('express');
const router = express.Router();
const roomCtrl = require('../../controllers/rooms');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.get('/getall', roomCtrl.getAll);
router.post('/join/:id', roomCtrl.join);
router.post('/leave/:id', roomCtrl.leave);
router.post('/open', roomCtrl.open);
router.post('/close', roomCtrl.close);
router.post('/message/:id', roomCtrl.message);
module.exports = router; 
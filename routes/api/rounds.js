const express = require('express');
const router = express.Router();
const roundCtrl = require('../../controllers/rounds');

/*---------- Public Routes ----------*/
router.post('/join/:id', roundCtrl.join);
router.post('/leave/:id', roundCtrl.leave);

/*---------- Protected Routes ----------*/

module.exports = router;
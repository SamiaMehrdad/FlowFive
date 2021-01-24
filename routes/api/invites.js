const express = require('express');
const router = express.Router();
const inviteCtrl = require('../../controllers/invites');

/*---------- Public Routes ----------*/
router.post('/add/:id', inviteCtrl.add);
router.post('/remove/:id', inviteCtrl.remove);
router.get('/invitings', inviteCtrl.getIvitings);
router.get('/inviteds', inviteCtrl.getInviteds);
/*---------- Protected Routes ----------*/

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/comment');

// // Commentaires
// router.get('/', auth, userCtrl.getAllComments);
router.post('/', userCtrl.addNewComment);
// router.delete('/:id', auth, userCtrl.deleteComment);

module.exports = router;

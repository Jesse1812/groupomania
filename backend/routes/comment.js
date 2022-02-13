const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/comment');

// // Commentaires
router.get('/:id', auth, userCtrl.getAllCommentsByPostId);
router.post('/', auth, userCtrl.addNewComment);
router.delete('/:id', auth, userCtrl.deleteComment);

module.exports = router;

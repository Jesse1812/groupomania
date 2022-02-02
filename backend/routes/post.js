const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
const userCtrl = require('../controllers/post');

// Posts
router.get('/', userCtrl.getAllPosts);
// router.get('/:id', userCtrl.getOnePost);
// router.post('/', userCtrl.createPost);
// router.put('/:id', userCtrl.updateOnePost);
// router.delete('/:id', userCtrl.deleteOnePost);

// // Commentaires
// router.get('/:id/comments', auth, userCtrl.getAllComments);
// router.post('/:id/comment/', auth, userCtrl.getNewComment);
// router.delete('/comment/:id', auth, userCtrl.deleteComment);

// Likes
// router.patch('/like-post/:id', auth, userCtrl.likePost);
// router.patch('/unlike-post/:id', auth, userCtrl.unlikePost);

module.exports = router;

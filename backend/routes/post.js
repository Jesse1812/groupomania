const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const userCtrl = require('../controllers/post');

router.get('/', auth, userCtrl.getAllPosts);
router.post('/', auth, userCtrl.createPost);
router.get('/:id', auth, userCtrl.getOnePost);
router.put('/:id', auth, userCtrl.updateOnePost);
router.delete('/:id', auth, userCtrl.deleteOnePost);
router.patch('/like-post/:id', auth, userCtrl.likePost);
router.patch('/unlike-post/:id', auth, userCtrl.unlikePost);

router.get('/:id/comments', auth, userCtrl.getAllComments);
router.post('/:id/comment/', auth, userCtrl.getNewComment);
router.delete('/comment/:id', auth, userCtrl.deleteComment);

module.exports = router;

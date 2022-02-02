const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/post');

// Posts
router.get('/', auth, userCtrl.getAllPosts);
router.post('/', auth, userCtrl.createPost);
router.get('/:id', auth, userCtrl.getOnePost);
router.put('/:id', auth, userCtrl.updateOnePost);
router.delete('/:id', auth, userCtrl.deleteOnePost);

// Likes
// router.patch('/like-post/:id', auth, userCtrl.likePost);
// router.patch('/unlike-post/:id', auth, userCtrl.unlikePost);

module.exports = router;

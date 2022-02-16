const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');

// Posts
router.get('/', auth, userCtrl.getAllPosts);
router.post('/', auth, multer, userCtrl.createPost);
router.get('/:id', auth, userCtrl.getOnePost);
router.put('/:id', auth, userCtrl.updateOnePost);
router.delete('/:id', auth, userCtrl.deleteOnePost);

// Likes
// router.patch('/like-post/:id', auth, userCtrl.likePost);
// router.patch('/unlike-post/:id', auth, userCtrl.unlikePost);

module.exports = router;

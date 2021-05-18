import express from "express"
import { getPosts, createPosts, updatePost, deletePost, likePost, getPostsBySearch, getPost } from "../controllers/posts.js"
import auth from "../middleware/auth.js"

const router = express.Router();


router.get('/search', getPostsBySearch)

router.get('/:id', getPost);
router.get('/', getPosts);

router.post('/', auth, createPosts);

router.patch('/:id', auth, updatePost);

router.delete('/:id', auth, deletePost);

router.patch('/:id/likepost', auth, likePost);


export default router;
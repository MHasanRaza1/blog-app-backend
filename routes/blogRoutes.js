import express from 'express';
import { addBlog, deleteBlog, getBlogs, updateBlog } from '../controllers/blogController.js';

const blogRoutes = express.Router();

blogRoutes.get('/', getBlogs);
blogRoutes.post('/add', addBlog);
blogRoutes.put('/update', updateBlog);
blogRoutes.delete('/delete', deleteBlog);


export default blogRoutes;
import Blog from "../models/blogModel.js";

export const getBlogs = async (req, res) => {
    try {
        const userId = req.user._id;
        const blogs = await Blog.find({author: userId});
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addBlog = async (req, res) => {
    try {
        const userId = req.user._id;
        const {title, description, image, category} = req.body;
        if(!title || !description || !image || !category) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const newBlog = new Blog({title, description, image, category, author: userId, authorName: req.user.name});
        await newBlog.save();
        res.status(201).send({status: 201, message: 'Blog added successfully', data: newBlog});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateBlog = async (req, res) => {
    const {id} = req.params;
    const {title, description, image, category} = req.body;
    try {
        if(!title || !description || !image || !category) {
            return res.status(400).json({message: 'All fields are required'});
        }
        await Blog.findByIdAndUpdate(id, {title, description, image, category});
        res.status(200).send({status: 200, message: 'Blog updated successfully', data: blog});
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteBlog = async (req, res) => {
    const {id} = req.params;
    try {
        await Blog.findByIdAndRemove(id);
        res.status(200).send({status: 200, message: 'Blog deleted successfully'});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
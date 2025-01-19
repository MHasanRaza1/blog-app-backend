import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This links the blog to the User collection
        required: true
    },
    authorName: {
        type: String, // Store the author's name
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: new Date(),
    }
});

const Blog = mongoose.model('blog', blogSchema);
export default Blog;
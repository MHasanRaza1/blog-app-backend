import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/connectDB.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.status(200).send('Blog App backend');
});

app.use('/user', userRoutes)
app.use('/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running`);
});

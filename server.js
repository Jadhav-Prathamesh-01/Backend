import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Log the MongoDB URI to see if it's loaded correctly
console.log('Mongo URI:', process.env.MONGODB_URI);

// Call the connectDB function
connectDB();

connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user',userRouter)
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

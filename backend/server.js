import express from 'express';
import router from './routes/goalRoutes.js';
import colors from 'colors';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', router);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));

import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import goalRouter from './routes/goalRoutes.js';
import userRouter from './routes/userRoutes.js';
import colors from 'colors';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

// serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, req) => res.send('Please set node_env to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));

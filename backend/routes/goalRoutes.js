import express from 'express';
const router = express.Router();
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, getGoals).post(protect, setGoal);

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

export default router;

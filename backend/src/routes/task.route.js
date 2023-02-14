import express from 'express';
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controller.js'

const router = express.Router();

router.get('/:listId/tasks', getTasks);
router.get('/:listId/tasks/:taskId', getTask);
router.post('/:listId/tasks', createTask);
router.put('/:listId/tasks', updateTask);
router.delete('/:listId/tasks/:taskId', deleteTask);

export default router;
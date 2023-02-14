import express from 'express';
import {
  getList,
  getLists,
  createList,
  updateList,
  deleteList,
} from '../controllers/list.controller.js'

const router = express.Router();

router.get('/', getLists);
router.get('/:listId', getList);
router.post('/', createList);
router.put('/', updateList);
router.delete('/:listId', deleteList);

export default router;
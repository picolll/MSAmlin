import { Router } from 'express';
import { getTasks, addTask, updateTaskOrder } from '../controllers/tasks';

const router = Router();

router.get('/', getTasks);
router.post('/', addTask);
router.put('/order', updateTaskOrder);

export default router;

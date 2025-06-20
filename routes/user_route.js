import express from 'express';
import { createUserController, getUserByIdController } from '../controllers/user_controller';

const router = express.Router();

router.post('/', createUserController);
router.get('/:id', getUserByIdController);

export default router;

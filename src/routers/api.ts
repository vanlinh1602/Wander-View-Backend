import { getUser } from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/user', getUser);

export default router;

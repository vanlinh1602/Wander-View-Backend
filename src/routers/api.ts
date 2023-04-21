import { getUser, updateUser } from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/getUser', getUser);
router.post('/updateUser', updateUser);

export default router;

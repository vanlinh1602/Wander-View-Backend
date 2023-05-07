import { getLocations } from 'controllers/loaction';
import { getUser, updateUser } from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/getUser', getUser);
router.post('/updateUser', updateUser);

router.post('/getLocations', getLocations);

export default router;

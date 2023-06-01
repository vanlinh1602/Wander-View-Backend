import { addReview, getLocations, getReviews } from 'controllers/loaction';
import { getUser, updatePlan, updateUser, updateUserSave } from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/getUser', getUser);
router.post('/updateUser', updateUser);
router.post('/updatePlan', updatePlan);
router.post('/updateUserSave', updateUserSave);

router.post('/getLocations', getLocations);
router.post('/addReview', addReview);
router.post('/getReviews', getReviews);

export default router;

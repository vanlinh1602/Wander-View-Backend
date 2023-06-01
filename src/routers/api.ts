import { addReview, getLocations, getReviews } from 'controllers/loaction';
import { getUser, updatePlan, updateUser } from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/getUser', getUser);
router.post('/updateUser', updateUser);
router.post('/updatePlan', updatePlan);

router.post('/getLocations', getLocations);
router.post('/addReview', addReview);
router.post('/getReviews', getReviews);

export default router;

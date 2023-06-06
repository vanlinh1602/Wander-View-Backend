import {
  addLocation,
  addReview,
  getLocations,
  getReviews,
  removeReview,
} from 'controllers/loaction';
import {
  checkAdmin,
  getUser,
  updateNotify,
  updatePlan,
  updateUser,
  updateUserSave,
} from 'controllers/users';
import express from 'express';

const router = express.Router();
router.post('/getUser', getUser);
router.post('/updateUser', updateUser);
router.post('/updatePlan', updatePlan);
router.post('/updateUserSave', updateUserSave);
router.post('/updateNotify', updateNotify);
router.post('/checkAdmin', checkAdmin);

router.post('/getLocations', getLocations);
router.post('/addReview', addReview);
router.post('/removeReview', removeReview);
router.post('/getReviews', getReviews);
router.post('/addLocation', addLocation);

export default router;

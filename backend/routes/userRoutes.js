import express from 'express';
import {
    authUser ,
    deleteUser,
    getUserProfile,
    registerUser,
    getUsers,
    updateUserProfile,   
} from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/login').post(authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser);

export default router;
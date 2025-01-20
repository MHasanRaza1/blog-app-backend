import express from 'express';
import { getUsers, loginUser, registerUser, resetotpVerification, resetPassword, resetPasswordOTP, verifyEmail } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.get('/', getUsers);
userRoutes.post('/login', loginUser);
userRoutes.post('/register', registerUser);
userRoutes.post('/verify-email', verifyEmail);
userRoutes.post('/reset-password-otp', resetPasswordOTP);
userRoutes.post('/reset-otp-verification', resetotpVerification);
userRoutes.post('/reset-password', resetPassword);

export default userRoutes;
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import otpGenerate from "../helper/otpGenerate.js";
import { resetPasswordCode, sendCode, welcome } from "../helper/email.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ status: 200, message: 'users fetched successfully', data: users });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { username, name, email, password } = req.body;
        console.log(req.body)
        // Check for missing fields
        if (!username || !name || !email || !password) {
            return res.status(400).send({ status: 400, message: 'All fields are required' });
        }

        // Check if user already exists
        const isExist = await User.findOne({ email });
        if (isExist) {
            return res.status(400).send({ status: 400, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate OTP and expiry time
        const otp = otpGenerate(); // Ensure this function generates the OTP correctly

        // Create a new user
        const createUser = new User({
            username,
            name,
            email,
            password: hashedPassword,
            otp,
        });

        // Save the user to the database
        await createUser.save();

        // Send the OTP email
        try {
            await sendCode(createUser.email, otp, createUser.name); // Ensure sendCode is defined and handles sending emails
        } catch (emailError) {
            return res.status(500).send({ status: 500, message: 'Failed to send OTP email', error: emailError.message });
        }

        // Send success response
        res.status(201).send({
            status: 201,
            message: 'User created successfully. Please verify your email.',
            data: createUser,
        });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export const verifyEmail = async (req, res) => {
    try {
        const { otp } = req.body;
        // Validate input
        if (!otp) {
            return res.status(400).send({ status: 400, message: 'OTP is required' });
        }
        const user = await User.findOne({
            otp,
        });
        if (!user) {
            return res.status(400).send({ status: 400, message: 'Invalid OTP' });
        }
        user.isVerified = true;
        user.otp = null;
        await user.save();
        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        await welcome(user.email, user.name);
        res.status(200).send({ status: 200, message: 'Email verified successfully', data: user, token });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send({ status: 400, message: 'Email and password are required' });
        }
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).send({ status: 401, message: 'Invalid password' });
            }
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            return res.status(200).send({ status: 200, message: 'Login successfully', data: user, token });
        } else {
            return res.status(404).send({ status: 401, message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};


export const resetPasswordOTP = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ status: 400, message: 'Email is required' });
        }
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).send({ status: 404, message: 'User not found' });
        }
        const otp = otpGenerate();
        findUser.otp = otp;
        await findUser.save();
        await resetPasswordCode(findUser.email, findUser.name, otp);
        res.status(200).send({ status: 200, message: 'OTP sent successfully' });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export const resetotpVerification = async (req, res) => {
    try {
        const {otp} = req.body;
        if (!otp) {
            return res.status(400).send({ status: 400, message: 'OTP is required' });
        }
        const user = await User.findOne({otp});
        if (!user) {
            return res.status(400).send({ status: 400, message: 'User not found' });
        }
        if(user.otp !== otp){
            return res.status(400).send({ status: 400, message: 'Invalid OTP' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        user.otp = null;
        await user.save();
        res.status(200).send({ status: 200, message: 'OTP verified successfully', data: user, token: token }); 
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { password, token } = req.body;
        if (!password) {
            return res.status(400).send({ status: 400, message: 'All fields are required' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).send({ status: 404, message: 'User not found' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).send({ status: 200, message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).send({ status: 500, message: error.message });
    }
};
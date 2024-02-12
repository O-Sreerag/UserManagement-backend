// services/jwt.ts
import jwt from 'jsonwebtoken';
require('dotenv').config();

export const generateToken = (userId: string, username: string) => {
    // console.log("jwt secret from env : " , process.env.JWT_SECRET)
    return jwt.sign({ userId, username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

export const generateTokenForAdmin = (Id: string, Email: string) => {
    // console.log("jwt secret from env : " , process.env.JWT_SECRET)
    return jwt.sign({ Id, Email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};
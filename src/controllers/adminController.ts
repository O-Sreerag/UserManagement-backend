// controllers/admminController.ts
import { Request, Response } from 'express';

import Admin from '../models/adminModel';
import User from '../models/userModel';
import { generateTokenForAdmin } from '../services/jwt';

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    console.log("Admin login route");

    const { email, password } = req.body;
    console.log("Data from frontend:", email, password);

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ error: 'Admin Email not found' });
    }

    // Validate password
    const adminPassword = admin.password as string;
    const isValidPassword = (adminPassword == password)
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate token with admin Id and email
    const token = generateTokenForAdmin(admin._id.toString(), email as string);

    // If admin and password are valid, return success response
    res.status(200).json({ message: 'Login successful', token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const adminSendUsers = async (req: Request, res: Response) => {
  try {
    console.log('Admin get users data route');

    const users = await User.find();
    res.status(200).json(users);
  } catch(error) {
    console.log(error)
    res.status(500).json({error: 'Internal server error'})
  }
}
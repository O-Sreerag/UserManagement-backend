// controllers/userController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/userModel';
import { generateToken } from '../services/jwt';

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log("user signup route")

    const { username, email, password } = req.body;
    console.log("data from frontend : " , username, email, password )

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
      console.log("User login route");
  
      const { email, password } = req.body;
      console.log("Data from frontend:", email, password);
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Validate password
      const userPassword = user.password as string;
      const isValidPassword = await bcrypt.compare(password as string, userPassword);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Get the username from the user object
      const username = user.username;

      // Generate token with userId and username
      const token = generateToken(user._id.toString(), username as string);
  
      // If user and password are valid, return success response
      res.status(200).json({ message: 'Login successful', token, username});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
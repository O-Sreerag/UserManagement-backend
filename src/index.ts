// Import required modules
import express, { Request, Response } from 'express';
const cors = require('cors');
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./services/uploadthing";
const {
    createUploadthingExpressHandler,
    createUploadthing,
  } = require("uploadthing/express");
  
require('dotenv').config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Middleware
app.use(express.json());

// mongoose config
const database = require('./services/mongoose').default
database()

// Routes
const usersRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');

app.use(cors());
app.use('/', usersRouter);
app.use('/admin', adminRouter);

console.log(process.env.UPLOADTHING_APP_ID)

app.use(
    "/api/uploadthing",
    createUploadthingExpressHandler({
      router: uploadRouter,
      config: { 
        uploadthingId: process.env.UPLOADTHING_APP_ID,
        uploadthingSecret: process.env.UPLOADTHING_SECRET,
        callbackUrl: "http://localhost:3000/api/uploadthing",
      },
      
    }),
  );

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

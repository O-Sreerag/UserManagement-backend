// routes/userRoutes.ts
import express from 'express';
import { addImage, createUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/addImage', addImage)

// Other routes for user CRUD operations
module.exports = router;

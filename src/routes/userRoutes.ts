// routes/userRoutes.ts
import express from 'express';
import { createUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);

// Other routes for user CRUD operations
module.exports = router;

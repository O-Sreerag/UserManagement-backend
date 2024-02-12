// routes/adminRoutes.ts
import express from 'express';
import { adminSendUsers, loginAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/users', adminSendUsers)

// Other routes for user CRUD operations
module.exports = router;

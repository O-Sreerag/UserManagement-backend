// routes/adminRoutes.ts
import express from 'express';
import { adminDeleteUser, adminEditUserData, adminEditUserStatus, adminSendUsers, loginAdmin } from '../controllers/adminController';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/users', adminSendUsers);
router.post('/edit', adminEditUserData);
router.post('/edit_status', adminEditUserStatus);
router.post('/delete', adminDeleteUser)

// Other routes for user CRUD operations
module.exports = router;

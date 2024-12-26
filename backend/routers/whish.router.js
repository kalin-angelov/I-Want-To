import express from 'express';
import { getWhishes, createWhish, updateWhish, deleteWhish } from '../controllers/whish.controller.js';

const router = express.Router();

router.get('/whishes', getWhishes);
router.post('/whish', createWhish);
router.put('/whish/:id', updateWhish);
router.delete('/whish/:id', deleteWhish);

export default router;
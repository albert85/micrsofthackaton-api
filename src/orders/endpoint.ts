import express from 'express';
import AuthCheck from '../utils/validators';
import OrderService from './service';

const router = express.Router();

router.post('/:productId', AuthCheck.checkAuthStatus, AuthCheck.checkToken, OrderService.createOrder);
router.get('/', AuthCheck.checkAuthStatus, AuthCheck.checkToken, OrderService.getAllUserOrder);
router.get('/:orderId', AuthCheck.checkAuthStatus, AuthCheck.checkToken, OrderService.getOneOrder);

export default router;
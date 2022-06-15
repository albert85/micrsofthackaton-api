import express from 'express';
import AuthCheck from '../utils/validators';
import ProductService from './service';

const router = express.Router();

router.post('/', AuthCheck.checkAuthStatus, AuthCheck.checkToken, ProductService.createProduct);
router.get('/', AuthCheck.checkAuthStatus, AuthCheck.checkToken, ProductService.getAllProduct);
router.get('/:productId', AuthCheck.checkAuthStatus, AuthCheck.checkToken, ProductService.getOneProduct);

export default router;
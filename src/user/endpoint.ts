import express from 'express';
import User from './services';
import AuthCheck from '../utils/validators';

const route = express.Router();

route.post('/register', User.register);
route.post('/login', User.userLogin);
route.get('/user-info', AuthCheck.checkAuthStatus, AuthCheck.checkToken, User.getUser);

export default route;
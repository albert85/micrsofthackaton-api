/* eslint-disable no-useless-escape */
import { check } from 'express-validator';

const validateUserData = {
  register: [
    check('firstName')
      .notEmpty()
      .withMessage('first name must not be empty'),
    check('lastName')
      .notEmpty()
      .withMessage('last name must not be empty'),
    check('profilePhoto')
      .notEmpty()
      .withMessage('profilePhoto must not be empty'),
    check('phone')
      .notEmpty()
      .withMessage('phone must not be empty'),
    check('password')
      .notEmpty()
      .withMessage('password must not be empty')
      .isLength({ min: 6})
      .withMessage('The password must be minimum of 8 characters')
      .isAlphanumeric()
      .withMessage('It must contain a combination atleast an alphabet and number'),
  ],
  login: [
    check('phone')
      .notEmpty()
      .withMessage('agentId must not be empty'),
    check('password')
      .notEmpty()
      .withMessage('password must not be empty'),
  ],
};

export default validateUserData;

import bcrypt from 'bcryptjs';
import {ObjectId} from 'mongodb';
import { generateToken, handleResponse } from '../utils/util';
import { Request, Response} from 'express';
import UserModel from './models/users';


class UserService {
  static async register(req: Request, res: Response) {
    const userDetail = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      type: req.body.type || 'buyer',
      password: await bcrypt.hash(req.body.password, 10),
    };

    const userDetailDb = await UserModel.findOne({
      email: req.body.phone,
    });

    if (userDetailDb) {
      return handleResponse(res, 404, false, 'A user exist with the email');
    }

    const user = await UserModel.create(userDetail);
    const newUser = user.toObject();
    delete newUser.password;

    const token = generateToken({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      userId: newUser._id
    });

    return handleResponse(
      res,
      201,
      true,
      'Registering User was successfully',
      { user: {...newUser} },
      token
    );
  }


  static async userLogin(req: Request, res: Response) {
    const userDetail = await UserModel.findOne({
      email: req.body.email,
    });


    if (!userDetail) {
      return handleResponse(res, 404, false, 'User was not found', {
        error: true,
      });
    }

    const psd = await bcrypt.compare(req.body.password, userDetail.password);

    if (!psd) {
      return handleResponse(
        res,
        404,
        false,
        'Incorrect password was supplied',
        { error: true },
      );
    }

    const token = generateToken({
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      userId: userDetail._id
    });


    return handleResponse(
      res,
      200,
      true,
      'User login successfully',
      {
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        email: userDetail.email,
        userId: userDetail._id
      },
      token,
    );
  }

  static async getUser(req: any, res: Response) {
    try {

      const userDetail = await UserModel.findOne({
        // @ts-ignore
        _id: ObjectId(req.user.userId),
      });
      
      return handleResponse(res, 200, true, 'User Data successfully retrieved',  {
        firstName: userDetail.firstName,
        lastName: userDetail.lastName,
        email: userDetail.email,
        userId: userDetail._id,
        phone: userDetail.phone
      });
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong on retrieving user', error);
    }
  }

}

export default UserService;
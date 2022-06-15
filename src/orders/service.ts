
import { Response, Request } from 'express';
import {ObjectId} from 'mongodb';
import { handleResponse } from '../utils/util';
import OrderModel from './models/orders';


class ProductService {
  static async createOrder(req: any, res: Response){    
    try {
      const orderDetails = {
        destination: req.body.destination,
        qty: req.body.qty,
        logisticsStatus: req.body.logisticsStatus,
        productId: req.params.productId,
        paymentStatus: 'pending',
        buyerId: req.user.userId,
      };
  
      const data  = await OrderModel.create(orderDetails);
      return handleResponse(res, 201, true, 'Order was successfully created', data)
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during creating order', error);
    }
  }

  static async getAllUserOrder(req:any, res: Response){
    try {
      const data = await OrderModel.find({
        buyerId: req.user.userId
      });
      return handleResponse(res, 200, true, 'Orders was successfully retrived', data)
      
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during retrieving all orders', error);
    }
  }

  static async getOneProduct(req: Request, res: Response){
    try {
      const data = await OrderModel.findOne({
        // @ts-ignore
        _id: ObjectId(req.params.productId)
      });
      return handleResponse(res, 200, true, 'Order was successfully retrived', data)
      
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during retrieving the product', error);
    }
  }
}

export default ProductService;

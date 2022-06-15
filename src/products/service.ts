
import { Response, Request } from 'express';
import {ObjectId} from 'mongodb';
import { handleResponse } from '../utils/util';
import ProductModel from './models/products';


class ProductService {
  static async createProduct(req: any, res: Response){    
    try {
      const productDetails = {
        title: req.body.title,
        price: req.body.price,
        productAvatar: req.body.productAvatar,
        productName: req.body.productName,
        sackType: req.body.sackType,
        sellerId: req.user.userId,
        quantityAvailable: req.body.quantityAvailable
      };
  
      const data  = await ProductModel.create(productDetails);
      return handleResponse(res, 201, true, 'Product was successfully created', data)
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during creating product', error);
    }
  }

  static async getAllProduct(req:any, res: Response){
    try {
      const data = await ProductModel.find();
      return handleResponse(res, 200, true, 'All Products was successfully retrived', data)
      
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during retrieving all products', error);
    }
  }

  static async getOneProduct(req: Request, res: Response){
    try {
      const data = await ProductModel.findOne({
        // @ts-ignore
        _id: ObjectId(req.params.productId)
      });
      return handleResponse(res, 200, true, 'Product was successfully retrived', data)
      
    } catch (error) {
      return handleResponse(res, 500, false, 'Something went wrong during retrieving the product', error);
    }
  }
}

export default ProductService;

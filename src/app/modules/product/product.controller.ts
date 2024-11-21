import { Request, Response } from 'express';
import productValidationSchema from './product.validation';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.product;
    // validate incoming request data
    const zodParsedData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodParsedData);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Internal server error',
      error: err,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Successfully retreived all products",
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
      error: err,
    })
  }

}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId)
    res.status(200).json({
      success: true,
      message: "Successfully retreived a product",
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
      error: err,
    })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body;
    const result = await ProductServices.updateProductInDB(productId, updatedData)
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
      error: err,
    })
  }

}

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};

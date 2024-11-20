import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        // validate incoming request data
        const zodParsedData = productValidationSchema.parse(productData);

        const result = await ProductServices.createProductIntoDB(zodParsedData)
        res.status(201).json({
            success: true,
            message: "Product created successfully",
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
}
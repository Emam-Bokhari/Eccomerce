import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
}

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findOne({ _id: productId })
  return result;
}

const updateProductInDB = async (productId: string, updatedData: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, updatedData, { new: true })
  return result;
}

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
};

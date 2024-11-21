// import mongoose from 'mongoose';
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

  // const result = await Product.aggregate([
  //   //stage:1
  //   { $match: { _id: new mongoose.Types.ObjectId(productId) } }
  // ])
  return result;
}

const updateProductInDB = async (productId: string, updatedData: TProduct) => {
  const result = await Product.findByIdAndUpdate(productId, updatedData, { new: true })
  return result;
}

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.updateOne({ _id: productId }, { isDeleted: true })
  return result;
}

const searchProductInDB = async (searchTerm: string) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } }
    ],
    isDeleted: { $ne: true },
  })
  return result;
}


export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductInDB,
};

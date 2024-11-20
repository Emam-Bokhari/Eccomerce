import mongoose from 'mongoose';
const { Schema } = mongoose;

const variantsSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  variants: {
    type: [variantsSchema],
    default: [],
  },
  inventory: {
    type: {
      inventorySchema,
      required: true,
    },
  },
});

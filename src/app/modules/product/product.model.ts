import mongoose, { model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new mongoose.Schema({
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
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [
      {
        type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        }
      }
    ],
    _id: false,
  },
  inventory: {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
});

// document middleware
productSchema.pre("find", function () {
  this.find({ isDeleted: { $ne: true } })
})

productSchema.pre("findOne", function () {
  this.findOne({ isDeleted: { $ne: true } })
})

// aggregate middleware
productSchema.pre("aggregate", function () {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
})

export const Product = model<TProduct>('Product', productSchema);

import { z } from 'zod';

const productValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Product name is required')
    .max(100, 'Product name can not exceed 100 characters'),
  description: z
    .string()
    .trim()
    .min(1, 'Description is required')
    .max(500, 'Description can not exceed 500 characters'),
  price: z.number().min(0, 'Price must be greater than or equal to 0'),
  category: z
    .string()
    .min(1, 'Category is required')
    .max(100, 'Category can not exceed 100 characters'),
  tags: z.array(z.string()).nonempty('Tags cannot be empty'),
  variants: z
    .array(
      z.object({
        type: z.string().trim().min(1, 'Variant type is required'),
        value: z.string().trim().min(1, 'Variant value is required'),
      }),
    )
    .min(1, 'At least one variant is required'),
  inventory: z.object({
    quantity: z.number().min(0, 'Quantity must be greater than or equal to 0'),
    inStock: z.boolean(),
  }),
  isDeleted: z.boolean().default(false),
});

export default productValidationSchema;

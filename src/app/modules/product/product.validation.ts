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
        .max(500, 'Product description can not exceed 500 characters'),
    price: z.number().min(0, 'Price must be at least 0'),
    category: z.string().trim().min(1, 'Category is required'),
    tags: z.array(z.string()).optional(),
    variants: z
        .array(
            z.object({
                type: z.string().min(1, 'Variant type is required'),
                value: z.string().min(1, 'Variant value is required'),
            }),
        )
        .optional(),
    inventory: z.object({
        quantity: z.number().min(0, 'Quantity must be at least 0'),
        inStock: z.boolean(),
    }),
});

export default productValidationSchema;

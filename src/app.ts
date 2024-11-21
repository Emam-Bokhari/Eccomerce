import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes
app.use('/api/v1/products', ProductRoutes);

app.use('/health', (req: Request, res: Response) => {
  res.send('Server is running...');
});

export default app;

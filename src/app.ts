import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

app.use('/health', (req: Request, res: Response) => {
  res.send('Server is running...');
});

export default app;

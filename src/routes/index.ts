import express from 'express';
import userRoutes from './userRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

export default app;
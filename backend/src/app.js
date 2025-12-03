import express, { json } from 'express';
import apiRouter from './routes/index';
import cors from 'cors';

const app = express();

// Config
app.use(json());
app.use(cors());

// Routes
app.use(apiRouter);

export default app;

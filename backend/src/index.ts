import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';

import pg from 'pg';
const { Pool } = pg;

const app = express();
const port = 5000;
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'taskmanager',
  password: 'postgres',
  port: 5432,
});

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export { pool };

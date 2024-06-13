import { Request, Response } from 'express';
import { pool } from '../index';

export const getTasks = async (req: Request, res: Response) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM tasks ORDER BY position');
    res.json(result.rows);
  } finally {
    client.release();
  }
};

export const addTask = async (req: Request, res: Response) => {
  const { task } = req.body;
  const client = await pool.connect();
  try {
    const result = await client.query('INSERT INTO tasks (description) VALUES ($1) RETURNING *', [task]);
    res.json(result.rows[0]);
  } finally {
    client.release();
  }
};

export const updateTaskOrder = async (req: Request, res: Response) => {
  const { tasks } = req.body;
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    for (let i = 0; i < tasks.length; i++) {
      await client.query('UPDATE tasks SET position = $1 WHERE id = $2', [i, tasks[i].id]);
    }
    await client.query('COMMIT');
    res.json({ message: 'Order updated' });
  } catch (e) {
    await client.query('ROLLBACK');
    res.status(500).json({ message: 'Error updating order' });
  } finally {
    client.release();
  }
};

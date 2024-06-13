import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from '../routes/auth';

const app = express();
app.use(bodyParser.json());
app.use('/auth', authRoutes);

describe('POST /auth/login', () => {
  it('should respond with a token for valid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'user', password: '123' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should respond with 401 for invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'foo', password: 'bar' });
    expect(response.status).toBe(401);
  });
});

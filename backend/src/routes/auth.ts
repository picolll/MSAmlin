import { Router } from 'express';
const router = Router();

// Simple check for password
router.post('/login', (req, res) => {

  const { username, password } = req.body;
  
  if (username === 'user' && password === '123') {
    return res.json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

export default router;

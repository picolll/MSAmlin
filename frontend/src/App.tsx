// src/App.tsx
import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskPage from './pages/TaskPage';
import OtherPage from './pages/OtherPage';
import ProtectedRoute from './components/ProtectedRoute';
import LogoutButton from './components/LogoutButton';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
        <LogoutButton />
      </nav>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<ProtectedRoute element={<TaskPage />} path="/tasks" />} />
        <Route path="/other" element={<ProtectedRoute element={<OtherPage />} path="/other" />} />
      </Routes>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Register from '../routes/Register';
import Login from '../routes/Login';
import Qna from '../routes/Qna';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/qna" element={<Qna />} />
    </Routes>
  );
};

export default App;
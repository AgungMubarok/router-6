import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App.jsx';
import DetailProduct from '../Detail.jsx';

const RouterBuatan = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBuatan;

import { useEffect, useState } from 'react';
import {Routes , Route, useLocation } from 'react-router-dom';
import './App.css';
import AdminBlog from './Components/Admin/AdminBlog';
import AdminProducts from './Components/Admin/AdminProducts';
import BlogCreate from './Components/Admin/Create/BlogCreate';
import Dashboard from './Components/Admin/Dashboard';
import HeaderAdmin from './Components/Admin/HeaderAdmin';
import TrackOrder from './Components/Admin/TrackOrder';
import AllBlogs from './Components/Blog/AllBlogs';
import SingleBlog from './Components/Blog/SingleBlog';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import ProductAll from './Components/Product/ProductAll';
import SingleProduct from './Components/Product/SingleProduct';
import Login from './Components/userForm/Login';
import Register from './Components/userForm/Register';

function App() {
  const {pathname} = useLocation()
  
  return (
      <>
      {!pathname.split('/').includes('dashboard') ? <Header /> : <HeaderAdmin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blogs' element={<AllBlogs />} />
        <Route path='/blogs/singleid/:id' element={<SingleBlog />} />
        <Route path='/products' element={<ProductAll />} />
        <Route path='/products/singleid' element={<SingleProduct />} />

        {/* dashboard api */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/blog' element={<AdminBlog />} />
        <Route path='/dashboard/blog/create' element={<BlogCreate />} />
        <Route path='/dashboard/product' element={<AdminProducts />} />
        <Route path='/dashboard/track-order' element={<TrackOrder />} />

        {/* 404 */}
        <Route path='*' element={<NotFound />} />

      </Routes>  
      {!pathname.split('/').includes('dashboard') ? <Footer /> : null}
      </>
  );
}

export default App;

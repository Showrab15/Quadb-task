import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
    return (
        <>
             <Navbar></Navbar>
              <Outlet></Outlet>
              <ToastContainer></ToastContainer>
              <Footer></Footer>
        </>
    );
};

export default MainLayout;
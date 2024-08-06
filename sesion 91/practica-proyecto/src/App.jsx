import { useState } from "react";
import NotificacionMessage from "./components/NotificacionMessage";
import "./App.css";
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
    {/* manejo de rutas con react router DOM */}
    
      <h1 className='text-3xl font-bold underline'>Mi-APP</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/CategoryProducts" element={<CategoryProducts />} />
        </Routes>
      </BrowserRouter>

      {/* <div><NotificacionMessage/></div> */}
    </>
  );
}

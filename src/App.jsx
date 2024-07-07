import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Add from "./pages/Add/Add";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

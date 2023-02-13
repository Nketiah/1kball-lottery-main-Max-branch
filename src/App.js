import React, { useState } from "react";
import "./index.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import Apis from "./components/Apis/Apis";

const App = () => {

const[hidePage, setHidePage] = useState(false)



  return (
    <BrowserRouter>
        <Navbar setHidePage={setHidePage} />
      <div className="scroll" style={{ MozAppearance: 'none' }}>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <About /> */}
        {/* <Results /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          {/* <Route path="/apis" element={<Apis />} /> */}
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/result" element={<Results  />}  />
        </Routes>
        {/* <Dummy/> */}
      </div>
        <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;

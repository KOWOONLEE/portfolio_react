import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

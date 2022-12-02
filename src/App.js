import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

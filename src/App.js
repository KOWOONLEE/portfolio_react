import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import SecondProject from "./pages/SecondProject";
import About from "./components/About";
import ProjectData from "../src/assets/data/project.json";

const App = () => {
  const [project, setProject] = useState(ProjectData);

  return (
    <BrowserRouter>
      {/* <GlobalStyle /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/project/first"
          element={<SecondProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/second"
          element={<SecondProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/third"
          element={<SecondProject project={project} setProject={setProject} />}
        />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

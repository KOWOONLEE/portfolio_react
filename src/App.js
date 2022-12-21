import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import FirstProject from "./pages/FirstProject";
import SecondProject from "./pages/SecondProject";
import About from "./components/About";
import ProjectData from "../src/assets/data/project.json";
import ThirdProject from "./pages/ThirdProject";

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
          element={<FirstProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/second"
          element={<SecondProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/third"
          element={<ThirdProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/fourth"
          element={<ThirdProject project={project} setProject={setProject} />}
        />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

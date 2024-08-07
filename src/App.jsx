import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import FirstProject from "./pages/FirstProject";
import SecondProject from "./pages/SecondProject";
import ProjectData from "./assets/data/project.json";
import ThirdProject from "./pages/ThirdProject";
import FourthProject from "./pages/FourthProject";
import EasternskyProject from "./pages/easternskyProject";
import MouseCursor from "./components/MouseCursor";

const App = () => {
  const [project, setProject] = useState(ProjectData);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MouseCursor />
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
          element={<FourthProject project={project} setProject={setProject} />}
        />
        <Route
          path="/project/easternsky"
          element={
            <EasternskyProject project={project} setProject={setProject} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

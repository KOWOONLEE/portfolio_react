import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import FirstProject from "./pages/FirstProject";
import SecondProject from "./pages/SecondProject";
import ProjectData from "./assets/data/project.json";
import ThirdProject from "./pages/ThirdProject";
import FourthProject from "./pages/FourthProject";

const App = () => {
  const [project, setProject] = useState(ProjectData);

  return (
    <Router>
      <Routes basename={process.env.PUBLIC_URL}>
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
      </Routes>
    </Router>
  );
};

export default App;

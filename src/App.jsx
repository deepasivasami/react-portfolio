




import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Abouts from "./Components/Abouts";
import Skill from "./Components/Skill";
import Res from "./Components/Res";

function App() {
  return (
    <>
   <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<Abouts/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project />} />
        <Route path="/resume"element={<Res/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

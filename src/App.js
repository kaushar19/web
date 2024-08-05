import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import CountNumber from "./components/CountNumber";
import CMS from "./components/CMS";
import TodoApp from "./components/TodoApp";
import Calculator1 from "./components/Calculator1";
import TimerCounter from "./components/TimerCounter";
import Calculator2 from "./components/Calculator2";
import RHome from "./components/Resume/RHome";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/countnumber" element={<CountNumber />} />
        <Route path="/cmsreact" element={<CMS />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/calculator1" element={<Calculator1 />} />
        <Route path="/timercounter" element={<TimerCounter />} />
        <Route path="/calculator2" element={<Calculator2 />} />
        <Route path="/resume" element={<RHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

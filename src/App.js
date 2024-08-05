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
        <Route path="/web" element={<Home />} />
        <Route path="/web/gallery" element={<Gallery />} />
        <Route path="/web/project" element={<Project />} />
        <Route path="/web/contact" element={<Contact />} />
        <Route path="/web/countnumber" element={<CountNumber />} />
        <Route path="/web/cmsreact" element={<CMS />} />
        <Route path="/web/todoapp" element={<TodoApp />} />
        <Route path="/web/calculator" element={<Calculator1 />} />
        <Route path="/web/timercounter" element={<TimerCounter />} />
        <Route path="/web/calcy" element={<Calculator2 />} />
        <Route path="/web/resume" element={<RHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

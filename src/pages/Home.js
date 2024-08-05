import React from "react";
import Carousel from "../components/Carousel";
import Info from "../components/Info";
import ToolsSkills from "../components/ToolsSkills";
import Roles from "../components/Roles";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Carousel />
      <Info />
      <ToolsSkills />
      <Roles />
      <Footer />
    </>
  );
}

export default Home;

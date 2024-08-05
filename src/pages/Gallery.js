import React from "react";
import { galleryImages } from "../data/galleryImages";
import Footer from "../components/Footer";
function Gallery() {
  return (
    <>
      <div className="gcontainer gallerytopmargin">
        {galleryImages.map((v, i) => {
          return <ImageCart item={v} key={i} />;
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Gallery;

function ImageCart({ item }) {
  return (
    <>
      <div className="gallerycard">
        <img src={item.image} alt={item.alt} />
      </div>
    </>
  );
}

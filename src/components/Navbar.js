import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../photo/Photo1.jpg";
function Navbar() {
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg  nav-bg fixed-top">
        <div className="container-fluid nav-text ">
          <Link className="navbar-brand nav-text ms-2">
            <img src={Photo1} alt="myphoto" width={30} height={24} />
            <span className="ps-2">Kaushar Ahmad Ansari</span>
          </Link>
          <button
            className="navbar-toggler navbar-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active nav-text"
                  aria-current="page"
                  to="/"
                >
                  <span>HOME</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/gallery">
                  <span>GALLERY</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/project">
                  <span>PROJECTS</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-text" to="/contact">
                  <span className="nsv-text ">CONTACT US</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success nav-text"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
}

export default Navbar;

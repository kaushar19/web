import React from "react";
import Photo33 from "../images/Photo33.png";
import { Link } from "react-router-dom";
import Certificate from '../pdf/Certificate.pdf';
import KausarResume from '../pdf/KausarResume.pdf'
function Info() {
  return (
    <>
      <div className="aboutmain">
        <p className="text-center abouth">About Me</p>
        <div className="about mt-5">
          <div className="infocard infocard1">
            <img src={Photo33} alt="myphoto" />
            <p className="mt-3 hello">
              Hello , I'm
              <br />a <span className="text-danger">Front-End</span>{" "}
              <span className="text-info">Developer</span>
            </p>
            <p className="followme ">@FollowMe</p>
            <div className="d-flex justify-content-center mt-4">
              <Link className="" to="https://wa.me/qr/H5PJIUFMM5WZC1">
                <i
                  className="fa-brands fa-whatsapp mx-2 fa-2xl"
                  style={{ color: "#53c705" }}
                />
              </Link>
              <Link className="" to="https://www.linkedin.com/in/kaushar">
                <i
                  className="fa-brands fa-linkedin fa-2xl mx-2"
                  style={{ color: "#0077b5 " }}
                />
              </Link>
              <Link className="" to="tel:+919795078011">
                <i className="fa-solid fa-phone fa-2xl mx-2 call" />
              </Link>
              <Link className="" to="https://github.com/kaushar19">
                <i
                  className="fa-brands fa-github mx-2 fa-2xl"
                  style={{ color: "#24292e" }}
                />
              </Link>
            </div>
          </div>
          <div className="infocard infocard2">
            <table className="table table-borderless text-start mt-4">
              <tbody>
                <tr>
                  <td className="profiletxt">NAME</td>
                  <td className="tabletxt">: Kaushar Ahmad Ansari</td>
                </tr>
                <tr>
                  <td className="profiletxt">QUALIFICATION</td>
                  <td className="tabletxt">: B.Tech</td>
                </tr>
                <tr>
                  <td className="profiletxt">INTERNSHIP</td>
                  <td className="tabletxt">: MERN FullStack Developer</td>
                </tr>
                <tr>
                  <td className="profiletxt">JOB PROFILE</td>
                  <td className="tabletxt">: React Developer</td>
                </tr>

                <tr>
                  <td className="profiletxt">EMAIL ID</td>
                  <td className="tabletxt">: kausharbtt@gmail.com</td>
                </tr>
                <tr>
                  <td className="profiletxt">MOBILE NO </td>
                  <td className="tabletxt">: +919795078011</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-sm table-borderless text-center mt-5">
              <tbody>
                <tr>
                  <td>
                    <a href={KausarResume} >
                      <button className="btn  rounded-pill btn-sm detailsbtn">
                        <span className="btn-font">Download Resume</span>
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href={Certificate}>
                      <button className="btn  rounded-pill btn-sm detailsbtn">
                        <span className="btn-font">Download Certificate</span>
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
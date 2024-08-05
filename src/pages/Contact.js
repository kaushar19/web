import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
const Contact = () => {
  var formRef = useRef(null);
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzXT8yc9sQD4sAYQ-NcHSqG0tqKJVVGe6lVzlt49oM3PDA6Iu_Vk4KeqYjHM8-XdY67Aw/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="formtop text-center">GET IN TOUCH</h1>
      <div className="container-fluid ">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="row g-3 p-3 formcard"
          name="google-sheet"
          autoComplete="on"
        >
          <div className="col-sm-12">
            <label htmlFor="name" className="form-label">
              NAME
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              maxLength={35}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="col-sm-12">
            <label htmlFor="mobile" className="form-label">
              MOBILE NUMBER
            </label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              maxLength={10}
              id="mobile"
              placeholder="Enter Your Mobile Number"
              required
            />
          </div>
          <div className="col-sm-12">
            <label htmlFor="email" className="form-label">
              EMAIL ID
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter Your Email Id"
            />
          </div>
          <div className="col-sm-12">
            <label htmlFor="message" className="form-label">
              MESSAGE
            </label>

            <textarea
              type="text"
              className="form-control"
              name="message"
              id="message"
              maxLength={500}
              cols={30}
              rows={7}
              placeholder="Enter Message"
              required
            />
          </div>
          <div className="col-sm-12 d-grid  p-3">
            <input
              type="submit"
              className="btn   bg-info"
              value={loading ? "Loading..." : "SEND MESSAGE"}
              style={{ fontWeight: 500, color: "rgba(0,0,0,0.6)" }}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

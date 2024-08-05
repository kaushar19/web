import React from "react";
import { useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import Footer from "./Footer";
import {
  cusArr,
  addCustomer,
  searchCustomer,
  deleteCustomer,
} from "../bll code/CustomerBLL";

var cur_index = 0;
function CMS(props) {
  var [id, setId] = useState("");
  var [name, setName] = useState("");
  var [address, setAddress] = useState("");
  var [mobile, setMobile] = useState("");
  var [customers, setCustomers] = useState([]);
  function inputId(e) {
    setId(e.target.value);
  }

  function inputName(e) {
    setName(e.target.value);
  }

  function inputAddress(e) {
    setAddress(e.target.value);
  }

  function inputMobile(e) {
    setMobile(e.target.value);
  }

  //PL Code
  function addCustomer_Click(e) {
    addCustomer(id, name, address, mobile);
    setCustomers([...cusArr]);
    alert("Customer Added Successfully !");
  }

  function clear_screen() {
    setId("");
    setName("");
    setAddress("");
    setMobile("");
  }

  function searchCustomer_Click(e) {
    var cus = searchCustomer(id);
    if (cus) {
      setName(cus.name);
      setAddress(cus.address);
      setMobile(cus.mobile);
    } else {
      alert("Id not Found");
    }
  }

  function showCustomer(index) {
    var cus = cusArr[index];
    setId(cus.id);
    setName(cus.name);
    setAddress(cus.address);
    setMobile(cus.mobile);
  }

  function first_Click(e) {
    cur_index = 0;
    showCustomer(cur_index);
  }

  function next_Click(e) {
    if (cur_index < cusArr.length - 1) {
      cur_index++;
    }
    showCustomer(cur_index);
  }

  function previous_Click(e) {
    if (cur_index > 0) {
      cur_index--;
    }
    showCustomer(cur_index);
  }

  function last_Click(e) {
    cur_index = cusArr.length - 1;
    showCustomer(cur_index);
  }

  function deleteCustomer_Click() {
    var msg = deleteCustomer(id);
    alert(msg);
    setCustomers([...cusArr]);
  }

  function modifyCustomer_Click() {
    // alert("Modify Customer Connected");
  }
  return (
    <>
      {/* Start Code Here */}
      <div className="container-fluid cmsMargin topmargin">
        <h1 className="text-center  mb-5">
          <span className="cmsh">
            Customer Management System Using React.Js
          </span>
        </h1>
        <div className="row mt-4" id="resize">
          <div
            className="col-sm-6 form-mrng  cmsCard p-4"
            style={{ backgroundColor: "#eaedf7" }}
          >
            <div className="row g-3  " name="contact-form" autoComplete="on">
              <div className="col-md-12 ">
                <label className="form-label">ID</label>
                <input
                  type="tel"
                  className="form-control rounded-pill card2"
                  value={id}
                  onChange={inputId}
                  placeholder="Enter Your Full Name"
                  maxLength={8}
                  required=""
                />
              </div>
              <div className="col-md-12 ">
                <label className="form-label">NAME</label>
                <input
                  type="text"
                  className="form-control rounded-pill card2"
                  value={name}
                  onChange={inputName}
                  placeholder="Enter Your Full Name"
                  maxLength={35}
                  required=""
                />
              </div>
              <div className="col-md-12 ">
                <label className="form-label">MOBILE NUMBER</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={inputMobile}
                  className="form-control rounded-pill card2"
                  placeholder="Enter Your Mobile Number"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  maxLength={10}
                  required=""
                />
              </div>
              <div className="col-md-12 ">
                <label className="form-label">ADDRESS</label>
                <input
                  type="text"
                  className="form-control rounded-pill card2"
                  value={address}
                  onChange={inputAddress}
                  placeholder="Enter Your Full Name"
                  maxLength={35}
                  required=""
                />
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 addbtn btn-sm"
                  onClick={addCustomer_Click}
                >
                  <span className="btnText">Add</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 srchbtn btn-sm"
                  onClick={searchCustomer_Click}
                >
                  <span className="btnText">Search</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 dltbtn btn-sm"
                  onClick={deleteCustomer_Click}
                >
                  <span className="btnText">Delete</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button className="btn  rounded-pill card2 mdfbtn btn-sm">
                  {" "}
                  <span className="btnText">Modify</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 flbtn btn-sm"
                  onClick={first_Click}
                >
                  <span className="btnText">First</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 npbtn btn-sm"
                  onClick={next_Click}
                >
                  <span className="btnText">Next</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 npbtn btn-sm"
                  onClick={previous_Click}
                >
                  <span className="btnText">Previous</span>
                </button>
              </div>
              <div className="col-3 d-grid ">
                <button
                  className="btn  rounded-pill card2 flbtn btn-sm"
                  onClick={last_Click}
                >
                  <span className="btnText">Last</span>
                </button>
              </div>
              <div className="col-md-12 d-grid ">
                <button
                  className="btn  rounded-pill card2 btnn btn-sm"
                  id="clear-btn"
                  onClick={clear_screen}
                >
                  <span className="btnText">Clear Screen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-2 ">
        <div className="row main2 table-responsive">
          <DisplayCustomer customers={customers} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CMS;

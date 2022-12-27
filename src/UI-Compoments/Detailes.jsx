import React, { useState, useEffect } from "react";

function Detailes({ dob, gender, description, country }) {
  let age = new Date().getFullYear() - Number(dob.slice(0, 4));
  useEffect(() => {
    console.log("useEffect rendered");
    return () => {
      console.log("useEffect unmounted");
    };
  });

  console.log("acorrdion rendered");
  return (
    <>
      <div className="accordion-content">
        <div className="profile_attr">
          <div>
            <label>Age</label>
            <div style={{ display: "inline" }}>
              <input value={age} disabled={true} style={{ width: "30px" }} />
              <label>Years</label>
            </div>
          </div>

          <div>
            <label>Gender</label>
            <select>
              <option selected vlaue={gender}>
                {gender}
              </option>
              <option> male </option>
              <option> female </option>
              <option> Rather not say </option>
            </select>
          </div>

          <div>
            <label>Country</label>
            <input value={country} disabled={true}></input>
          </div>
        </div>
        <br />
        <label> Description</label>
        <p>{description}</p>
        {/* <textarea>{description}</textarea> */}
        <div id="actions">
          <i className="fa fa-trash-o fa-3fx" aria-hidden="true"></i>
          <i className="fa fa-pencil fa-3fx" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}

export default Detailes;

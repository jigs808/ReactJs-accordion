import React, { useState } from "react";

function Detailes({ dob, gender, description, country }) {
  let age = new Date().getFullYear() - Number(dob.slice(0, 4));
  return (
    <>
      

      <div className="accordion-content">
        <div style={{ display: "flex" }}>
          <div >
            age: <br />
            <input value={age} disabled={true}></input>
          </div>
          <div>
            gender: <br />
            {gender}
          </div>
          <div>
            country: <br />
            <input value={country} disabled={true}></input>
          </div>
        </div>

        <p>{description}</p>
        <i className="fa fa-trash-o fa-3fx" aria-hidden="true"></i>
        <i className="fa fa-pencil fa-3fx" aria-hidden="true"></i>
      </div>
    </>
  );
}

export default Detailes;

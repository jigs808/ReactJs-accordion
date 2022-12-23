import React, { useState } from "react";

function Detailes({ dob, gender, description, country }) {
  let age = new Date().getFullYear() - Number(dob.slice(0, 4));
  return (
    <>
      

      <div className="accordion-content">
        <div className='profile_attr'>
          <div >
            Age <br />
              <input value={age} disabled={true}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label style={{position:"relative",bottom:"1.6em"}}>
              Years
              </label>
          </div>
          <div>
            Gender <br />
            <select> 
            <option selected vlaue={gender}> {gender}</option>
            <option > male </option>
            <option > female </option>
            <option > Rather not say </option>
            
            </select>
          </div>
          <div>
            Country <br />
            <input value={country} disabled={true}></input>
          </div>
        </div>
        Description
        <p>{description}</p>
        <div id='actions'>
          <i className="fa fa-trash-o fa-3fx" aria-hidden="true"></i>
          <i className="fa fa-pencil fa-3fx" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}

export default Detailes;

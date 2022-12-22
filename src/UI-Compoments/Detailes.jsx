import React, { useState } from 'react';


function Detailes({ dob, gender, description, country}) {
    let age = new Date().getFullYear() - Number(dob.slice(0,4)) 
    return ( 
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <div className="accordion-content">
                <div style={{display:"inline-block"}}>
                    <div>age: <br />{age}</div>
                    <div>gender: <br />{gender}</div>
                    <div>country: <br />{country}</div>
                     
                </div>
                
                <p>{description}</p>
                <i className="fa fa-trash-o fa-3fx" aria-hidden="true"></i>
                <i className="fa fa-pencil fa-3fx" aria-hidden="true"></i>
            </div>
        </>
     );
}

export default Detailes;
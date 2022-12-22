import React, { useState } from 'react';
import Detailes from './Detailes';

const Accordion = ( { content: {id,first,last,dob,gender,description,picture,country} }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
              
              <div><img src={picture} alt='' />{`${first} ${last}`}</div>
              
            
              <div>{isActive ?
                  <i className="fa fa-angle-down " aria-hidden="true"></i>
                  : <i className="fa fa-angle-up " aria-hidden="true"></i>}
              </div>
      </div>
      {isActive && <Detailes {...{dob, gender, description,country}} />}
    </div>
  );
};

export default Accordion;
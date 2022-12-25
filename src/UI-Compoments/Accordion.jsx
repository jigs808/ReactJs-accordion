import { useState,useEffect } from "react";
import Detailes from "./Detailes";

const Accordion = ({
  content: { id, first, last, dob, gender, description, picture, country },active,onToogle
}
) => {
  const [isActive, setIsActive] = useState(false);
  
  

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToogle}>
        <div id="profile">
          <img src={picture} alt="" />
          <label>{`${first} ${last}`}</label>
        </div>

        <div id="chevron">
          {active ? (
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          )}
        </div>
      </div>
      {active && <Detailes {...{ dob, gender, description, country }} />}
    </div>
  );
};

export default Accordion;

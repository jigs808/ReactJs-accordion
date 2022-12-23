import personData from "../assets/celebrities.json"; // ES6 babel import syntax for local json/any-data
import Accordion from "../UI-Compoments/Accordion";
import { useState } from "react";

function List() {
  console.log(personData);
  const [isActiveId,setIsActiveID] = useState(false);
  
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <h1>Most Famous Celebrities</h1>

      <div className="accordion">
        <section>List view</section>
        <div className="bar">
          <i class="fa fa-search"></i>
          <input disabled className="searchbar" type="text" placeholder="Search User"></input>
        </div>
        {personData.map((data, i) => (
          <Accordion 
          key={i} 
          content={data} 
          active={isActiveId === i} 
          onToogle = {(e)=> setIsActiveID((isActiveId) => (isActiveId === i)? "srink" : i)}
          />
        ))}
      </div>
    </div>
  );
}

export default List;

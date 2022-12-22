import personData from '../assets/celebrities.json'; // ES6 babel import syntax for local json/any-data
import Accordion from '../UI-Compoments/Accordion';

function List() {
    console.log(personData)
    return (
        <div>
        <h1>Most Famous Celebrities</h1>
       
        <div className="accordion">
        <section>List view</section>
        <input type='search'></input>
          {personData.map((data,i) => (
            <Accordion key={i} content={data} />
          ))}
        </div>
      </div>
      
      
    
  
  );
  }
  
  export default List;
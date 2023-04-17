import React, {useState} from "react";
import data from './data';
import Tours from './components/Tours';

const App = () => {

  const [tours, settours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    settours(newTours);
  }

  if(tours.length===0){
    return (
      <div className="refresh " >
        <h2>NO TOURS LEFT !</h2>
        <button className="ref-btn" onClick={()=>settours(data)}> Refresh</button>
      </div>
    );
  }

  return (
    <div>
    
      <Tours tours = {tours} removeTour = {removeTour}></Tours>

  </div>
  );
}

export default App;

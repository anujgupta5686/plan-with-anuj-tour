import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';
const App = () => {
  const [tours, setTours] = useState(data);


  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }


  if (tours.length === 0) {
    return (
      <>
        <div className="refress">
          <h1>No Tours Left</h1>
          <button className="btn-white" onClick={() => setTours(data)}>Refress Content</button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="app">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    </>
  );
};

export default App;

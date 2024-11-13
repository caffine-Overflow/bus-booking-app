import React from "react";

const BusnoSelection = ({ onSelectBus }) => {
  // Function to handle bus number selection
  const busSelectHandler = (event) => {
    onSelectBus(event.target.value); // Update selected bus in the parent component (App.js)
  };

  return (
    <div>
      <label htmlFor="busno">Filter:</label>
      <select id="busno" onChange={busSelectHandler}>
        <option value="all">All</option>
        <option value="bus1">Bus 1</option>
        <option value="bus2">Bus 2</option>
        <option value="bus3">Bus 3</option>
      </select>
    </div>
  );
};

export default BusnoSelection;

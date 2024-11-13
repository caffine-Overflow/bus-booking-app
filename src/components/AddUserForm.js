import React, { useState } from "react";

const AddUserForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredBusNumber, setEnteredBusNumber] = useState("bus1");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const busNumberChangeHandler = (event) => {
    setEnteredBusNumber(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // Collect user input and log it
    console.log(
      `${enteredName}-${enteredEmail}-${enteredPhone}-${enteredBusNumber}`
    );
    // Reset the form
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredBusNumber("bus1");
  };

  return (
    <form
      onSubmit={addUserHandler}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <label htmlFor="username">Name:</label>
      <input
        type="text"
        id="username"
        value={enteredName}
        onChange={nameChangeHandler}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="number"
        id="phone"
        value={enteredPhone}
        onChange={phoneChangeHandler}
      />

      <label htmlFor="busnumber">Car Number:</label>
      <select
        id="busnumber"
        value={enteredBusNumber}
        onChange={busNumberChangeHandler}
      >
        <option value="bus1">Bus 1</option>
        <option value="bus2">Bus 2</option>
        <option value="bus3">Bus 3</option>
      </select>

      <button type="submit">Book</button>
    </form>
  );
};

export default AddUserForm;

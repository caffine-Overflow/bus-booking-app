import React, { useState } from "react";
import BusnoSelection from "./components/BusnoSelection";
import AddUserForm from "./components/AddUserForm";
import BookingList from "./components/BookingList";

function App() {
  const [selectedBus, setSelectedBus] = useState("all");
  const [userList, setUserList] = useState([]);

  // Handle bus selection change
  const busSelectionHandler = (bus) => {
    setSelectedBus(bus);
  };

  // Handle adding new user
  const addUserHandler = (user) => {
    setUserList((prevUserList) => [...prevUserList, user]);
  };

  // Handle deleting a user
  const deleteUserHandler = (index) => {
    setUserList((prevUserList) => prevUserList.filter((_, i) => i !== index));
  };

  // Handle editing a user (you can implement it if needed)
  const editUserHandler = (index) => {
    const updatedUser = prompt("Edit user details: ", userList[index].name); // Just an example prompt for editing
    if (updatedUser) {
      const updatedList = [...userList];
      updatedList[index] = { ...updatedList[index], name: updatedUser }; // Update name for simplicity
      setUserList(updatedList);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bus Booking</h1>

      {/* Pass the handler to BusnoSelection to update the bus selection */}
      <BusnoSelection onSelectBus={busSelectionHandler} />

      {/* Pass the selected bus number to AddUserForm */}
      <AddUserForm
        selectedBus={selectedBus}
        onAddUser={addUserHandler} // Add handler to AddUserForm
      />

      {/* Pass the userList and handlers to BookingList */}
      <BookingList
        users={userList.filter(
          (user) => selectedBus === "all" || user.busNumber === selectedBus
        )}
        onDeleteUser={deleteUserHandler}
        onEditUser={editUserHandler}
      />
    </div>
  );
}

export default App;

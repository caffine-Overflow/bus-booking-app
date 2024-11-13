import React from "react";

const BookingList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.phone} - {user.busNumber}
            <button onClick={() => onEditUser(index)}>Edit</button>
            <button onClick={() => onDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

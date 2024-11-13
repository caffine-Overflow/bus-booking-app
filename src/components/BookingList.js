import React from "react";

const BookingList = ({ users }) => {
  return (
    <div>
      <h2> Bookings</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.phone} - {user.busNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

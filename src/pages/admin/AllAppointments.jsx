import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments } = useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);
  return (
    <div>
      <p>All appointments</p>
      <div>
        <div>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date and Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;

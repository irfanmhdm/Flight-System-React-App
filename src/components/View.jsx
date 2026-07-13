import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/flights")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">View Flights</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Airline Name </th>
              <th>Flight Number</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Fare</th>
              <th>Available Seats</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.airline}</td>
                <td>{flight.flight_number}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.departure_date}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.arrival_time}</td>
                <td>₹{flight.fare}</td>
                <td>{flight.available_seats}</td>
                <td>{flight.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
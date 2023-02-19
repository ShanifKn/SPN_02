import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBookedSeats } from "../../api/agent/agnetApi";

const BookingView = () => {
  const [seats, setSeats] = useState([]);
  const token = useSelector((state) => state.agent.token);
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    const fetchSeats = async () => {
      const response = await getBookedSeats(id, token);
      const status = response.status;
      setSeats(response.data.seats);
    };
    fetchSeats();
  }, []);

  return (

    <div className="flex justify-center items-center h-screen gap-9">


      <fieldset className="grid grid-cols-3 gap-6">
        <div>
          <label
            className="block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
            <p className="text-gray-700">Next Day</p>

            <p className="mt-1 text-gray-900">£9.99</p>
          </label>
        </div>
      </fieldset>
      <fieldset className="grid grid-cols-3 gap-6">
        <div>
          <label
            className="block cursor-pointer rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500">
            <p className="text-gray-700">Next Day</p>
            <p className="mt-1 text-gray-900">£9.99</p>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default BookingView;

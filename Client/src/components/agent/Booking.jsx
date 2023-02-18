import React, { useState } from "react";

const Booking = () => {
  const [passengers, setPassengers] = useState([{ name: "", sex: "", age: "" }]);

  const hanldePassenger = () => {
    setPassengers([...passengers, { name: "", sex: "", age: "" }]);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ticket Booking Form</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You Can Only Book Seats Avaiable for you</p>
          </div>
          {passengers.map((singlepassengers, index) => (
            <div key={index} className="lg:w-1/2 md:w-2/3 mx-auto">
              <h1 className="font-medium text-gray-700 mb-2 mt-2">Passeger {index + 1}</h1>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Age</label>
                    <input
                      type="email"
                      name="age"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">Sex</label>
                    <input
                      type="text"
                      name="sex"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                {passengers.length - 1 === index && passengers.length < 4 && (
                  <div className="p-2 w-full">
                    <button
                      onClick={hanldePassenger}
                      className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Add Passengers
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Booking;

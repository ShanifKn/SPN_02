import React, { useState } from "react";
import { inviteAgent } from "../../api/admin/adminApi";

const AddAgent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleInvite = async () => {
    if (email === "" || name === "") {
      setError("All fileds are required !");
    }

    const form = new FormData();
    form.append("email", email);
    form.append("name", name);

    const response = await inviteAgent(form);
    console.log(response);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            {error && (
              <div class="rounded border-l-4 border-red-500 bg-red-50 p-4 w-56 mb-10 ">
                <strong class="block font-medium text-red-800  ">
                  {error}
                </strong>
              </div>
            )}

            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">
              To invite New agent
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              As an admin, you may need to invite an agent who can start booking
              tickets on behalf of your business
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleInvite}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Invite
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAgent;

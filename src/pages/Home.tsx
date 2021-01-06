import React, { useState } from "react";
import Search from "../components/Search";
import Timer from "../components/Timer";

import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    query: "",
    interval: 30000,
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

  return (
    <div className=" h-60 flex flex-col justify-center items-center">
      <div className="container m-auto px-5 text-center">
        <h1 className="font-cursive text-6xl text-primary-500">Driwtch</h1>
        <p className="dark:text-gray-300 mt-2 text-lg text-gray-500">
          Sketch as fast as you can...
        </p>
      </div>

      <div className="container m-auto px-5 mt-5">
        <input
          className=""
          type="text"
          name="query"
          value={state.query}
          onChange={handleInputChange}
          placeholder="I want to draw..."
        />
        <select
          name="interval"
          value={state.interval}
          onChange={handleInputChange}
        >
          <option value={30000}>30 seconds</option>
          <option value={60000}>1 minute</option>
          <option value={90000}>1 minute 30</option>
          <option value={120000}>2 minutes</option>
          <option value={150000}>2 minutes 30</option>
          <option value={150000}>3 minutes</option>
          <option value={210000}>3 minutes 30</option>
          <option value={240000}>4 minutes</option>
          <option value={270000}>4 minutes 30</option>
          <option value={300000}>5 minutes</option>
        </select>

        <Link
          type="submit"
          className="px-5 py-3 rounded-full bg-red-500"
          to={`/${state.query}/${state.interval}`}
        >
          Start
        </Link>
        {/* <Search />
        <Timer /> */}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import Switcher from "./Switcher";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [state, setState] = useState("");

  // Data is stored inside Global context
  const [data, setData] = useContext(GlobalContext);

  // Handle input to ge ta simple string
  function handleInputChange(event: React.FormEvent<HTMLInputElement>): void {
    setState(event.currentTarget.value);
  }

  // H
  function handleOnKeyPress(event: any) {
    if (event.key === "Enter") {
      if (state.length > 0) {
        fetchData();
      } else {
        alert("Field is empty !");
      }
    }
  }

  function fetchData() {
    setIsLoading(true);
    fetch(`https://driwtch.herokuapp.com/search/?searchquery=${state}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        setError("fetch failed");
      });
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <FontAwesomeIcon icon={faSpinner} pulse />;
  }

  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  return (
    <div>
      <div className="grid grid-cols-3">
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-bold text-gray-700"
          >
            Search something
          </label>
          <input
            name="search"
            className="mt-1 appearance-none rounded text-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10"
            type="text"
            placeholder="I want to draw..."
            onChange={handleInputChange}
            onKeyPress={handleOnKeyPress}
            value={state}
          />
        </div>

        <Button onClick={fetchData}>Search</Button>
      </div>

      <div className="rounded-md">
        <div className="flex flex-wrap justify-between full-w bg-gray-500 h-80 rounded-xl p-3">
          {data.slice(0, 6).map((link: string, index: number) => (
            <img
              className="w-40 h-40 object-cover border border-gray-300 rounded-xl bg-white"
              src={link}
              alt="Preview"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Card from "../components/Card";
import Search from "../components/Search";

import { motion } from "framer-motion";

const Home = () => {
  // Default State
  const [state, setState] = useState({
    query: "",
    interval: 30000,
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800  h-full flex flex-col justify-center items-center">
      <Header />
      <div className="container m-auto px-5 mt-5 h-full flex flex-col justify-center items-center">
        <motion.h1
          initial={{ y: 100, scale: 3, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="font-cursive text-6xl text-indigo-500"
        >
          Driwtch
        </motion.h1>
        <p className="dark:text-gray-300 text-xl text-gray-500 mb-5">
          Sketch as fast as you can...
        </p>
        <div className="grid grid-cols-3 gap-3">
          <input
            className="col-span-2 bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded border border-gray-300 dark:border-gray-600 p-3 focus:border focus:border-indigo-500 focus:outline-none"
            type="text"
            name="query"
            value={state.query}
            onChange={handleInputChange}
            placeholder="I want to draw..."
            autoComplete="off"
          />
          <select
            className="bg-white dark:bg-gray-700 dark:text-white shadow-lg rounded border border-gray-300 dark:border-gray-600 p-3 focus:border focus:border-indigo-500 focus:outline-none"
            name="interval"
            value={state.interval}
            onChange={handleInputChange}
            defaultValue={30000}
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
        </div>

        <Link
          type="submit"
          className=" border border-indigo-600 text-white px-10 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 shadow-xl my-5 transform focus:scale-90 transition ease-in-out duration-300"
          to={`/${state.query}/${state.interval}`}
        >
          Start session
        </Link>

        <Card title="Comment utiliser driwtch ?">
          <p className="text-gray-700 dark:text-gray-100 mb-3">
            Driwtch est un site destiné aux dessinateurs qui veulent dessiner ce
            qu'ils veulent dans un temps chronométré.
          </p>
          <ul className="list-inside list-disc text-gray-500 mb-3">
            <li>
              Enrichissez votre librairie visuelle sur n'importe quel sujet.
            </li>
            <li>Parfait pour s'échauffer avant une journée de dessin.</li>
            <li>Améliorez votre gesture sur le thème qui vous inspire.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-100 mb-3">
            Entrez simplement dans le champ de recherche ce que vous désirez
            dessiner puis choisissez l'intervalle de temps entre chaque image.
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

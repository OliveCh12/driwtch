import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import Switcher from "../components/Switcher";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const Starter = () => {
  let { query, duration }: any = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const [state, setState] = useState("");

  // Data is stored inside Global context
  const [data, setData] = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://driwtch.herokuapp.com/search/?searchquery=${query}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="flex flex-col h-screen dark:bg-gray-800">
        <Header query={query} />
        <div className="flex flex-col justify-center items-center flex-grow">
          <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FontAwesomeIcon
              className="text-purple-500"
              icon={faFan}
              size="5x"
            />
          </motion.div>

          <span className="text-center text-xl font-bold dark:text-white mt-8">
            Un moment s'il te plait, je recherche des images de : <br />
            <strong className="text-purple-600 mt-5">« {query} »</strong>
          </span>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header query={query} />
        <Switcher duration={parseInt(duration)} />
        <Footer />
      </div>
    );
  }
};

export default Starter;

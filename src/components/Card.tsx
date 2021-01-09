import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Card = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0, height: "auto" },
    closed: { opacity: 0, y: 100, height: 0 },
  };

  return (
    <motion.div
      className="bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 dark:bg-gray-800 border border-light-300 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition ease-out duration-300 overflow-hidden shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5">
        <h3 className="text-lg text-indigo-500  font-semibold flex justify-between items-center">
          {props.title}
          <FontAwesomeIcon icon={faBook} />
        </h3>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="z-0"
        >
          <div className="p-5">{props.children}</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;

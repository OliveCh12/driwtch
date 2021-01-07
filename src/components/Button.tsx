import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <motion.button
      className="bg-white  text-purple-500 dark:text-white dark:bg-gray-700 h-12 w-12 rounded-full hover:bg-purple-500 focus:bg-purple-700  border border-gray-300 dark:border-gray-600 text-white"
      style={{ transition: "all .15s ease" }}
      type="button"
      whileTap={{ scale: 1.2 }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;

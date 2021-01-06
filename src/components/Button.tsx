import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <motion.button
      className="h-12 w-12 rounded-full hover:bg-red-500 focus:bg-red-900 bg-gray-700 border border-gray-600 text-white"
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

import React from "react";
import { motion } from "framer-motion";

interface Props {
  current: number;
}

const Progress = (props: Props) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 rounded-full">
      <motion.div
        animate={{ width: `${props.current}%` }}
        transition={{ type: "tween" }}
        className="transition duration-500 ease-in-out bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-1 rounded-full"
      ></motion.div>
    </div>
  );
};

export default Progress;

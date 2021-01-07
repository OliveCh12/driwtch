import React, { useState, useContext } from "react";

import { GlobalContext } from "../GlobalContext";

import Countdown from "react-countdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";

import Progress from "./Progress";
import Button from "./Button";

interface Props {
  total: any;
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
  api: any;
}

interface SwitcherType {
  duration: number | 3000;
}

const Switcher = (props: SwitcherType) => {
  const [state] = useContext(GlobalContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Switch to next image
  function handleNext() {
    if (currentIndex === state.length) {
      alert("You reach the end");
    } else setCurrentIndex(currentIndex + 1);
  }

  // Switch to previous image
  function handlePrevious() {
    if (currentIndex === 0) {
      alert("Stop");
    } else setCurrentIndex(currentIndex - 1);
  }

  const renderer = ({ total, minutes, seconds, completed, api }: Props) => {
    if (completed) {
      handleNext();
      api.start();
      return "Next";
    } else {
      return (
        <span className="text-lg text-white font-bold bg-gray-900 px-9 py-2 rounded-full">
          <FontAwesomeIcon icon={faStopwatch} />
          {minutes === 0 ? "" : minutes + " min"}{" "}
          {seconds === 0 ? "" : seconds + " s"}
        </span>
      );
    }
  };

  const progress = ({ total, completed, api }: Props) => {
    if (completed) {
      api.start();
      return "Next";
    }
    return <Progress current={(total * 100) / props.duration} />;
  };

  return (
    <div className=" flex-grow h-36 relative bg-gradient-to-t from-gray-900 to-gray-800">
      <AnimatePresence>
        <motion.img
          className="w-full h-full object-contain"
          key={state[currentIndex]}
          src={state[currentIndex]}
          alt="Sketch image"
          initial={{ opacity: 0, x: 300, overflow: "hidden" }}
          animate={{ opacity: 1, x: 0, overflow: "hidden" }}
          exit={{ opacity: 0, x: -300, overflow: "hidden" }}
          transition={{ type: "tween" }}
        />
      </AnimatePresence>

      <div className=" w-full flex justify-center mt-5 absolute bottom-5">
        <div className="container mx-auto px-4">
          <div className="bg-white bg-opacity-90 h-36 max-w-lg mx-auto border border-gray-200 rounded-xl w-xl dark:bg-gray-800 dark:border-gray-600 shadow-xl">
            <div className="bg-dark-darkest border-b border-gray-600 rounded-t-xl h-8 flex justify-center items-center">
              <span className="mb-1 dark:text-white text-xs">
                <strong className="text-purple-500">{currentIndex}</strong> /{" "}
                {state.length}
              </span>
            </div>
            <div className="flex justify-between  items-center p-5 ">
              <Button onClick={handlePrevious}>
                <FontAwesomeIcon icon={faArrowCircleLeft} />
              </Button>
              <div className="flex flex-col items-center">
                <Countdown
                  date={Date.now() + props.duration}
                  renderer={renderer}
                  autoStart={true}
                />
              </div>
              <Button onClick={handleNext}>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </Button>
            </div>
            <Countdown
              date={Date.now() + props.duration}
              renderer={progress}
              autoStart={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switcher;

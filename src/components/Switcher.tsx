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
        <span className="text-lg text-white font-bold bg-indigo-500 px-9 py-2 rounded-full">
          <FontAwesomeIcon icon={faStopwatch} className="mr-1" />
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
    <div className=" flex-grow h-3 dark:bg-gradient-to-t from-gray-900 to-gray-800">
      <AnimatePresence>
        <motion.img
          className="w-full h-4/5	object-contain dark:bg-gray-800 overflow-hidden"
          key={state[currentIndex]}
          src={state[currentIndex]}
          alt="Sketch image"
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(50px)" }}
          transition={{ type: "tween" }}
        />
      </AnimatePresence>

      <div className="h-1/5 py-3">
        <div className="bg-white bg-opacity-90 h-full max-w-lg mx-auto border border-gray-200 rounded-xl w-xl dark:bg-gray-800 dark:border-gray-600 shadow-xl box-border flex flex-col">
          <div className="bg-white dark:bg-dark-darkest border-b border-gray-200 dark:border-gray-600 rounded-t-xl h-8 flex justify-center items-center">
            <span className="mb-1 dark:text-white text-xs">
              <strong className="text-indigo-500">{currentIndex}</strong> /{" "}
              {state.length}
            </span>
          </div>
          <Countdown
            date={Date.now() + props.duration}
            renderer={progress}
            autoStart={true}
          />
          <div className="flex justify-between h-auto items-center p-5 flex-grow  box-content rounded-xl">
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
        </div>
      </div>
    </div>
  );
};

export default Switcher;

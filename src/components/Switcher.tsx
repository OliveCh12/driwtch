import React, { useState, useContext } from "react";

import { GlobalContext } from "../GlobalContext";

import Countdown from "react-countdown";

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
        <span className="text-2xl text-white font-bold bg-red-500 px-9 py-2 rounded-full">
          {minutes === 0 ? "" : minutes + " min"}{" "}
          {seconds === 0 ? "" : seconds + " s"}
        </span>
      );
    }
  };

  const progress = ({ total, completed, api }: Props) => {
    if (completed) {
      api.start();
    } else {
      return <Progress current={(total * 100) / props.duration} />;
    }
  };

  return (
    <div className="bg-indigo-400 h-full relative">
      <div className="flex justify-center">
        <img
          className="rounded-xl max-w-lg h-60 object-cover"
          // height="auto"
          src={state[currentIndex]}
          alt="Sketch image"
        />
      </div>

      <div className="bg-gray-500 w-full flex justify-center">
        <div className="bg-white h-32 border border-gray-200 rounded-xl max-w-xl">
          <div className="flex justify-between  items-center p-5 ">
            <Button onClick={handlePrevious}>Previous</Button>
            <div className="flex flex-col items-center">
              <span className="mb-1 ">
                <strong>{currentIndex}</strong> / {state.length}
              </span>
              <Countdown
                date={Date.now() + props.duration}
                renderer={renderer}
                autoStart={true}
              />
            </div>
            <Button onClick={handleNext}>Next</Button>
          </div>
          <Countdown
            date={Date.now() + props.duration}
            renderer={progress}
            autoStart={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Switcher;

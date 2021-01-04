import React, { useState } from "react";

interface Props {
  current: number;
}

const Progress = (props: Props) => {
  return (
    <div className="bg-gray-200 rounded-full">
      <div
        style={{ width: `${props.current}%` }}
        className="bg-red-500 h-1 rounded-full transition duration-500 ease-in-out"
      ></div>
    </div>
  );
};

export default Progress;

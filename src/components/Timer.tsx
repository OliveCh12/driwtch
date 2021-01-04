import React from "react";

interface Props {}

const Timer = (props: Props) => {
  return (
    <div>
      <label htmlFor="time">Interval de :</label>
      <select name="time" id="timer">
        <option value={30000}>30 seconds</option>
        <option value={60000}>1 minute</option>
        <option value={90000}>1 minute 30</option>
        <option value={120000}>2 minutes</option>
        <option value={160000}>2 minutes 30</option>
        <option value={180000}>3 minutes</option>
        <option value={300000}>5 minutes</option>
      </select>
    </div>
  );
};

export default Timer;

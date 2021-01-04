import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      className="bg-black text-white rounded active:bg-teal-600 text-bold px-8 py-3  hover:bg-primary-400 outline-none focus:outline-none mr-1 mb-1"
      style={{ transition: "all .15s ease" }}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

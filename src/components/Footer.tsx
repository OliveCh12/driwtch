import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="dark:bg-gray-900 flex-none flex justify-center items-center text-center h-16 z-10 w-full">
      <p className="text-sm dark:text-white">
        &copy; Copyright{" "}
        <strong className="text-purple-500">{new Date().getFullYear()}</strong>,
        Developped by Olivier Chemla
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 flex-none flex justify-center items-center text-center h-16 z-10">
      <p className="text-sm dark:text-white">
        &copy; Copyright {new Date().getFullYear()}, Developped by Olivier
        Chemla
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center items-center text-center h-20 w-ful bg-gray-100">
      <p>
        &copy; Copyright {new Date().getFullYear()}, Developped by Olivier
        Chemla
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import packageJson from "../../package.json";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="dark:bg-gray-900 flex-none flex justify-center items-center text-center h-16 z-10 w-full">
      <p className="text-sm dark:text-white">
        Version :{" "}
        <strong className="text-indigo-500 mr-1">{packageJson.version}</strong>
        &copy; Copyright{" "}
        <strong className="text-indigo-500">{new Date().getFullYear()}</strong>,
        Developped by{" "}
        <strong>
          <a
            className="text-indigo-500"
            href="https://olivierchemla.work"
            target="_blank"
          >
            Olivier Chemla
          </a>
        </strong>
      </p>
    </footer>
  );
};

export default Footer;

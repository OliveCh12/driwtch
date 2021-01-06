import React from "react";
import { Link } from "react-router-dom";

interface Props {
  query: string;
}

const Header = (props: Props) => {
  return (
    <header className="flex-none h-16 border-b dark:bg-gray-800 dark:border-gray-800">
      <div className="container m-auto px-5 h-full">
        <nav className="flex items-center justify-between px-2 py-3 navbar-expand-lg h-full">
          <div>
            <Link to="/" className="text-xl font-cursive text-red-500 ">
              Driwtch
            </Link>
          </div>

          <div>
            <strong className="capitalize dark:text-white">
              {props.query}
            </strong>
          </div>

          <div className="flex justify-between dark:text-white">
            <Link to="/">GitHub</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

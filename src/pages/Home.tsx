import React from "react";
import Search from "../components/Search";
import Timer from "../components/Timer";
interface Props {}

const Home = (props: Props) => {
  return (
    <div className="bg-white dark:bg-dark">
      <div className="bg-gray-100 border-b border-gray-200 h-60 flex flex-col justify-center items-center">
        <div className="container m-auto px-5 text-center">
          <h1 className="font-cursive text-6xl text-primary-500">Driwtch</h1>
          <p className="dark:text-gray-300 mt-2 text-lg text-gray-500">
            Sketch as fast as you can...
          </p>
        </div>
      </div>

      <div className="container m-auto px-5 mt-5">
        {/* <div className="bg-white border border-gray-300 rounded p-5">
          <p className="font-bold text-lg">
            Recherchez quelque chose que vous voudriez dessiner.
          </p>
          <ul>
            <li>Paon</li>
            <li>Golden Bridge</li>
          </ul>
        </div> */}

        <Search />
        <Timer />
      </div>
    </div>
  );
};

export default Home;

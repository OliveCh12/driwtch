import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import Switcher from "../components/Switcher";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {}

const Starter = (props: Props) => {
  let { query, duration }: any = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [state, setState] = useState("");

  // Data is stored inside Global context
  const [data, setData] = useContext(GlobalContext);

  function fetchData() {
    setIsLoading(true);
    fetch(`https://driwtch.herokuapp.com/search/?searchquery=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(true);
        setError("fetch failed");
      });
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div className="">
      <Header query={query} />
      <Switcher duration={parseInt(duration)} />
      <Footer />
    </div>
  );
};

export default Starter;

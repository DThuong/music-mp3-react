import React, { useEffect } from "react";
import Header from "../../components/Header";
import * as apis from "../../apis";
const Home = () => {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      console.log(response);
    }
    fetchDataHome()
  })
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;

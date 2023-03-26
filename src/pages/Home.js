import React from "react";
import Card from "../component/Card";
import Form from "../component/Form";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const rotaryMethods = ["USBM 1969", "NORWAY 1979", "BENAOLA 1985"];
  const rotarypercussiveMethods = [
    "Bauer and Calder, 1967",
    "Baurer, 1971",
    "Calder and Workman, 1994",
  ];
  const r1 = ["usbm", "norway", "benaola"];
  const r2 = ["bauerandcalder", "baurer", "calderandworkman"];

  return (
    <>
      <div style={{ height: "100vh" }} className=" py-6 ">
        <Navbar />
        <div className=" flex "></div>
        <div
          className=" py-16 mx-auto flex items-center justify-between
           "
        >
          <div className="container mx-auto flex lg:flex-row sm:flex-col    items-center items-between h-100 ">
            <div className="lg:w-1/2 my-6 ">
              <h6 className="text-lg">
                <em>Welcome</em>
              </h6>
              <h1 className="text-3xl md:text-6xl font-bold">
                Penetration Rate Calculator
              </h1>

              <button
                className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600"
                onClick={() => window.location.replace("/#card")}
              >
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2">
              <img className="sm:pt-14" src="/images/landing.jpg" alt="pizza" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center " id="card">
        <Card
          name="Rotary Percussive"
          methods={rotaryMethods}
          routes={r1}
          image="rotaryPercussive.png"
        />
        <Card
          name="Rotary "
          methods={rotarypercussiveMethods}
          routes={r2}
          image="rotary.png"
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;

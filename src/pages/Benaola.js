import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Benaola = () => {
  const [eg, setEg] = useState(0.0);
  const [ng, setNg] = useState(0.0);
  const [lf, setLf] = useState(-0.7);
  const [d, setD] = useState(0.0);
  const [ip, setIp] = useState(0.0);

  const [answer, setAnswer] = useState(-1.0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "energy") {
      setEg(value);
    } else if (name === "blowFrequency") {
      setNg(value);
    } else if (name === "dia") {
      setD(value);
      setLf(1.7 * value - 0.7);
    } else if (name === "drillabilityIndex") {
      setIp(value);
    }
  };

  const handleBit = () => {
    const bitType = document.getElementById("selectBit").value;
    console.log(bitType);
  };

  const Calculate = (e) => {
    e.preventDefault();
    const bit = document.getElementById("selectBit").value;

    // if (bit === "insert") {
    //   newLf = 1.7 * d - 0.7;
    // }

    //console.log("lf after if statemment", newLf);
    // alert(`The Force is -:${f}, The UCS is-:${ucs}, the k-Factor is-:${k}`)
    let ans = ((eg * ng) / (d * Math.pow(lf, 0.5))) * (51 * ip + 90);
    if (bit === "button") {
      ans = ans * 1.15;
    } else if (bit === "bevel") {
      ans = ans * 0.85;
    }
    console.log(lf);
    setAnswer(ans);
  };
  return (
    <div>
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>Bernaola</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Energy Per blow (pound* foot)
              </label>
              <br />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="(in lb/inch)"
                name="energy"
                onChange={handleChange}
                value={eg}
              />
              <br />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                No. of Blows per minute
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder=""
                name="blowFrequency"
                onChange={handleChange}
                value={ng}
              />
              <br />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Diameter of drill Bit (cm)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id=""
                type="number"
                placeholder=""
                name="dia"
                onChange={handleChange}
                value={d}
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Drillability Index
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id=""
                type="number"
                placeholder=""
                name="drillabilityIndex"
                onChange={handleChange}
                value={ip}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Choose Bit Type
              </label>
              <select
                id="selectBit"
                className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500                "
                onChange={handleBit}
              >
                <option value="choseSj">Choose Bit Type</option>
                <option value="insert">Insert Bits</option>
                <option value="button">Button Bits</option>
                <option value="bevel">Bevel Bits</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={Calculate}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </div>
      {answer === -1.0 ? (
        <></>
      ) : (
        <>
          <h4 className="text-center">The answer is-:{answer} x 10^6 cm/min</h4>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Benaola;

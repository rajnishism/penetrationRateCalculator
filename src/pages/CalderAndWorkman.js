import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const CalderAndWorkman = () => {
  const [rf, setRF] = useState(0.0);
  const [ucs, setucs] = useState(0.0);
  const [e, setE] = useState(0.0);
  const [d, setD] = useState(0.0);
  const [nr, setNr] = useState(0.0);
  const [answer, setAnswer] = useState(-1.0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ucs") {
      setucs(value);
      setRF(6867.69 - 6458.04 * Math.pow(value, 0.0100567));
      console.log(rf);
    } else if (name === "factor") {
      console.log(rf);
      setE(value);
    } else if (name === "nr") {
      setNr(value);
    } else if (name === "d") {
      setD(value);
    }
  };
  const Calculate = (event) => {
    event.preventDefault();
    console.log(rf);
    let ans = 5.7 * ((e / d) * nr) * (rf - 28 * Math.log10(0.145 * ucs));
    setAnswer(ans);
  };
  return (
    <div>
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>Calder and workman</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4"></div>
            <div className="mb-6">
              <br />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Feed Force Exerted on the bit (kg)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="k-Factor"
                name="factor"
                onChange={handleChange}
                value={e}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Rotation Speed (rpm)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="k-Factor"
                name="nr"
                onChange={handleChange}
                value={nr}
              />

              <br />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Diameter (mm)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="k-Factor"
                name="d"
                onChange={handleChange}
                value={d}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                UCS (MPa)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="(in lb/inch^2)"
                name="ucs"
                onChange={handleChange}
                value={ucs}
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Rf
              </label>
              <div>{rf}</div>
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
          <h4 className="text-center">The answer is-:{answer}</h4>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CalderAndWorkman;

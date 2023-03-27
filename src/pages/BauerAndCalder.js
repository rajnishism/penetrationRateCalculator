import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const BauerAndCalder = () => {
  const [e, setE] = useState(0.0);
  const [ucs, setucs] = useState(0.0);
  const [d, setD] = useState(0.0);
  const [k, setK] = useState(0.0);
  const [answer, setAnswer] = useState(-1.0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "force") {
      setE(value);
    } else if (name === "ucs") {
      setucs(value);
    } else if (name === "factor") {
      setK(value);
    } else if (name === "dia") {
      setD(value);
    }
  };
  const Calculate = (event) => {
    event.preventDefault();
    console.log(e * ucs * k * d);
    let ans = Math.pow((12 * e) / d / ucs, k) * 6;
    setAnswer(ans);
  };
  return (
    <div className="p-top-6">
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>Bauer And Calder</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Pull down Force (lb)
              </label>
              <br />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="(in lb/inch)"
                name="force"
                onChange={handleChange}
                value={e}
              />
              <br />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                UCS (lb/inch ^2)
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
              <br />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                K-Factor
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="k-Factor"
                name="factor"
                onChange={handleChange}
                value={k}
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Diameter (inch)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="Diameter"
                name="dia"
                onChange={handleChange}
                value={d}
              />
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
          <h4 className="text-center">
            The Expected penetration rate is-:{answer} feet/hr
          </h4>
        </>
      )}
      <Footer />
    </div>
  );
};

export default BauerAndCalder;

import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Baurer = () => {
  const [e, setE] = useState(0.0);
  const [ucs, setucs] = useState(0.0);
  const [k, setK] = useState(0.0);
  const [d, setD] = useState(0.0);
  const [nr, setNr] = useState(0.0);

  const [answer, setAnswer] = useState(-1.0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "force") {
      setE(value);
    } else if (name === "ucs") {
      setucs(value);
    } else if (name === "dia") {
      setD(value);
    } else if (name === "nr") {
      setNr(value);
    }
  };
  const Calculate = (event) => {
    event.preventDefault();

    // alert(`The Force is -:${f}, The UCS is-:${ucs}, the k-Factor is-:${k}`)
    let ans = ((61 - 28 * Math.log10(ucs)) * (e * nr)) / (d * 300);
    setAnswer(ans);
  };
  return (
    <div>
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>Baurer</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Pull down Force (thousand of lbs)
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
                UCS (thousand of lbs/inch^2)
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
                Diameter (inch)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="k-Factor"
                name="dia"
                onChange={handleChange}
                value={d}
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

export default Baurer;

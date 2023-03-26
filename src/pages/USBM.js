import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const USBM = () => {
  const [pm, setPm] = useState(0.0);
  const [d, setD] = useState(0.0);
  const [re, setRe] = useState(0.0);
  const [se, setSe] = useState(0.0);
  const [crs, setCrs] = useState(0.0);
  const [ucs, setUcs] = useState(0.0);
  const [lgcrs, setLgcrs] = useState(0.0);
  const [answer, setAnswer] = useState(-1.0);

  // const ucsTosj = () => {
  //   const lgcrs = Math.log10(ucs) * 0.9459 - 2.12707;
  //   console.log(Math.pow(10, lgcrs));
  //   const sj = 6.430932816901801 * lgcrs + 3.961544830592331;
  //   //console.log(sj);
  //   return sj;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "power") {
      setPm(value);
    } else if (name === "ucs") {
      setUcs(value);
      const t1 = Math.log10(value) * 0.9459 - 2.12707;
      setLgcrs(t1);
      setCrs(Math.pow(10, t1));
      const t2 = 6.430932816901801 * t1 + 3.961544830592331;
      setSe(t2);
      const t3 = (15.278 * pm * re) / (d * d * t2);
      setAnswer(t3 / 8.4);
    } else if (name === "energy") {
      setRe(value);
    } else if (name === "dia") {
      setD(value);
    }
  };

  const Calculate = (e) => {
    e.preventDefault();

    //console.log(pm, ucs, k);
    // alert(`The Force is -:${f}, The UCS is-:${ucs}, the k-Factor is-:${k}`)

    let ans = (15.278 * pm * re) / (d * d * se * 8.4);
    // console.log(se);

    setAnswer(ans);
  };
  return (
    <div>
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>USBM</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Drill Power (kg m/min)
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="(in lb/inch)"
                name="power"
                onChange={handleChange}
                value={pm}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Energy Transmission
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="(in lb/inch)"
                name="energy"
                onChange={handleChange}
                value={re}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Diameter (cm)
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="number"
                placeholder="(in lb/inch^2)"
                name="dia"
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
                placeholder="k-Factor"
                name="ucs"
                onChange={handleChange}
                value={ucs}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                CRS
              </label>
              <div>{crs}</div>

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Sj value
              </label>
              <div>{se}</div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Answer
              </label>
              <div>{answer}</div>
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
            The Rate of Penetration is {answer} cm/min
          </h4>
        </>
      )}
      <Footer />
    </div>
  );
};

export default USBM;

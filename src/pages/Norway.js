import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Norway = () => {
  const [s20, setS20] = useState(0.0);
  const [sj, setSj] = useState(0.0);
  const [dri, setDri] = useState(0.0);
  const [answer, setAnswer] = useState(-1.0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "s20") {
      setS20(value);
    } else if (name === "sj") {
      getOption();
      // getDrillingMethod();
    }
  };
  useEffect(() => {
    getOption();
    getDrillingMethod();
  }, [s20]);

  const Calculate = (e) => {
    e.preventDefault();
    console.log(s20);
    const val1 = document.getElementById("sjvalue");
    const option1 = val1.value;
    let t = dri;
    if (option1 === "0.5") {
      console.log(s20);
      t = 1.0172453379174038 * s20 - 18.798789027076808;
      setDri(t);
    } else if (option1 === "0.7") {
      console.log("0.7 is not selectd");
      t = 1.0138046650118255 * s20 - 14.172751132605839;
      setDri(t);
    } else if (option1 === "1.0") {
      console.log("1.0 is not selectd");
      t = 1.0162607429800379 * s20 - 10.151103237143943;
      setDri(t);
    } else if (option1 === "2.0") {
      console.log("2.0 is not selectd");
      t = 1.00421669466685 * s20 - 6.101940576234057;
      setDri(t);
    } else if (option1 === "5.0") {
      t = 1.0157595712952003 * s20 - 1.9477857982572147;
      setDri(t);
    } else if (option1 === "10") {
      t = 0.9974857526611582 * s20 + 2.1484419778432624;
      setDri(t);
    } else if (option1 === "20") {
      t = 1.0097334697503069 * s20 + 5.660366678907366;
      setDri(t);
    } else if (option1 === "50") {
      t = 1.0057968821975032 * s20 + 10.321435045309826;
      setDri(t);
    } else if (option1 === "100") {
      t = 1.0098175947664323 * s20 + 14.012647759215369;
      setDri(t);
    } else if (option1 === "130") {
      t = 1.0035098605415345 * s20 + 20.047426282375653;
      setDri(t);
    } else if (option1 === "150") {
      t = 1.004835206045606 * s20 + 24.135518834950176;
      setDri(t);
    } else if (option1 === "200") {
      t = 1.0122070721870426 * s20 + 30.67935873895283;
      setDri(t);
    } else if (option1 === "230") {
      t = 1.0106528510235082 * s20 + 35.027329929227676;
      setDri(t);
    }
    console.log(t);

    const val2 = document.getElementById("drillingMethod");
    const option2 = val2.value;
    let t2 = answer;
    if (option2 === "hydraulicTopHammer") {
      console.log("hydraulicTopHammer");
      t2 = 1.825 * t + 18.5;
      setAnswer(t2);
    } else if (option2 === "pneumaticTopHammer") {
      console.log("pneumaticTopHammer");
      t2 = 1.32 * t + 7.1;
      setAnswer(t2);
    } else if (option2 === "highPressureDTH") {
      console.log("highPressureDTH");
      t2 = 1.105 * t + 3.4;
      setAnswer(t2);
    } else if (option2 === "rotray") {
      console.log("rotray");
      t2 = 0.614 * t + 0.645;
      setAnswer(t2);
    } else if (option2 === "conventionDTH") {
      console.log("conventionDTH");
      t2 = 0.515 * t - 1.8;
      setAnswer(t2);
    }
    console.log(t2);
  };
  const getOption = () => {
    const val = document.getElementById("sjvalue");
    const option1 = val.value;
    //console.log("option ", option1, "is selected");
    if (option1 === "0.5") {
      console.log(s20);
      const t = 1.0172453379174038 * s20 - 18.798789027076808;
      setDri(t);
      console.log(dri);
    } else if (option1 === "0.7") {
      console.log("0.7 is not selectd");
      const t = 1.0138046650118255 * s20 - 14.172751132605839;
      setDri(t);
    } else if (option1 === "1.0") {
      console.log("1.0 is not selectd");
      const t = 1.0162607429800379 * s20 - 10.151103237143943;
      setDri(t);
    } else if (option1 === "2.0") {
      console.log("2.0 is not selectd");
      const t = 1.00421669466685 * s20 - 6.101940576234057;
      setDri(t);
    } else if (option1 === "5.0") {
      const t = 1.0157595712952003 * s20 - 1.9477857982572147;
      setDri(t);
    } else if (option1 === "10") {
      const t = 0.9974857526611582 * s20 + 2.1484419778432624;
      setDri(t);
    } else if (option1 === "20") {
      const t = 1.0097334697503069 * s20 + 5.660366678907366;
      setDri(t);
    } else if (option1 === "50") {
      const t = 1.0057968821975032 * s20 + 10.321435045309826;
      setDri(t);
    } else if (option1 === "100") {
      const t = 1.0098175947664323 * s20 + 14.012647759215369;
      setDri(t);
    } else if (option1 === "130") {
      const t = 1.0035098605415345 * s20 + 20.047426282375653;
      setDri(t);
    } else if (option1 === "150") {
      const t = 1.004835206045606 * s20 + 24.135518834950176;
      setDri(t);
    } else if (option1 === "200") {
      const t = 1.0122070721870426 * s20 + 30.67935873895283;
      setDri(t);
    } else if (option1 === "230") {
      const t = 1.0106528510235082 * s20 + 35.027329929227676;
      setDri(t);
    }
  };
  const getDrillingMethod = () => {
    console.log(dri);
    const val = document.getElementById("drillingMethod");
    const option = val.value;
    if (option === "hydraulicTopHammer") {
      console.log("hydraulicTopHammer is selected");
      setAnswer(1.825 * dri + 18.5);
    } else if (option === "pneumaticTopHammer") {
      console.log("pneumaticTopHammer is selected");
      setAnswer(1.32 * dri + 7.1);
    } else if (option === "highPressureDTH") {
      console.log("highPressureDTH is selected");
      setAnswer(1.105 * dri + 3.4);
    } else if (option === "rotray") {
      console.log("rotray is selected");
      setAnswer(0.614 * dri + 0.645);
    } else if (option === "conventionDTH") {
      console.log("conventionDTH is selected");
      setAnswer(0.515 * dri - 1.8);
    }
  };

  // const Calculate = (e) => {
  //   e.preventDefault();
  //   console.log(s20);
  //   getOption();
  //   console.log(dri); // error in here dri here is something different than showing
  //   getDrillingMethod();
  //   console.log(answer);

  //   // alert(`The Force is -:${f}, The UCS is-:${ucs}, the k-Factor is-:${k}`)

  //   setAnswer(answer);
  // };

  return (
    <div>
      <Navbar />
      <div className="flex p-10 justify-center">
        <div className="w-full max-w-xs">
          <h1 className="text-center p-10">
            <b>Norway</b>{" "}
          </h1>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Brittleness S20 (%)
              </label>
              <br />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="number"
                placeholder="(in lb/inch)"
                name="s20"
                onChange={handleChange}
                value={s20}
              />

              <br />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Select Sj Value
              </label>

              <select
                id="sjvalue"
                className="
                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500                "
                onChange={getOption}
              >
                <option value="choseSj">Choose Sj value</option>
                <option value="0.5">0.5</option>
                <option value="0.7">0.7</option>
                <option value="1.0">1.0</option>
                <option value="2.0">2.0</option>
                <option value="5.0">5.0</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="130">130</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="230">230</option>
              </select>
            </div>
            <br />
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Select Drilling Method
              </label>

              <select
                id="drillingMethod"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={getDrillingMethod}
              >
                <option value="choseMethod">Choose Method</option>

                <option value="hydraulicTopHammer">Hydarulic Top Hammer</option>

                <option value="pneumaticTopHammer">Pneumatic Top Hammer</option>
                <option value="highPressureDTH">
                  High Pressure Down the Hole Hammer
                </option>
                <option value="rotray">Rotray</option>
                <option value="conventionDTH">
                  Conventional Down the Hole Hammer
                </option>
              </select>
            </div>
            <br />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Drilling Rate Index
              </label>
              <div>{dri}</div>
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
            The Rate of Penetration is-:{answer} cm/min
          </h4>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Norway;

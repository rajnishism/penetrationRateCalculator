import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, methods, routes, image } = props;
  console.log(image);
  console.log(methods);

  return (
    <div className="mx-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-10">
        <img className="w-full" src={`/images/${image}`} alt=" " style={{}} />
        <div className="px-6 ">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
          <p className="text-gray-700 text-base">
            Choose the method to be used for calculation
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a href={routes[0]}>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {methods[0]}
            </span>
          </a>

          <a href={routes[1]}>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {methods[1]}
            </span>
          </a>
          <a href={routes[2]}>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {methods[2]}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

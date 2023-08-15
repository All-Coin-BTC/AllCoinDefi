import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage-container font-bold p-6 text-4xl flex flex-col">
      <div className="headline-text">
        REDUCING THE BARRIER OF ENTRY IN COMMERCE
      </div>
      <div className="subtitle-text text-base text-white mt-4">
        AllCoin is a defi system that provides Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Suscipit nisi itaque voluptatem esse!
        Incidunt voluptates.
      </div>
      <div className="btn-container mt-8 flex items-center text-center justify-center">
        <Link to="/warehousing">
          <button className="text-white rounded-lg bg-green-400 px-10 py-4 text-3xl">
            Enter App
          </button>
        </Link>
      </div>
    </div>
  );
}

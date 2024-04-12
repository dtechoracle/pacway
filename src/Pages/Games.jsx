import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Games = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="relative">
          <img
            src="/img/games1.png"
            className="h-[534px] w-auto"
            alt="Game 1"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="absolute bottom-0 left-0 text-white p-16">
              <h1 className="font-black text-8xl">SORUNNE III</h1>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Game
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/img/games2.png"
            className="h-[534px] w-auto"
            alt="Game 2"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="absolute bottom-0 left-0 text-white p-16">
              <h1 className="font-black text-8xl">LIGHTFALL</h1>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Game
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/img/games3.png"
            className="h-[534px] w-auto"
            alt="Game 3"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="absolute bottom-0 left-0 text-white p-16">
              <h1 className="font-black text-8xl">DAYLIGHT</h1>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Game
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Games;

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import YouTube from "react-youtube";

const View = () => {
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    style: {
      borderRadius: "20px", // Adjusted borderRadius value
    },
  };

  // YouTube video ID
  const videoId = "kgppJX0G--E";

  // Event handlers
  const onReady = (event) => {
    event.target.pauseVideo();
  };
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
        <div className="p-[100px] pl-[200px] pr-[200px]">
          <h1 className="text-4xl">
            We are a team that has worked together for several years but, when
            it comes to our own games, we are really young, with Moonlighter as
            our single original game so far!
          </h1>
        </div>
        <div className="flex p-4">
          <div className="1/3">
            <img src="/img/game-view1.png"></img>
          </div>
          <div className="1/3">
            <img src="/img/game-view2.png"></img>
          </div>
          <div className="1/3">
            <img src="/img/game-view3.png"></img>
          </div>
        </div>
        <div className="w-full p-6 rounded-lg overflow-hidden p-16">
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default View;

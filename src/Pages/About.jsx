import React from "react";
import Navbar from "../Components/Navbar";
import YouTube from "react-youtube";
import Footer from "../Components/Footer";

const About = () => {
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
      <div className="md:flex md:mt-24 md:p-12 p-12 gap-4">
        {/* Empty space */}
        <div className="w-1/3"></div>

        {/* Content */}
        <div className="md:w-1/3">
          <div>
            <p className="font-bold">
              With love from Yaba, To the borders to Nigeria
            </p>
            <h1 className="font-black text-6xl">About Us</h1>
            <p className="leading-10">
              We are a team that has worked together for several years but, when
              it comes to our own games, we are really young, with Moonlighter
              as our single original game so far!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/3">
          <p className="leading-10">
            We like to think we are a studio where it’s possible to enjoy life
            while creating the best games we possibly can. We believe if we
            enjoy making a game, players might enjoy playing it, as simple as
            that.
          </p>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="w-full p-6 rounded-lg overflow-hidden p-16">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>

      {/* Team Images */}
      <div className="text-center mt-8">
        <h1 className="font-black text-4xl">Meet the Team</h1>
        <div className="md:flex justify-center mt-4">
          <div className="md:w-1/4 p-8">
            {" "}
            {/* Added padding to each image container */}
            <img
              src="/img/team1.png"
              alt="Team Member 1"
              className="w-full h-auto"
            />
            <h1 className="font-extrabold">Alex Iwobi</h1>
            <p>CEO</p> {/* Added w-full and h-auto classes */}
          </div>
          <div className="md:w-1/4 p-8">
            <img
              src="/img/team2.png"
              alt="Team Member 2"
              className="w-full h-auto"
            />
            <h1 className="font-extrabold">Alex Iwobi</h1>
            <p>CEO</p>
          </div>
          <div className="md:w-1/4 p-8">
            <img
              src="/img/team3.png"
              alt="Team Member 3"
              className="w-full h-auto"
            />
            <h1 className="font-extrabold">Alex Iwobi</h1>
            <p>CEO</p>
          </div>
          <div className="md:w-1/4 p-8">
            <img
              src="/img/team4.png"
              alt="Team Member 4"
              className="w-full h-auto"
            />
            <h1 className="font-extrabold">Alex Iwobi</h1>
            <p>CEO</p>
          </div>
        </div>
        <div className="bg-blue-800 md:h-[600px] h-[700px] mt-32 relative">
          <div className="flex flex-col justify-center items-center h-full text-center md:p-24">
            <h1 className="font-black md:text-[64px] text-[35px] text-white">
              Want to work for us?
            </h1>
            <p className="mt-4 text-white">
              Want to work on awesome games with us?
            </p>
            <button className="p-2 rounded bg-white text-black font-bold w-[150px] mt-2">
              Join us
            </button>
          </div>
          <img
            src="/img/work.png"
            className="absolute md:left-[800px] left-[70px] md:top-[-100px] top-[400px] h-[500px] md:h-full"
            alt="Work image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Join = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-24 p-10">
        <h1 className="font-black text-6xl mb-4">Join us</h1>
        <p>
          We are a team that has worked together for several years but, when it
          comes to our own games, we are really young, with Moonlighter as our
          single original game so far!
        </p>
        <br />
        <p>
          We are a team that has worked together for several years but, when it
          comes to our own games, we are really young, with Moonlighter as our
          single original game so far!
        </p>

        <div className="md:mt-12 mt-24">
          <h1 className="font-black text-6xl">Roles</h1>
          <div className="md:mt-4 mt-8">
            <div className="flex mb-6">
              <div className="w-1/2">
                <h1 className="font-bold">VFX Artist</h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-blue-700 font-bold items-end">
                  Apply Here
                </h1>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2">
                <h1 className="font-bold">VFX Artist</h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-blue-700 font-bold">Apply Here</h1>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2">
                <h1 className="font-bold">VFX Artist</h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-blue-700 font-bold">Apply Here</h1>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2">
                <h1 className="font-bold">VFX Artist</h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-blue-700 font-bold">Apply Here</h1>
              </div>
            </div>
            <div className="flex mb-6">
              <div className="w-1/2">
                <h1 className="font-bold">VFX Artist</h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-blue-700 font-bold">Apply Here</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Join;

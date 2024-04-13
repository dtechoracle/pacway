import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="md:p-24 p-12">
        <h1 className="font-black text-6xl mb-4">Contact us</h1>
        <p className="md:w-[667px]">
          We are a team that has worked together for several years but, when it
          comes to our own games, we are really young, with Moonlighter as our
          single original game so far!
        </p>

        <div className="mt-8">
          <form class="">
            <input
              type="text"
              placeholder="Name"
              className="md:w-[80%] w-full mb-6 border-b-2 border-gray h-24 text-6xl"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              className="md:w-[80%] w-full mb-6 border-b-2 border-gray h-24 text-6xl"
            />
            <br />
            <input
              type="text"
              placeholder="AIM"
              className="md:w-[80%] w-full mb-6 border-b-2 border-gray h-24 text-6xl"
            />
          </form>
          <button className="mt-8 bg-blue-700 p-6 font-bold text-4xl rounded text-white md:w-[300px] w-full">
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

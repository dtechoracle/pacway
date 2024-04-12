import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <img
            src="/img/hero-image.png"
            alt="Your Image"
            className="w-full h-[100vh]"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 text-white text-center">
              <h1 className="md:text-[75px] text-[30px] md:pl-24 md:pr-24 pb-4 font-bold">
                We make your dreams come true with the power of play
              </h1>
              <button className="mt-4 text-white border-2 border-[#C6FF22] font-black rounded p-4 hover:bg-white hover:text-black hover:border-0">
                View our Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center md:p-24">
          <h1 className="font-extrabold text-[48px]">About Us</h1>
          <p className="text-center md:pl-28 pl-14 md:pr-28 pr-14 text-[16px] leading-10">
            We are a team of artists, programmers, designers and producers that
            has been working together since 2013. We got our start building
            games for others while dreaming of creating our own. <br /> That’s
            how we created Moonlighter, our first original game. It was a side
            project with a lot of love but very little resources. Imagine our
            joy when the game saw such unexpected success. Now, everyone on the
            team agrees that it feels great to be able to work on our own ideas!
          </p>
        </div>
        <div>
          <h1 className="font-extrabold text-[48px] text-center pb-8 md:mt-0 mt-6">
            Our Games
          </h1>
          <div className="flex md:pl-20 md:pr-16 overflow-x-scroll scrollbar">
            <img
              src="img/game1.png"
              alt="Image 1"
              className="flex-1 md:max-w-[33%] h-auto"
            />
            <img
              src="img/game2.png"
              alt="Image 2"
              className="flex-1 md:max-w-[33%] h-auto"
            />
            <img
              src="img/game3.png"
              alt="Image 3"
              className="flex-1 md:max-w-[33%] h-auto"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-[150px]">
            <div className="flex flex-col md:flex-row h-[100px]">
              <div className="flex-1 md:border-r border-black text-center pl-8 pr-8">
                <div className="font-extrabold md:text-[48px] text-[60px]">
                  70
                </div>
                <p className="text-[#2E54F1] font-semibold">Coworkers</p>
              </div>
              <div className="flex-1 md:border-r border-black text-center pl-8 pr-8">
                <div className="font-extrabold md:text-[48px] text-[60px]md:text-[48px] text-[60px]">
                  2
                </div>
                <p className="text-[#2E54F1] font-semibold">Offices</p>
              </div>
              <div className="flex-1 md:border-r border-black text-center pl-8 pr-8">
                <div className="font-extrabold md:text-[48px] text-[60px]">
                  12
                </div>
                <p className="text-[#2E54F1] font-semibold">Nationalities</p>
              </div>
              <div className="flex-1 text-center pl-8 pr-8 ">
                <div className="font-extrabold md:text-[48px] text-[60px]">
                  3
                </div>
                <p className="text-[#2E54F1] font-semibold">Games</p>
              </div>
            </div>
          </div>
          <div className="new bg-[#C6FF22] md:h-[600px] h-[800px] md:mt-[150px] text-center md:text-left mt-[450px] flex flex-col">
            <div className="md:w-1/2 flex flex-col justify-center md:p-12 p-6">
              <div className="md:mt-[100px] md:ml-[50px]">
                <h1 className="font-extrabold text-[48px] text-center md:text-left">
                  What's New
                </h1>
                <p className="text-center md:text-left font-semibold leading-10">
                  We are a team of artists, programmers, designers and producers
                  that has been working together since 2013. We got our start
                  building games for others while dreaming of creating our own.
                </p>
                <button className="bg-[#000000] p-4 text-white rounded-lg shadow font-bold mt-6 mx-auto md:mx-0">
                  News Archive
                </button>
              </div>
            </div>
            <div className="w-full relative">
              <img
                src="/img/whats-new.png"
                className="md:w-[600px] w-[300px] h-[450px] md:h-[900px] absolute md:bottom-[-250px] bottom-[-450px] md:left-82 right-0 mx-auto"
              />
            </div>
          </div>
          <div className="bg-blue-800 md:h-[600px] h-[800px] md:flex md:text-right">
            <div className="md:w-1/2">
              <img
                src="/img/job-image.png"
                className="absolute md:bottom-[-2700px] bottom-[-3650px] left-0 right-0 md:w-[650px]"
              />
            </div>
            <div className="md:w-1/2 p-6 pt-12 md:mt-[150px] md:pr-24 text-center md:text-justify">
              <h1 className="font-bold text-[48px] text-white">Want a Job?</h1>
              <p className="font-semibold text-white leading-10">
                We are a team of artists, programmers, designers and producers
                that has been working together since 2013. We got our start
                building games for others while dreaming of creating our own.
              </p>
              <button className="bg-white text-black p-4 font-bold mt-6 rounded">
                See Careers
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

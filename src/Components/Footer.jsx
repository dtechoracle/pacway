import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 p-6 md:p-24 bg-black text-white">
        <div className="md:w-1/5">
          <img src="/img/logo-transparent.png" />
        </div>
        <div className="md:w-1/5 md:leading-10 leading-10 text-gray-300">
          <ul>
            <li className="font-bold text-2xl text-white">NLP</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10 leading-10 text-gray-300">
          <ul>
            <li className="font-bold text-white text-2xl">For developers</li>
            <li>Developers</li>
            <li>Game Manager</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10 leading-10 text-gray-300">
          <ul>
            <li className="font-bold text-white text-2xl">Developers</li>
            <li>Another One</li>
            <li>APIs</li>
            <li>Join the Team</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10 leading-10 text-gray-300">
          <ul>
            <li className="font-bold text-white text-2xl">Location</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

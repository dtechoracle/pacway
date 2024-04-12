import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-24 p-6 md:p-24 bg-black text-white">
        <div className="md:w-1/5">
          <div>NoLand PacWay</div>
        </div>
        <div className="md:w-1/5 md:leading-10">
          <ul>
            <li className="font-bold">NLP</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10">
          <ul>
            <li className="font-bold">For developers</li>
            <li>Developers</li>
            <li>Game Manager</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10">
          <ul>
            <li className="font-bold">Developers</li>
            <li>Another One</li>
            <li>APIs</li>
            <li>Join the Team</li>
          </ul>
        </div>
        <div className="md:w-1/5 md:leading-10">
          <ul>
            <li className="font-bold">Location</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------left section------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corporis explicabo nemo, quos quam, repellendus necessitatibus natus
            minima sapiente odio asperiores libero? Numquam voluptatem repellat
            corporis repudiandae eos quasi magni?
          </p>
        </div>

        {/* ---------center section------- */}
        <div>
            <p className="text-xl mb-5 font-medium">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* ---------right section------- */}
        <div>
            <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600" >
                <li>+91-8826186730</li>
                <li>kakraniachirag@gmail.com</li>
            </ul>
        </div>
      </div>

    </div>
  );
};

export default Footer;

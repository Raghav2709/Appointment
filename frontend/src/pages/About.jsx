import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illo
            officia quas vel enim quidem, neque facilis magni numquam. Eius
            commodi in ullam accusantium illo vel adipisci ipsum hic ipsa! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis
            dolor fuga dignissimos ipsum maxime corrupti qui esse dicta
            temporibus, illum nobis nihil aspernatur exercitationem doloremque
            architecto aut eligendi nesciunt?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi alias
            molestiae ipsa nam eius eligendi asperiores architecto fugit numquam
            ipsum qui, iure voluptatem vero exercitationem dolor inventore,
            maxime perferendis tempora.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            quisquam nostrum voluptates? Aut, laudantium! Iusto error porro
            nostrum. Natus aut quas temporibus esse, obcaecati voluptas
            accusantium iusto adipisci modi magni.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          quisquam
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENINECE:</b>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          quisquam 
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          quisquam 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

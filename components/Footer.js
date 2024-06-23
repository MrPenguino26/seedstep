"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-15">
      <div className="bg-whiteBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex md:flex-row flex-col justify-between md:gap-0 gap-12 items-start py-16">
          <div className="flex flex-col gap-2">
            <Image
              src={"/images/logo2.png"}
              width={180}
              height={60}
              alt={config.title}
            />
            <p className="w-[300px] text-activeButton">{config.description}</p>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              {/* Can write in stuff for links and legal belowand add to the list*/}
              
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <span className="uppercase text-[#8d8d8d] font-semibold">
              
            </span>
            <ul className="font-medium flex flex-col gap-2 mt-4 text-activeButton">
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

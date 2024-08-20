"use client";

import { useMemo } from "react";
import config from "@/config/general";
import Form from "./Form.js";

const Hero = () => {
  const {title, description} = config.contents;

  return (
    <section className="flex flex-col items-center my-5 pt-32">
      {/* Reduced the top margin and gap */}
      <div className="mt-2 flex flex-col items-center gap-2 sm:gap-6">
        <h1 className="font-normal text-2xl sm:text-4xl text-black text-center mb-2">
          {title}
        </h1>
        <p className="font-light text-lg sm:text-2xl text-black text-center mb-4">
          {description}
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Hero;

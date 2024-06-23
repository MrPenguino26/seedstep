"use client";

import { useMemo } from "react";
import config from "@/config/general";
import Form from "./Form.js";

const Hero = () => {
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);

    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null };
  }, [config.contents]);

  return (
    <section className="flex flex-col items-center my-5">
      {/* Reduced the top margin and gap */}
      <div className="mt-2 flex flex-col items-center gap-2 sm:gap-6">
        <h1 className="font-normal text-2xl sm:text-4xl text-black text-center mb-2">
          {title.text}
          {title.mark && (
            <span className="bg-primary whitespace-nowrap inline-block ml-1 px-2 text-black rounded">
              {title.mark}
            </span>
          )}
        </h1>
        <p className="font-light text-lg sm:text-2xl text-black text-center mb-4">
          {config.contents.description}
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Hero;

"use client";

import config from "@/config/general";

const About = () => {
  const { title, description, about } = config.contents;

  return (
    <div className="bg-black text-white px-10 py-20 lg:py-32">
      <div className="text-center mb-12 lg:mb-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl">
          {description}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around space-y-10 lg:space-y-0 lg:space-x-10">
        {about.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-6 rounded-lg bg-opacity-10 bg-white text-center"
          >
            <span className="text-3xl">{item.emoji}</span>
            <h3 className="text-2xl font-semibold mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/* Buttons, if needed as per design */}
    </div>
  );
};

export default About;

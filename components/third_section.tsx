import React from "react";

function ThirdSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full" id="about">
      {/* Image Section */}
      <div
        className="flex-1 w-full h-full lg:h-[400px] min-h-[400px] flex overflow-hidden"
        style={{
          backgroundImage: "url('/team.jpeg')",
        }}
      />

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-center items-start p-6 bg-darker-black text-custom-light-blue h-full lg:h-[400px] min-h-[400px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          About Us<span className="text-custom-reddish-pink">.</span>
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg leading-relaxed">
          Transform IT is a consulting and skills development firm focused on
          serving the comprehensive needs of businesses and individuals.
        </p>
      </div>
    </div>
  );
}

export default ThirdSection;

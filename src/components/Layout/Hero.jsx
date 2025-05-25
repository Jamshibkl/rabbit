import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] lg:h-[650px]">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Rabbit"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white flex flex-col items-center gap-4 px-4">
          <h1 className="text-4xl md:text-9xl font-bold uppercase tracking-tight leading-tight">
            Vacation <br /> Ready
          </h1>

          <p className="text-sm md:text-lg tracking-tight max-w-xl">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>

          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-gray-200 transition-all">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

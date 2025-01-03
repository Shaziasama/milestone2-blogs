"use client";
import React from "react";

const Featurre = () => {
  return (
    <div>
      <section className="py-8 bg-neutral-100 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-cyan-700">
          Navigating the Secrets of Technology in Tech Chronicles Blog!
        </h2>
        <p className=" text-center m-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Join shazia samma! From foundational concepts to advanced
          techniques,this blog is paked with insights to empower aspiring to
          developers
        </p>
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text3xl font-bold text-center my-8 text-cyan-900 animate-color-change">
            Exploring Our Categoies
          </h1>
          <div className="grid grid-cols-2 gap-8 sma;grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              
              "Tecnology",
              "Aritifical Intelligence",
              "HTML",
              "Nextjs",
              "Web Development",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-n-out transform hover:scals-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">
                  {category}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-8"></div>
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Featurre;

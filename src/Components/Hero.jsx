import React from "react";

function Hero() {
  return (
    <div className="">
      {/* Start of Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-slate-600 to-slate-600 ">
        <img
          src="https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="A weightroom"
          className="absolute object-cover h-full w-full mix-blend-overlay"
        />

        <main className="flex justify-center items-center translate-y-44	text-white flex-col">
          <h2 className="text-5xl font-bold leading-none move-left">
            Rise to Your Fitness Peak. <br></br> Start Today, Shine Forever
          </h2>
          <div className="flex justify-center gap-12 text-2xl mt-8">
            <button className="bg-white rounded text-black p-2">
              Start Now
            </button>
            <button className=" text-white bg-slate-800	 rounded p-2">
              Learn More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero;

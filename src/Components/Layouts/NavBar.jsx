import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { useState } from "react";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);
  return (
    <div>
      <header>
        <nav className="lg:flex justify-around text-xl pt-6 bg-white py-4 hidden">
          <div className="flex items-center gap-8">
            <span className="text-4xl text-red-500 cursor-pointer pl-4">
              <GiWeightLiftingUp />
            </span>

            <h1 className="text-black cursor-pointer text-2xl">DailySweat</h1>
          </div>
          <div className="">
            <ul className="flex items-center pt-2 justify-center gap-6 text-black cursor-pointer">
              <NavLink to="/">Home</NavLink>
              <li>How It Works</li>
              <li>Membership</li>
              <li>Excercises</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="flex gap-4 text-black">
            <button>Log In</button>
            <button className="text-white bg-black p-2 rounded-md">
              Start Now
            </button>
          </div>
        </nav>
      </header>

      <nav>
        <div className="w-full flex justify-between items-center px-14 lg:hidden bg-blue-100">
          <div onClick={showSidebar} className="text-4xl p-5 cursor-pointer">
            <GrMenu />
          </div>
          <span className="text-4xl text-red-500 cursor-pointer pl-4">
            <GiWeightLiftingUp />
          </span>
        </div>
        <div
          className={`lg:hidden p-20 absolute z-10 bg-white top-0 ${
            sideBar ? "lets-slide active" : "lets-slide"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-24">
              <span className="text-4xl text-red-500 cursor-pointer pl-4">
                <GiWeightLiftingUp />
              </span>
              <h1 className="text-black cursor-pointer text-2xl pr-16 bold h-24 translate-y-8">
                DailySweat
              </h1>
            </div>
            <div
              onClick={showSidebar}
              className="pr-10 text-4xl cursor-pointer"
            >
              <IoClose />
            </div>
          </div>
          <ul className="flex flex-col items-center pt-10 justify-center gap-6 text-black cursor-pointer pop-out top ">
            <NavLink className="text-lg font-semibold" to="/">
              Home
            </NavLink>
            <li className="text-lg font-semibold">How It Works</li>
            <li className="text-lg font-semibold">Membership</li>
            <li className="text-lg font-semibold">Excercises</li>
            <li className="text-lg font-semibold">Contact Us</li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;

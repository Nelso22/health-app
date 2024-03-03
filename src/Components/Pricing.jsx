import { MdOutlineAttachMoney } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

function Pricing() {
  return (
    <section className="bg-zinc-50 max-w-full">
      <div className=" text-center pt-10">
        <h2 className="text-3xl font-semibold	">Plans and Pricing</h2>

        <h1 className="text-4xl pt-4 text-orange-600 font-bold">
          Get Started for Free
        </h1>

        <p className="text-2xl w-auto px-64 pt-5 leading-8 pricing-sec">
          We want to support you on your fitness journey every step of the way.
        </p>

        <button className="bg-orange-500 p-3  rounded-md mt-7 text-white font-semibold text-base">
          Get Started for Free
        </button>
      </div>

      <section className="grid grid-cols-2 gap-2 max-w-full px-20 two-col-grid">
        <div className=" mt-6 p-5	border-2 rounded-2xl border-gray-500		">
          <span className="bg-gray-300 text-lg font-semibold p-1.5 px-2 rounded-lg mb-9 inline-block 	">
            Free
          </span>
          <div className="flex items-center pb-6">
            <MdOutlineAttachMoney className="text-7xl" />
            <span className="inline-block text-6xl font-semibold">0</span>
          </div>
          <p className="text-2xl">The fastest way to get started</p>
          <ul className="pt-5">
            <li className="flex items-center pb-3">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2">Weekly Workouts Sent Out</p>
            </li>
            <li className="flex items-center pb-3">
              {" "}
              <FcCheckmark /> <p className="text-xl pl-2">Rewards</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2">Community Connection</p>
            </li>
          </ul>
          <button className="w-full text-lg font-semibold border-2 rounded-md border-gray-300 mt-10 p-2.5 translate-y-40 button-dwn">
            Sign Up
          </button>
        </div>

        {/* half of grid */}
        <div className=" mt-6 p-5 px-8 bg-orange-300 rounded-2xl	">
          <span className="bg-zinc-600	 text-lg font-semibold p-1.5 px-2 rounded-lg mb-9 inline-block	text-white	">
            Pro
          </span>
          <div className="flex items-center pb-6">
            <MdOutlineAttachMoney className="text-7xl" />
            <span className="inline-block text-6xl font-semibold">
              14 / Monthly
            </span>
          </div>
          <p className="text-2xl">Everything you'll ever need</p>
          <ul className="pt-5">
            <li className="flex items-center pb-3">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2">Weekly Workouts Sent Out</p>
            </li>
            <li className="flex items-center pb-3">
              {" "}
              <FcCheckmark /> <p className="text-xl pl-2"> Exclusive Rewards</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2 pb-3">Community Connection</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2 pb-3">Progress Tracker</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2 pb-3">Personal Trainer</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2 pb-3">Workout Calendar</p>
            </li>
            <li className="flex items-center">
              {" "}
              <FcCheckmark />{" "}
              <p className="text-xl pl-2 pb-3">
                Access to all Excercises Available
              </p>
            </li>
          </ul>
          <button className="w-full text-lg font-semibold border-2 rounded-md border-gray-300 mt-8 p-2.5 ">
            Sign Up
          </button>
        </div>
      </section>
    </section>
  );
}

export default Pricing;

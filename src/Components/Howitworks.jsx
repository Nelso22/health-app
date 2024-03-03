import React from "react";
import { FcSurvey } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { GiStrongMan } from "react-icons/gi";

function Howitworks() {
  return (
    <div className="bg-slate-200 max-w-full pt-12">
      <section className="">
        <div className="text-center pb-5">
          <h2 className="text-3xl font-semibold pb-4 text-zinc-900	">
            Your Roadmap to Fitness
          </h2>
          <p className="text-2xl text-gray-800	">
            Discover a tailored approach to wellness that aligns with your
            passions and interests. <br></br> We'll guide you through
            personalized workouts designed to make fitness an enjoyable journey.
          </p>
        </div>
        {/* Steps container */}
        <div className="lg:flex items-center max-w-7xl p-8 mx-auto gap-3 sm:grid sm:grid-cols-1 sm:place-items-center to-left">
          <div className="w-2/5 flex flex-col items-center">
            {/* Single Step */}

            <FcSurvey style={{ fontSize: "70px" }} />
            <h2 className="pt-5 text-2xl pb-4">Questionnaire</h2>

            <p className="text-xl leading-8">
              Kickstart your journey by completing our tailored questionnaire.
              Uncover the ideal excercises that match your preferences and
              goals, ensuring a fitness plan as unique as you are. Let's craft a
              regimen that speaks to your individual needs and propels you
              toward a healtier, fitter you.
            </p>
          </div>
          <div className="w-2/5	flex flex-col items-center pt-4">
            {/* Single Step */}
            <FcList style={{ fontSize: "70px" }} />
            <h2 className="pt-5 text-2xl pb-5">Curated List</h2>
            <p className="text-xl leading-8 pb-14">
              Dive into a fitness experience designed just for you. Complete our
              personalized questionnaire, and watch as a curated list of
              workouts arrives, perfectly aligned with your preferences and
              goals. It's time to transform the way you move, one excercise at a
              time.
            </p>
          </div>
          <div className="flex flex-col items-center w-2/5">
            {/* Single Step */}
            <GiStrongMan
              style={{
                fontSize: "85px",
                color: "darkblue",
                transform: "translateY(-50px)",
              }}
            />
            <h2
              className="pt-5 text-2xl"
              style={{ transform: "translateY(-45px)" }}
            >
              Break A Sweat!
            </h2>
            <p className="text-xl text-center leading-9">
              Let The Transformation Begin! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Voluptatibus laudantium itaque,
              natus vitae dolorem quo omnis sit assumenda nobis laborum!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Howitworks;

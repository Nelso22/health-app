import React from "react";
import body from "../Assets/images/bodypart.png";
import { useContext, useEffect } from "react";
import FormContext from "../FormContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Search() {
  const { bodyPart, onChange, handleSubmit, parts, setParts } =
    useContext(FormContext);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    async function displayParts() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setParts(result);
      } catch (error) {
        console.error(error);
      }
    }
    displayParts();
  }, [setParts]);

  return (
    <div className="max-w-7xl  my-16 m-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-950 ">
          Find the Excercises that unlock your potential
        </h1>

        <h2 className="text-3xl text-orange-600 font-bold py-4">
          Search below to get started
        </h2>
      </div>{" "}
      <div className=" max-w-6xl m-auto text-center my-7">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seach for Excercises by body part"
            className="w-1/3 border-2 rounded-md border-emerald-600 h-14 px-1 ml-20"
            value={bodyPart || ""}
            onChange={onChange}
          />
          <button
            type="submit"
            className="border p-2.5 rounded-md mx-5 border-black"
          >
            Submit
          </button>
        </form>

        {/* container */}
        <Carousel responsive={responsive} className="mt-16">
          {parts.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center flex-col"
            >
              <img src={body} alt="" className="w-30" />
              <p className="pt-5 capitalize">{item}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Search;

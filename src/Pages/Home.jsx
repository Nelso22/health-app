import React from "react";
import Hero from "../Components/Hero";
import Howitworks from "../Components/Howitworks";
import Pricing from "../Components/Pricing";
import Search from "../Components/Search";
import ExcerciseCard from "../Components/ExcerciseCard";

function Home() {
  return (
    <div>
      <Hero />
      <Howitworks />
      <Pricing />
      <Search />
      <ExcerciseCard />
    </div>
  );
}

export default Home;

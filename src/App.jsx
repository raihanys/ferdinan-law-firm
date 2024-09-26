import React from "react";
import Hero from "./components/Hero/Hero";
import Service from "./components/service/Service";
import Banner from "./components/Banner/Banner";
import Teams from "./components/Teams/Teams";
import Location from "./components/Location/Location";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-black font-primaryRegular">
      <Hero />
      <Service />
      <Banner />
      <Teams />
      <Location />
    </main>
  );
};

export default App;

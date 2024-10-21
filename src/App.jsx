import React from "react";
import Hero from "./components/Hero/Hero";
import Service from "./components/service/Service";
import Banner from "./components/Banner/Banner";
import Teams from "./components/Teams/Teams";
import Location from "./components/Location/Location";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-black font-primaryRegular">
      <section>
        <Hero />
      </section>
      <section>
        <Service />
      </section>
      <section id="about">
        <Banner />
      </section>
      <section id="profile">
        <Teams />
      </section>
      <section id="contact">
        <Location />
      </section>
    </main>
  );
};

export default App;

import React from "react";
import { GoLaw } from "react-icons/go";
import { FaHandshake, FaBuilding, FaComments } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { motion } from "framer-motion";

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
};

const Services = [
  {
    id: 1,
    title: "Litigasi dan Non Litigasi",
    link: "#",
    icon: <GoLaw />,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Hukum Korporasi",
    link: "#",
    icon: <FaBuilding />,
    delay: 0.15,
  },
  {
    id: 3,
    title: "⁠Hukum Kontrak / Perjanjian",
    link: "#",
    icon: <FaHandshake />,
    delay: 0.2,
  },
  {
    id: 4,
    title: "⁠Legal due diligence",
    link: "#",
    icon: <MdEditDocument />,
    delay: 0.25,
  },
  {
    id: 5,
    title: "Hubungan Industrial",
    link: "#",
    icon: <FaPeopleGroup />,
    delay: 0.3,
  },
  {
    id: 6,
    title: "Opini Hukum",
    link: "#",
    icon: <FaComments />,
    delay: 0.35,
  },
];

const Service = () => {
  return (
    <section>
      <div className="container py-10 lg:py-14">
        <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold text-left pb-10">
          Solusi Hukum
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {Services.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
              className="bg-notsowhite rounded-2xl flex flex-col gap-2 items-center justify-center p-4 py-6"
            >
              <div className="text-2xl md:text-2xl lg:text-3xl mb-4">
                {service.icon}
              </div>
              <h1 className="text-xs md:text-sm lg:text-sm font-semibold text-center px-2 lg:px-4">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

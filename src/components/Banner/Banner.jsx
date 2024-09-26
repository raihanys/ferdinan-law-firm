import React from "react";
import BannerPng from "../../assets/Banner.png";
import { motion } from "framer-motion";

const slideFromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: delay, duration: 0.6, ease: "easeInOut" },
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: delay, duration: 0.6, ease: "easeInOut" },
  },
});

const Banner = () => {
  return (
    <section>
      <div className="container py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-16">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            variants={slideFromLeft(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            src={BannerPng}
            alt="Banner"
            className="w-[300px] lg:w-[400px] xl:w-[450px] relative object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-lg sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-primaryBold !leading-snug">
              Ferdinan Law Firm & Partners
            </h1>
            <motion.p
              variants={fadeIn(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm sm:text-sm md:text-sm lg:text-lg xl:text-xl lg:w-[400px] xl:w-[485px] text-justify"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia et
              sunt reiciendis similique perferendis laborum sit corporis
              expedita repudiandae cumque? Vitae, dignissimos voluptate? In,
              impedit non. Tempore nisi repellendus deleniti?
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

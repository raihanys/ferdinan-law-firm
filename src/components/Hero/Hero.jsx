import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroPng from "../../assets/Hero.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        duration: 0.8,
        delay: delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
};

const smoothScroll = (target, duration) => {
  const start = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + start;
  const offset = window.innerHeight / 2 - target.clientHeight / 2;
  const end = targetPosition - offset;

  const distance = end - start;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      smoothScroll(section, 650);
    }
  };

  return (
    <section className="overflow-hidden relative bg-notsowhite">
      <section id="home">
        <Navbar />
      </section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:min-h-[472px] pt-10 pb-16 md:pt-6 md:pb-16">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="text-center md:text-left space-y-6 lg:space-y-8 md:w-[310px] lg:w-[390px] xl:w-[450px]">
            <motion.h1
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-primaryBold !leading-snug"
            >
              Melayani dalam pemberian{" "}
              <span className="text-secondary">Bantuan </span>
              dan<span className="text-secondary"> Solusi Hukum </span>
              yang Berkualitas, Terpercaya serta berintegritas untuk menjamin{" "}
              <span className="text-secondary"> Kepastian Hukum</span> dan{" "}
              <span className="text-secondary">Berkeadilan </span>
              kepada klien.
            </motion.h1>
            <motion.div
              variants={FadeUp(1)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={() => handleScroll("contact")}
                className="primary-btn flex items-center text-xs sm:text-xs md:text-xs lg:text-sm xl:text-md gap-3 group"
              >
                Hubungi Kami
                <IoIosArrowRoundForward className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl group-hover:translate-x-2 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            src={HeroPng}
            alt="Hero Img"
            className="w-[290px] md:w-[350px] lg:w-[500px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

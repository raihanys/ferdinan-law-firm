import React from "react";
import { motion } from "framer-motion";

const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: delay, duration: 0.6, ease: "easeInOut" },
  },
});

const Location = () => {
  return (
    <section>
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location Detail */}
        <div className="flex flex-col justify-center p-6">
          <div className="text-center md:text-left space-y-2 mb-8">
            <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-primaryBold">
              Lokasi Kantor
            </h1>
            <motion.h2
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm md:text-md lg:text-lg xl:text-xl"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </motion.h2>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-primaryBold">
              Nomor Telepon
            </h1>
            <motion.p
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm md:text-md lg:text-lg xl:text-xl"
            >
              +62 XXX-XXX-XXXX
            </motion.p>
          </div>
        </div>

        {/* Location Maps */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          <iframe
            className="w-full h-32 md:h-64 rounded-3xl shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d991.5730064235428!2d106.86544926950724!3d-6.225173666412925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTMnMzAuNiJTIDEwNsKwNTEnNTcuOSJF!5e0!3m2!1sen!2sid!4v1727102157420!5m2!1sen!2sid"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;

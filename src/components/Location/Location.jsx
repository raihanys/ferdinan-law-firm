import React from "react";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
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

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "#home",
  },
  {
    id: 2,
    title: "About",
    path: "#about",
  },
  {
    id: 3,
    title: "Profile",
    path: "#profile",
  },
  {
    id: 4,
    title: "Contact",
    path: "#contact",
  },
];

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

const Location = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id.replace("#", ""));
    if (section) {
      smoothScroll(section, 650);
    }
  };

  return (
    <section>
      <div className="container pt-4 pb-8 md:pt-10 md:pb-8 grid grid-cols-1 md:grid-cols-3">
        {/* logo & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 gap-8 md:gap-12">
          <motion.div
            variants={fadeIn(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-primary p-2 sm:p-2.5 md:p-3 rounded-xl w-fit h-fit"
          >
            <img
              src={Logo}
              alt="Ferdinan Law Firm"
              className="h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-auto"
            />
          </motion.div>
          <div className="text-left">
            <h1 className="text-sm md:text-md lg:text-lg xl:text-xl font-primaryBold">
              Links
            </h1>
            <motion.p
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xs md:text-sm lg:text-md xl:text-lg"
            >
              <ul className="list-none mt-4 space-y-2">
                {NavbarMenu.map((menu) => (
                  <li key={menu.id}>
                    <button
                      onClick={() => handleScroll(menu.path)}
                      className="inline-block text-xs md:text-sm lg:text-md xl:text-lg hover:text-secondary transition-colors duration-300 ease-in-out"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                      {menu.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.p>
          </div>
        </div>

        {/* Location Detail */}
        <div className="flex flex-col justify-center p-6">
          <div className="text-left space-y-2 mb-8">
            <h1 className="text-sm md:text-md lg:text-lg xl:text-xl font-primaryBold">
              Lokasi Kantor
            </h1>
            <motion.h2
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xs md:text-sm lg:text-md xl:text-lg"
            >
              Jl. Jatinegara Barat No.166-H, RW.01, RT.01, DKI, Daerah Khusus
              Ibukota Jakarta 13330
            </motion.h2>
          </div>
          <div className="text-left space-y-2">
            <h1 className="text-sm md:text-md lg:text-lg xl:text-xl font-primaryBold">
              Nomor Telepon
            </h1>
            <motion.p
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xs md:text-sm lg:text-md xl:text-lg"
            >
              <a
                href="https://wa.me/62818116107"
                className="hover:text-secondary hover:underline"
              >
                0818 1161 07
              </a>
            </motion.p>
            <motion.p
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-xs md:text-sm lg:text-md xl:text-lg"
            >
              0812 8049 8649
            </motion.p>
          </div>
        </div>

        {/* Location Maps */}
        <motion.div
          variants={FadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="p-6"
        >
          <iframe
            className="w-full h-64 md:h-44 xl:h-64 rounded-3xl shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d935.028753265771!2d106.86623092151936!3d-6.224748212882009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f37c8a9722a1%3A0x55c7effcd776778b!2sSewa%20Ruang%20Kantor%20tahunan%20dan%20Taman%20Parkir%20Bulanan!5e0!3m2!1sen!2sid!4v1728495093295!5m2!1sen!2sid"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
      <div className="text-center text-xs md:text-xs lg:text-sm xl:text-md pb-8 px-16">
        &copy; {new Date().getFullYear()} Ferdinan Law Firm & Partner's. All
        rights reserved.
      </div>
    </section>
  );
};

export default Location;

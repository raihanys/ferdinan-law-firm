import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

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

  // Hitung posisi scroll agar elemen target berada di tengah layar
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

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    smoothScroll(section, 650);
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="container py-5 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="bg-primary p-2.5 md:p-3 rounded-xl">
          <img
            src={Logo}
            alt="Ferdinan Law Firm & Partner's"
            className="h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-auto"
          />
        </div>

        {/* Menu Section for Large Screen */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-4 font-primaryMedium">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => scrollToSection(menu.path.replace("#", ""))}
                  className="relative inline-block py-1 sm:py-2 px-3 sm:px-4 sm:text-md md:text-md lg:text-sm xl:text-base hover:text-secondary transition-colors duration-300 ease-in-out"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  {menu.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger menu Section */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <IoMdMenu className="text-3xl md:text-4xl cursor-pointer" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed inset-0 bg-primary z-50 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="fixed top-7 right-4 md:top-8 md:right-12 text-white text-3xl md:text-4xl"
        >
          <IoMdClose />
        </button>

        <ul className="flex flex-col items-center justify-start h-full pt-36 gap-8 text-white font-primaryMedium text-xl">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => {
                  scrollToSection(menu.path.replace("#", ""));
                  toggleMenu();
                }}
                className="hover:text-secondary transition-colors duration-300 ease-in-out"
              >
                {menu.title}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

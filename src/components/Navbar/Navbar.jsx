import React from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "#",
  },
  {
    id: 3,
    title: "Profile",
    path: "#",
  },
  {
    id: 4,
    title: "Contact",
    path: "#",
  },
];

const Navbar = () => {
  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="container py-5 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="bg-primary p-2 sm:p-2.5 md:p-3 rounded-xl">
          <img
            src={Logo}
            alt="Ferdinan Law Firm & Partner's"
            className="h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-auto"
          />
        </div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-4 font-primaryMedium">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="relative inline-block py-1 sm:py-2 px-3 sm:px-4 sm:text-md md:text-md lg:text-sm xl:text-base hover:text-secondary transition-colors duration-300 ease-in-out"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger menu Section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-2xl sm:text-3xl md:text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

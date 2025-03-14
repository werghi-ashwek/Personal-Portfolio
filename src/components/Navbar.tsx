import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#1E1D1D] py-6 px-8 flex justify-between items-center z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#" className="text-2xl font-bold text-[#E0E0E0]">
        Ashwek Werghi
      </a>
      <button onClick={toggleMenu} className="lg:hidden text-[#E0E0E0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <motion.div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex lg:flex-row lg:space-x-8 absolute lg:static top-20 left-0 right-0 bg-[#303031] lg:bg-transparent py-4 lg:py-0 border-t lg:border-t-0 border-[#5A4D41] rounded-lg lg:rounded-none shadow-lg w-full lg:w-auto px-4 lg:px-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center w-full space-y-6 lg:space-y-0 lg:space-x-8">
          <a
            href="#skills"
            className="text-lg font-medium text-[#E0E0E0] hover:text-[#867C70] transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-lg font-medium text-[#E0E0E0] hover:text-[#867C70] transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-lg font-medium text-[#E0E0E0] hover:text-[#867C70] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-[#E0E0E0] hover:text-[#867C70] transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

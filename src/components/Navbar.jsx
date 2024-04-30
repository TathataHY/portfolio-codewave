import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { FiSun } from "react-icons/fi";
import { MdOutlineNightlight } from "react-icons/md";

export const Navbar = ({ darkMode, toggleMenu, toggleTheme, isOpen }) => {
  return (
    <>
      <nav className="px-0 2xl:px-40">
        <div className="w-full items-center justify-between py-4 px-10">
          <div className="flex items-center justify-between w-full">
            <a
              href="/"
              className="text-2xl font-bold text-blue-500 cursor-pointer"
            >
              Tathata
            </a>
            <ul className="hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200">
              <li className="cursor-pointer hover:text-blue-500">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                <a href="#projects">Projects</a>
              </li>
            </ul>
            <button onClick={toggleTheme} className="p-2">
              {darkMode ? (
                <FiSun size={24} color={"white"} />
              ) : (
                <MdOutlineNightlight size={24} color={"gray"} />
              )}
            </button>

            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="text-3xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <BiMenu
                  size={26}
                  className={`${
                    isOpen ? "hidden" : "block"
                  } text-gray-700 dark:text-gray-300`}
                />

                <AiOutlineClose
                  size={26}
                  className={`${
                    isOpen ? "block" : "hidden"
                  } h-6 w-6 text-gray-700 dark:text-gray-300`}
                />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          >
            <div className="flex flex-col gap-4 text-base text-gray-700 dark:text-neutral-200">
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

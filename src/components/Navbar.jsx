import { Link } from "react-router-dom";
import { useState } from "react";
import GettingStartedPopup from "./GettingStartedPopup";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <img src={logoImg} alt="ARBA Logo" className="h-8 w-8" />
              <span className="font-bold text-lg sm:text-xl text-primary">ARBA Accelerator</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex space-x-6 text-gray-700">
                <li>
                  <Link 
                    to="/home" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/working-with" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    Working With
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/events" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 hover:shadow-md hover:shadow-blue-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={openPopup}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link 
                to="/" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/working-with" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                Working With
              </Link>
              <Link 
                to="/events" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                Events
              </Link>
              <Link 
                to="/team" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-blue-100" 
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-4">
                <button 
                  onClick={openPopup}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Getting Started Popup */}
      <GettingStartedPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}

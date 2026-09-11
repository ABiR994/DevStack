import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Logo = () => (
  <a href="/" className="flex items-center gap-2">
    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-brand text-white font-bold text-sm">
      DS
    </span>
    <span className="text-xl font-extrabold text-gray-900">
      Dev <span className="text-gradient-brand">Stack</span>
    </span>
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Left => hamburger menu (mobile) + logo (desktop) */}
        <div className="flex items-center">
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden text-2xl text-gray-800" aria-label="Toggle menu">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        {/* Center => logo (mobile) + links (desktop) */}
        <div className="flex justify-center">
          <div className="md:hidden">
            <Logo />
          </div>
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#"
                  className={
                    link === "Home"
                      ? "text-pink-600 font-semibold"
                      : "hover:text-pink-600 transition-colors"
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right => Sign In and Sign Up */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          <a href="#" className="text-sm md:text-base font-medium text-gray-700 hover:text-gray-900">
            Sign In
          </a>
          <a href="#" className="bg-gradient-brand text-white font-semibold px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile hamburger menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" onClick={() => setIsMenuOpen(false)} className={link === "Home" ? "text-pink-600 font-semibold" : ""}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
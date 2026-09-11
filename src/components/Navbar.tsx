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
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <ul className="flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className={
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

        <div className="flex items-center gap-4">
          <a href="#" className="font-medium text-gray-700 hover:text-gray-900">
            Sign In
          </a>
          <a href="#" className="bg-gradient-brand text-white font-semibold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contacts/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Anasayfa", path: "/" },
    { link: "Market", path: "/shop" },
    { link: "Hakkımızda", path: "/about" },
    { link: "Kitap Sat", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50'>
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "bg-blue-300 shadow-md" : ""
        }`}
      >
        <div className='flex justify-between items-center text-base gap-8'>
          {/* LOGO */}
          <Link
            to='/'
            className='text-2xl font-bold text-blue-700 flex items-center'
          >
            <FaBlog className='inline-block mr-1' />
            Books
          </Link>

          {/* NAV ITEMS (Desktop) */}
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className='block text-base uppercase text-black hover:text-blue-700'
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* ICONS (Only shown on large screens) */}
          <div className='hidden lg:flex items-center'>
            <button>
              <FaBarsStaggered className='w-5 hover:text-blue-700' />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-black transition-all focus:outline-none'
            >
              {isMenuOpen ? (
                <FaXmark className='h-5 w-5' />
              ) : (
                <FaBarsStaggered className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile NAV ITEMS */}
        <div
          className={`md:hidden space-y-4 px-4 mt-4 py-7 bg-blue-700 transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className='block text-base uppercase text-white hover:text-gray-300'
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

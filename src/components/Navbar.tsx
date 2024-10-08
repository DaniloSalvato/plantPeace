import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import plantPiece from "../assets/plantPiece-black.svg";
import UserLogin from "./UserLogin";
import burgerBtn from "../assets/burger-btn.svg";
import closeBtn from "../assets/close-btn.svg";

const Navbar = () => {
  const [navBarExpanded, setNavBarExpanded] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<boolean>(true);

  useEffect(() => {
    function monitorScreenSize() {
      if (window.screen.width > 768) {
        setUserLogin(true);
        setNavBarExpanded(false);
        setUserLogin(true);
      } else setUserLogin(false);
    }

    monitorScreenSize();
    window.addEventListener("load", monitorScreenSize);
    window.addEventListener("resize", monitorScreenSize);
  }, [userLogin, navBarExpanded]);

  const handleMenuBtnClick = () => {
    setNavBarExpanded((prevState) => !prevState);
  };

  const shownMenuClasses =
    "aria-expanded:block aria-expanded:absolute aria-expanded:right-0 aria-expanded:top-20 aria-expanded:bg-customWisper aria-expanded:w-full";

  return (
    <header className="flex items-center justify-between font-raleway bg-customWisper p-4">
      <Link to={"/home"}>
        <img className="md:ml-16" src={plantPiece} alt="plantPeace logo" />
      </Link>
      <nav
        id="navbar"
        aria-expanded={navBarExpanded}
        className={`hidden md:block  z-50 ${
          navBarExpanded && shownMenuClasses
        }`}
      >
        <ul
          id="navbar-menu"
          aria-expanded={navBarExpanded}
          className="flex flex-row aria-expanded:flex-col aria-expanded:items-end aria-expanded:mr-4 items-center gap-6 *:text-customLunarGreen hover:*:text-customAvocado"
        >
          <li>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about-us">
              About us
            </NavLink>
          </li>
          <li className="md:hidden">
            <UserLogin />
          </li>
        </ul>
      </nav>

      {userLogin && <UserLogin />}

      <button className="inline-block md:hidden" onClick={handleMenuBtnClick}>
        <img
          src={navBarExpanded ? closeBtn : burgerBtn}
          alt="Burguer menu icon and cross mark when expanded"
        />
      </button>
    </header>
  );
};

export default Navbar;

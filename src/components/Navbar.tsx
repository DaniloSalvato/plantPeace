import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between mx-2">
      <h1>LOGO</h1>
      <nav >
        <ul className="flex items-center gap-2">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About us</NavLink>
          </li>
        </ul>
      </nav>

      <h1>icon</h1>
    </header>
  );
};

export default Navbar;

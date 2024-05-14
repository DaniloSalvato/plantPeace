import { Link } from "react-router-dom"
import plantPeace from "../assets/plantPiece-white.svg"

interface ListType {
  title: string
}

function List({ title }: ListType) {
  return (
    <div className="text-white z-10">
      <h2 className="mb-4 text-2xl font-bold font-lato">{title}</h2>
      <ul className="flex flex-col gap-2 *:font-raleway">
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  const bgImageClasses =
    "before:bg-footerBg before:absolute before:size-full before:top-0 before:left-0 before:opacity-40 before:z-0"
  return (
    <footer
      className={`relative bg-customLunarGreen pt-36 pb-8 px-5 md:px-20 ${bgImageClasses}`}
    >
      <div className="flex flex-wrap gap-10 justify-center sm:justify-between items-center z-10">
        <div className="text-white">
          <h2 className="text-5xl font-bold font-garamondSerif mb-6">
            Stay Fresh
          </h2>
          <p className="font-raleway mb-3">compassinhos@gmail.com</p>
          <p className="font-raleway">+55 41 99999-9999</p>
        </div>

        <span className="flex flex-wrap gap-10">
          <List title="Links" />
          <List title="Community" />
        </span>
      </div>

      <span className="block h-[1px] w-full bg-customAccent mt-20 mb-4"></span>

      <div className="flex flex-wrap justify-center gap-2 md:justify-between items-center p-4">
        <img src={plantPeace} alt="plantPeace Logo" />
        <p className="text-white font-raleway w-56 text-center">
          Compassinhos ®. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

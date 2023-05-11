import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../css/navbar.css";
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";

import { useState } from "react";
const path = ["", "blog", "about", "contact", "products"];
const pathLabel = ["Start", "Blog", "About", "Contact", "Products"];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarMenu = document.querySelector(".navbar-menu");

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    navbarMenu.classList.toggle("top-[9%]");
  };

  return (
    <div className="flex justify-between bg-[#3A5254] items-center w-[100%] mx-auto">
      <div className="navbar-menu md:static absolute bg-[#3A5254] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-3">
          {path.map((item, index) => (
            <li key={index} className="mx-5 my-5">
              <Link
                className="hover:text-[#E1D9D1] text-[#FFFFFF]"
                to={"/" + item}
              >
                {pathLabel[index]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center">
          <li className="mx-2">
            <Link className="hover:text-[#E1D9D1] text-[#FFFFFF]" to="/search">
              Search
            </Link>
          </li>
          <li className="mx-2">
            <Link className="hover:text-[#E1D9D1] text-[#FFFFFF]" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
          <li className="mx-5 my-5">
            <button className="bg-[#FFFFFF] px-5 py-2 rounded-sm hover:bg-[#87acec]">
              Mitt konto
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <IonIcon
          icon={isMenuOpen ? menu : close}
          onclick={handleClick}
          className="md:hidden text-4xl text-[#FFFFFF] cursor-pointer mr-3"
        />
      </div>
    </div>
  );
};
/* absolute  min-h-[60vh] left-0 top-[9%] w-full px-5 shadow-md bg-[#3A5254] flex justify-between */

/* import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../css/navbar.css";

const path = ["home", "blog", "about", "contact", "products"];
const pathLabel = ["Start", "Blog", "About", "Contact", "Products"];

export const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#3A5254] items-center w-[100%] mx-auto">
      <div className="md:static absolute bg-[#3A5254] md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-3">
          {path.map((item, index) => (
            <li key={index} className="mx-5 my-5">
              <Link
                className="hover:text-[#E1D9D1] text-[#FFFFFF]"
                to={"/" + item}
              >
                {pathLabel[index]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex items-center">
          <li className="mx-2">
            <Link className="hover:text-[#E1D9D1] text-[#FFFFFF]" to="/search">
              Search
            </Link>
          </li>
          <li className="mx-2">
            <Link className="hover:text-[#E1D9D1] text-[#FFFFFF]" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
          <li className="mx-5 my-5">
            <button className="bg-[#FFFFFF] px-5 py-2 rounded-sm hover:bg-[#87acec]">
              Mitt konto
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
 */
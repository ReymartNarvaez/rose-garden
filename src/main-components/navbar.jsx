import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { IonIcon } from "@ionic/react";
import { menu, close, search } from "ionicons/icons";
import { useState } from "react";

export const Navbar = () => {
  const path = ["", "blog", "about", "contact", "products"];
  const pathLabel = ["Start", "Blog", "About", "Contact", "Products"];

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
              <span className="border-b border-[#FFFFFF]">
                <input
                  type="text"
                  className="md:static w-40 focus:outline-none focus:border-[#FFFFFF] text-[#FFFFFF] bg-transparent"
                  placeholder="Search"
                />
                <IonIcon icon={search} />
              </span>
            </Link>
          </li>
          <li className="mx-2">
            <Link className="hover:text-[#E1D9D1] text-[#FFFFFF]" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
          <li className="mx-5 my-5">
            <Link
              className="hover:text-[#E1D9D1] text-[#FFFFFF]"
              to={"/account"}
            >
              My Account
            </Link>
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

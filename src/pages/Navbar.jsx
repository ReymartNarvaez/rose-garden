import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { IonIcon } from "@ionic/react";
import { menu, close, search } from "ionicons/icons";
import { useState } from "react";
import { Modal } from "./LoginModal";

export const Navbar = () => {
  const path = ["", "blog", "about", "contact", "products"];
  const pathLabel = ["Start", "Blog", "About", "Contact", "Products"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarMenu = document.querySelector(".navbar-menu");

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    navbarMenu.classList.toggle("top-[5%]");
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-between bg-[#3A5254] items-center w-[100%] mx-auto">
      <div className="z-10 navbar-menu md:static absolute bg-[#3A5254] md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-3">
          {path.map((item, index) => (
            <li key={index} className="mx-5 my-5">
              <Link
                className="hover:text-[#87acec] text-[#FFFFFF]"
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
            <span className="border-b border-[#FFFFFF] hover:border-[#87acec] hover:text-[#87acec] text-[#FFFFFF]">
              <input
                type="text"
                className="md:static w-40 focus:outline-none focus:border-[#FFFFFF] text-[#FFFFFF] bg-transparent"
                placeholder="Search"
              />
              <IonIcon icon={search} />
            </span>
          </li>
          <li className="mx-2">
            <Link className="hover:text-[#87acec] text-[#FFFFFF]" to="/cart">
              <ShoppingCart size={32} />
            </Link>
          </li>
          <li className="mx-5 my-5">
            <button
              onClick={openModal}
              className="hidden lg:block text-[#FFFFFF] bg-[#3A5254] px-5 py-2 rounded-sm hover:text-[#87acec] outline-none"
            >
              My Account
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </li>
        </ul>
      </div>
      <div className="md:hidden z-10">
        <IonIcon
          icon={isMenuOpen ? menu : close}
          onclick={handleClick}
          className="md:hidden text-4xl text-[#FFFFFF] cursor-pointer mr-3"
        />
      </div>
    </div>
  );
};

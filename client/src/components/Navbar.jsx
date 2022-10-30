import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import logo from "../assets/logo.png";


const NavBarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}
  </li>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const navMenu = ["Market", "Exchange", "Tutorials", "Wallets"];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">

      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          src={logo}
          alt="logo"
          className="w-32 cursor-pointer"
        />
      </div>

      <ul className="text-white hidden md:flex list-none flex-row justify-between items-center flex-initial">
        {
          navMenu.map((item, index) => (
            <NavBarItem
              key={item + index}
              title={item}
            />
          ))
        }
        <li className="bg-blue py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-blueHover">
          Login
        </li>
      </ul>

      <div className="flex relative">
        {
          !toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )
        }

        {/* {
          toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )
        } */}

        {
          // Mobile menu on...
          toggleMenu && (
            <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassMorphism text-white animate-slide-in"
            >
              {/* ❌ Mobile menu close btn ❌*/}
              <li className="text-xl w-full my-2 cursor-pointer">
                <AiOutlineClose
                  onClick={() => setToggleMenu(false)}
                  className="hover:text-red-500 duration-200"
                />
              </li>

              {
                navMenu.map((item, index) =>
                  <NavBarItem
                    key={item + index}
                    title={item}
                    classProps="my-2 text-lg"
                  />,
                )
              }
            </ul>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
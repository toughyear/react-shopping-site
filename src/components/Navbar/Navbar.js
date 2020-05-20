import React, { useState, useEffect } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "./logo.svg";

export default function Navbar(props) {
  let [atTop, setAtTop] = useState(true);
  const [ScreenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // user is scrolled
      setAtTop(() => {
        return false;
      });
      console.log("not at top");
      console.log(atTop);
    } else {
      // user is at top of page
      setAtTop(() => {
        return true;
      });
      console.log("TOP");
      console.log(atTop);
    }
  };

  const handleScreenWidth = () => {
    setScreenWidth(() => {
      return window.innerWidth;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScreenWidth);
    console.log("kuch to hua h");
  }, []);

  //you need to destructure props
  const { handleDrawer, Drawer } = props;

  return (
    <div
      className={
        "fixed top-0 z-10 flex w-full bg-gray-100 align-items-center justify-between px-4 md:px-20 py-4 bg-opacity-0 " +
        (!atTop && " shadow-lg bg-opacity-75")
      }
    >
      {(!(Drawer === "cart" || Drawer === "login") || ScreenWidth > 426) && (
        <div className="flex ">
          {!Drawer && (
            <AiOutlineMenu
              className="my-auto md:hidden "
              onClick={() => handleDrawer("shop")}
            />
          )}
          {(Drawer === "shop" || Drawer === "learn" || ScreenWidth > 426) && (
            <button
              onClick={() => handleDrawer("shop")}
              className="mr-16 text-sm  uppercase font-semibold tracking-wide focus:outline-none "
            >
              Shop
            </button>
          )}
          {(Drawer === "shop" || Drawer === "learn" || ScreenWidth > 426) && (
            <button
              onClick={() => handleDrawer("learn")}
              className="  text-sm  uppercase font-semibold tracking-wide focus:outline-none"
            >
              Learn
            </button>
          )}
        </div>
      )}

      <div className="flex align-items-center">
        {(Drawer === "shop" || Drawer === "learn") && (
          <AiOutlineCloseCircle
            className="h-10 w-10 hover:text-orange-700 cursor-pointer"
            onClick={() => handleDrawer(null)}
          />
        )}

        {(!Drawer || ScreenWidth > 426) && (
          <a href="/" className="mx-3">
            <img
              src={logo}
              alt="Tailwind and Create React App"
              className="h-12"
            />
          </a>
        )}

        {(Drawer === "cart" || Drawer === "login") && (
          <AiOutlineCloseCircle
            className="h-10 w-10 hover:text-orange-700 cursor-pointer"
            onClick={() => handleDrawer(null)}
          />
        )}
      </div>
      {(!(Drawer === "shop" || Drawer === "learn") || ScreenWidth > 426) && (
        <div className="flex">
          <button
            onClick={() => handleDrawer("cart")}
            className="mr-16 text-sm hidden md:block uppercase font-semibold tracking-wide focus:outline-none "
          >
            Cart
          </button>
          <AiOutlineShoppingCart
            onClick={() => handleDrawer("cart")}
            className="my-auto mr-4 md:hidden"
          />
          <button
            onClick={() => handleDrawer("login")}
            className=" text-sm  uppercase font-semibold tracking-wide focus:outline-none"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

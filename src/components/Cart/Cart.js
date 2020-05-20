import React from "react";
import Fade from "react-reveal/Fade";

export default function Cart() {
  return (
    <Fade right duration={500}>
      <div className="fixed flex flex-col items-center justify-center w-screen md:w-1/2 h-full bg-green-200 top-0 right-0  shadow-lg">
        <h1 className="text-3xl font-semibold mt-auto">Your cart is empty</h1>
        <p className="text-xl my-3">Oops! You have nothing here</p>
        <img
          className="max-w-xs"
          src="https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/Hims/hims-cart-emptyCart-2x_1"
          alt="empty"
        />
        <button className="mt-auto font-semibold w-full bg-black text-white text-sm uppercase py-4 tracking-wide border-2 border-black hover:bg-transparent hover:text-black">
          shop all
        </button>
      </div>
    </Fade>
  );
}

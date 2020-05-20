import React from "react";
import Fade from "react-reveal/Fade";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  return (
    <Fade right duration={500}>
      <div className="fixed flex flex-col items-center justify-center w-screen md:w-1/2 h-full bg-red-100 top-0 right-0  shadow-lg">
        <h1 className="mt-auto text-2xl font-semibold">Welcome Back!</h1>
        <p className="my-3 text-md text-gray-600">
          Please login to your account
        </p>
        <form
          className="flex flex-col w-2/3 mb-8 "
          noValidate
          autoComplete="off"
        >
          <TextField id="email" label="Email Address" className="mb-12" />
          {/* you can't use tailwind classes in material ui components */}
          <br />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </form>
        <p className="my-3 text-md text-gray-600">
          Don't have an account?
          <button className="focus:outline-none pl-2 text-red-600 font-semibold hover:underline ">
            Register
          </button>
        </p>
        <button className="focus:outline-none text-red-600 font-semibold hover:underline ">
          Forgot Password?
        </button>
        <button className="focus:outline-none mt-auto font-semibold w-full bg-black text-white text-sm uppercase py-4 tracking-wide border-2 border-black hover:bg-transparent hover:text-black">
          Login
        </button>
      </div>
    </Fade>
  );
}

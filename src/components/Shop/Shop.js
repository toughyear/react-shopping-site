import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Shop(props) {
  const { handleDrawer } = props;

  return (
    <Fade left duration={500}>
      <div className="fixed w-screen md:w-1/2 h-full bg-gray-300 top-0 left-0  shadow-lg">
        <Fade left cascade duration={500}>
          <div className="flex w-full h-full flex-col justify-center pl-8 md:p-16">
            <Link
              onClick={() => handleDrawer(null)}
              to="/primary-care"
              className="text-4xl font-semibold tracking-wide mb-2 hover:text-orange-700"
            >
              Primary Care
            </Link>
            <Link
              onClick={() => handleDrawer(null)}
              to="/hair"
              className="text-4xl font-semibold tracking-wide mb-2 hover:text-orange-700"
            >
              Hair
            </Link>
            <Link
              onClick={() => handleDrawer(null)}
              to="/hair"
              className="text-4xl font-semibold tracking-wide mb-2 hover:text-orange-700"
            >
              Skin
            </Link>
            <Link
              onClick={() => handleDrawer(null)}
              to="/hair"
              className="text-4xl font-semibold tracking-wide mb-2 hover:text-orange-700"
            >
              Supplements
            </Link>
          </div>
        </Fade>
      </div>
    </Fade>
  );
}

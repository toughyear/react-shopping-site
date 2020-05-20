import React from "react";

export default function Backdrop(props) {
  const { handleDrawer } = props;
  return (
    <div
      onClick={() => handleDrawer(null)}
      className="fixed  bg-opacity-75 bg-gray-200 top-0 left-0 w-full h-full"
    ></div>
  );
}

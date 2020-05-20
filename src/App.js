import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Backdrop from "./components/Backdrop/Backdrop";
import Shop from "./components/Shop/Shop";
import Learn from "./components/Learn/Learn";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import PrimaryCare from "./components/PrimaryCare/PrimaryCare";
import Hair from "./components/Hair/Hair";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  const [Drawer, setDrawer] = useState(null);

  const handleDrawer = (value) => {
    setDrawer((prevState) => {
      return value;
    });
    console.log(Drawer);
  };

  let DrawerComponent = null;
  switch (Drawer) {
    case "shop":
      DrawerComponent = <Shop handleDrawer={handleDrawer} />;
      break;
    case "learn":
      DrawerComponent = <Learn handleDrawer={handleDrawer} />;
      break;
    case "cart":
      DrawerComponent = <Cart handleDrawer={handleDrawer} />;
      break;
    case "login":
      DrawerComponent = <Login handleDrawer={handleDrawer} />;
      break;
  }

  return (
    <div>
      {Drawer && <Backdrop handleDrawer={handleDrawer} />}

      <Navbar handleDrawer={handleDrawer} Drawer={Drawer} />
      {DrawerComponent}
      <div className="mt-32">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/primary-care">
            <PrimaryCare />
          </Route>
          <Route exact path="/hair">
            <Hair />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

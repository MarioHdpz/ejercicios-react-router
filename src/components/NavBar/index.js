import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <nav>
    <Link to="/hello-world">Hello world</Link>
    <Link to="/bye-bye-world">Bye Bye world</Link>
  </nav>
);

export default NavBar;

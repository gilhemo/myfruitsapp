import React from "react";

import "./Toolbar.css";
import NavItems from "../NavItems/NavItems";

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="DesktopOnly">
      <NavItems />
    </nav>
  </header>
);

export default toolbar;

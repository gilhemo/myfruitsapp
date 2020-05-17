import React, { Component } from "react";

import Toolbar from "../../Components/Toolbar/Toolbar";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="Container">
        <Toolbar />
        <main className="Content">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;

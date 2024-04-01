import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a
                href="https://mparajuli.github.io/my-portfolio-react/"
                className="navbar-brand"
                target="_blank"
              >
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

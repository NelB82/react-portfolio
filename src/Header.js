import React from "react";
import "./Header.css";

export default function header() {
  return (
    <div className="head">
      <div className="row logoCol">
        <div className="col-md-4 d-flex logo">
          <img
            src="/images/catlogo.svg"
            alt="Logo"
            className="logoImg img-fluid"
            width="100px"
          />
          <a href="/" className="homeLogo" title="homeLogoButton">
            <h2>NB</h2>
          </a>
        </div>
        <div className="col-md-8">
          <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                title="navbarButton"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto navbarList">
                  <li className="nav-item pr-5">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item pr-5">
                    <a
                      className="nav-link"
                      title="projectLink"
                      href="/about.html"
                    >
                      Über mich
                    </a>
                  </li>
                  <li className="nav-item pr-5">
                    <a
                      className="nav-link"
                      title="projectLink"
                      href="/work.html"
                    >
                      Meine Arbeit
                    </a>
                  </li>

                  <li className="nav-item pr-5">
                    <a
                      className="nav-link"
                      title="contactLink"
                      href="/contact.html"
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="d-flex footer mb-5">
        <div className="icons footer ml-5">
          <a
            href="https://github.com/NelB82"
            target="_blank"
            rel="noreferrer"
            title="my-github"
          >
            <i className="fab fa-github m-3"></i>
          </a>
        </div>
        <div className="mb-5">
          <a
            href="mailto:nelebraun@gmx.de"
            className="footer-mail"
            titleName="footer-mail-link"
          >
            nelebraun@gmx.de
          </a>
          <br />
          (c) by Nele Braun
          <br />
          Illustrations by Nele Braun
        </div>
      </div>
    </div>
  );
}

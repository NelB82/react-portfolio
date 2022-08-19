import React from "react";
import "./Illustrations.css";

export default function Illustrations() {
  return (
    <div className="Gallery">
      <div classNeme="container IlusstrationGallery">
        <div className="row">
          <div className="col-sm-4">
            <img
              src="/images/Dove.png"
              alt="DoveIllustration"
              width="350px"
              className="pngIllustration"
            />
            <div>
              <a
                href="/work.html"
                title="projectLink"
                className="llustrationTitles"
              >
                Dove Illustration
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src="/images/Flamingo.png"
              alt="FlamingoIllustration"
              width="350px"
              className="pngIllustration"
            />
            <div>
              <a
                href="/work.html"
                title="projectLink"
                className="IllustrationTitles"
              >
                Flamingo Illustration
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <img
              src="/images/Peacock.png"
              alt="PeacockIllustration"
              width="350px"
              className="pngIllustration"
            />
            <div>
              <a
                href="/work.html"
                title="projectLink"
                className="IllustrationTitles"
              >
                Peacock Illustration
              </a>
            </div>
          </div>
        </div>
        <p className="github-project text-center mt-5">
          Dieses Projekt auf Github
          <br />
          <a
            className="btn btn-outline-secondary portfolio-btn mt-3"
            href="https://github.com/NelB82/Portfolio-Project"
            target="_blank"
            rel="noreferrer"
            title="github-repository"
          >
            Portfolio-Projekt
          </a>
        </p>
        <hr />
      </div>
    </div>
  );
}

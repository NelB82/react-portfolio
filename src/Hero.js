import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="heading mt-5 mb-3">Nele Braun</div>

      <a
        href="/contact.html"
        className="btn btn-outline-secondary"
        title="contactButton"
      >
        Kontaktieren
      </a>
    </div>
  );
}

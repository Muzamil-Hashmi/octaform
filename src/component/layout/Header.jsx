import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent  fw-bold  " id="head">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img className="w-25" src="assets/footlogo.png" alt=" "  />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
              Overview
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
              Traction 
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link  text-white" href="#">
              
Tokenomics
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
              Roadmap
              </a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">
              FAQs
              </a>
            </li>
        
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

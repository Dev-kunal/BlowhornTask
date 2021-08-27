import { useState } from "react";
import "./navbar.css";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => {
    setNavbar((val) => !val);
  };
  return (
    <div className="navbar">
      <div className="brand">
        <b className="heading">nullBrains.</b>
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <li className="inline">About</li>
            <li className="inline">Team</li>
            <li className="inline">Blog</li>
            <li className="inline">Pricing</li>
            <li className="inline">Contact</li>
            <li className="inline">Terms</li>
          </ul>
        </nav>
      </div>
      <div className="mobile-navigation">
        <div className="icon-nav" onClick={showNavbar}>
          <i class="fas fa-align-right"></i>
        </div>
        {navbar && (
          <nav className="dropdown">
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </nav>
        )}
      </div>
      <div className="actions">
        <button className="btn">SingIn</button>
        <button className="btn btn-primary">SignUp</button>
      </div>
    </div>
  );
};

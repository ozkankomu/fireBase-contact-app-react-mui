import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">FireBase / </span>
            Contact App
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ozkankomu/"
                target="_blanked"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/ozkankomu" target="_blanked">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

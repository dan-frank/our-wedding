import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <nav class="nav">
      <div class="container">
        <div class="nav__content">
          <p class="nav__logo font-serif-2">
            <a href="/" class="nav__link font-dark">
              Dan &amp; Becca
            </a>
          </p>

          <ul class="nav__items">
            <li class="nav__item font-sans-serif">
              <NavLink
                to="*"
                className={({ isActive }) =>
                  "nav__link font-dark" + (isActive ? " nav__link--active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li class="nav__item font-sans-serif">
              <NavLink
                to="gallery"
                className={({ isActive }) =>
                  "nav__link font-dark" + (isActive ? " nav__link--active" : "")
                }
              >
                Gallery
              </NavLink>
            </li>
            {/* Guest List */}
            {/* The Venue */}
            {/* The Menu*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

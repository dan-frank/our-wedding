import React from "react";
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
            {/* <li class="nav_item font-sans-serif"><a href="/" class="nav__link active font-dark">Home</a></li> */}
            <li class="nav__item font-sans-serif">
              <a href="/gallery" class="nav__link font-dark">
                Gallery
              </a>
            </li>
            {/* <li class="nav__item font-sans-serif"><a href="/" class="nav__link font-dark">Guest List</a></li> */}
            {/* <li class="nav__item font-sans-serif"><a href="/" class="nav__link font-dark">The Venue</a></li> */}
            {/* <li class="nav__item font-sans-serif"><a href="/" class="nav__link font-dark">The Menu</a></li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

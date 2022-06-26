import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav class="nav">
      <div class="container">
        <div class="nav-content">
          <p class="logo font-serif-2">
            <a href="/" class="nav-link font-dark">
              Dan &amp; Becca
            </a>
          </p>

          <ul class="nav-items">
            {/* <li class="nav-item font-sans-serif"><a href="/" class="nav-link active font-dark">Home</a></li> */}
            <li class="nav-item font-sans-serif">
              <a href="/gallery" class="nav-link font-dark">
                Gallery
              </a>
            </li>
            {/* <li class="nav-item font-sans-serif"><a href="/" class="nav-link font-dark">Guest List</a></li> */}
            {/* <li class="nav-item font-sans-serif"><a href="/" class="nav-link font-dark">The Venue</a></li> */}
            {/* <li class="nav-item font-sans-serif"><a href="/" class="nav-link font-dark">The Menu</a></li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

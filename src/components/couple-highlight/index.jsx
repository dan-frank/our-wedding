import React from "react";

import "./couple-highlight.css";

function CoupleHighlight() {
  return (
    <div class="happy-person bride">
      <div class="happy-person-initials">
        <p class="font-size-700 font-pink-300 font-serif-2 m-none">BL</p>
      </div>

      <div class="happy-person-image m-r-md m-none-mb-sm">
        <div class="image-shape rec-3-by-4">
          <img src="images/becca-small.jpg" />
        </div>
      </div>

      <div class="happy-person-name">
        <p class="font-sans-serif happy-person-title">The Bride</p>
        <h3 class="font-serif-1 font-size-600 m-y-sm">Becca Lucas</h3>
        <a href="/" class="button-whole-pink font-sans-serif">
          The Groom
        </a>
      </div>
    </div>
  );
}

export default CoupleHighlight;

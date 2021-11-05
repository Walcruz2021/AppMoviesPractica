import React from "react";
import Ab from "./Abaut.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

export const Abaut = (props) => (
  <div class="formato">
    <div>
      {/* <p class="text-center">
        <i class="fas fa-user-graduate"></i> Walter Cruz
      </p> */}

      <p>
        <FontAwesomeIcon icon={faEnvelopeOpen} size="2x"></FontAwesomeIcon>
        <a
          href="https://www.linkedin.com/in/waltercruz1988/"
          target="blank"
          class="linkedin"
        >
          Linkedin
        </a>
      </p>
      <p class="text-center">
        <FontAwesomeIcon icon={faEnvelopeOpen} size="2x"></FontAwesomeIcon>

        <a href="mailto:walcruz1988.21@gmail.com" target="blank" class="email">
          walcruz1988.21@gmail.com
        </a>
      </p>
      {/* <p class="text-center">
        <i class="fas fa-map-marker-alt"></i> Salta Capital-Argentina
      </p> */}
    </div>
  </div>
);

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://wa.me/03289462807" target={"_blank"} rel="noreferrer">
        <FaWhatsapp />
      </a>
      <a
        href="https://github.com/RafayKhan177"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rafay-khan-177568260/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}

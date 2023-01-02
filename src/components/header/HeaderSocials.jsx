import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/rafay-khan-177568260/" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="https://github.com/RafayKhan177" target={"_blank"}>
        <FaGithub />
      </a>
      <a href="https://dribbble.com/RafayKhan177" target={"_blank"}>
        <FaDribbble />
      </a>
    </div>
  );
}

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaDribbble } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="" target={"_blank"}>
        <FaGithub />
      </a>
      <a href="" target={"_blank"}>
        <FaDribbble />
      </a>
    </div>
  );
}

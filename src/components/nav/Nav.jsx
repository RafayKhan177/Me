import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookmarkHeart />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contace")}
        className={activeNav === "#contace" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

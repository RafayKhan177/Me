import "./footer.css";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function footer() {
  return (
    <footer>
        <a href="" className="footer__logo">
          RAFAY KHAN
        </a>
      <ul className="parmalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/abdulrafay.khan.18041092/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/rafayvision/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/_Rafay_Khan">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023. All rights reserved.</small>
      </div>
    </footer>
  );
}

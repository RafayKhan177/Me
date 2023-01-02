import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rafay Khan</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me"><img src="" alt="DevPic" /></div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

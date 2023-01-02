//Styles
import "./App.css";
import 'swiper/css';
import 'swiper/css/pagination';
//Components
import Testimonials from "./components/testimonials/Testimonials";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

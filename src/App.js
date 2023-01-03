//Styles
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
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
import { useEffect, useState, CSSProperties } from "react";
//Dependecies
import HashLoader from "react-spinners/HashLoader";

const override: CSSProperties = {
  display: "block",
  margin: "45vh auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <HashLoader
          color={"#4db5ff"}
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
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
      )}
    </>
  );
}

export default App;

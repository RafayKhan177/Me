//Styles
import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
//Components
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  WebPortfolio,
  MobilePortfolio,
  Services,
  Testimonials,
} from "./components/Index";
//Dependecies
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "block",
  margin: "45vh auto",
  borderColor: "red",
};

export default function App() {
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
          <WebPortfolio />
          {/* <MobilePortfolio /> */}
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

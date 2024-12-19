import { createContext, useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header";
import Countdown from "../components/countdown";
import Important from "../components/important";
import Map from "../components/map";
import Contact from "../components/contact";
import Footer from "../components/footer";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReactSwitch from "react-switch";

// Create Theme Context
export const ThemeContext = createContext(null);

// Loader Component
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  );
};

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true); // State for Loader

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Show loader while loading */}
      {loading ? (
        <Loader />
      ) : (
        <div className="" id={theme}>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>imomotimi</title>
          </Head>
          <div className="Switch">
            <ReactSwitch
              id="toggle"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </div>
          <Header theme={theme} />
          <Countdown theme={theme} />
          <Important />
          <Map theme={theme} />
          <Contact />
          <Footer />
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export default Home;

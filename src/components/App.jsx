import React, { useState, useRef, useEffect } from "react";

import { RotatingLines } from "react-loader-spinner";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Portfolios from "./Portfolios/Portfolios";
import Experience from "./Experience/Experience";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const navLinks = [
  {
    display: "Services",
    link: "services"
  },
  {
    display: "Portfolios",
    link: "portfolios"
  },
  {
    display: "Experience",
    link: "experience"
  },
  {
    display: "Blog",
    link: "blog"
  }
];

function App() {
  const [dark, setDark] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(true);

  const loaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(false);
    }, 3000);
  }, []);

  return (
    <div className={`${dark ? "dark" : ""} `}>
      <div className="dark:bg-[#1E1E1E] relative min-h-screen dark:text-white">
        <Header navLinks={navLinks} theme={{ dark, setDark }} />
        <main>
          <Hero />
          <Services />
          <Portfolios />
          <Experience />
          <Blog />
          <Testimonials />
          <Skills />
          <Contact />
        </main>
        <Footer />

        <div
          ref={loaderRef}
          className={`w-screen  items-center justify-center h-screen fixed right-0 top-0 bg-white z-50 ${
            contentLoaded ? "flex" : "hidden"
          }`}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

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

  return (
    <div className={`${dark ? "dark" : ""} `}>
      <div className="dark:bg-[#1E1E1E] min-h-screen dark:text-white">
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
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;

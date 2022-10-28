import Line from "../../assets/images/line.svg";
import heroImg from "../../assets/images/Hero Image.svg";

import { Fade, Slide } from "react-awesome-reveal";

import InstagramIcon from "../../assets/images/Instagram.svg";
import GithubIcon from "../../assets/images/Github.svg";
import TwitterIcon from "../../assets/images/Twitter.svg";
import LinkedinIcon from "../../assets/images/Linkedin.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`container mt-12 md:pt-22 dark:bg-[#1E1E1E] p-4 mx-auto flex flex-col md:flex-row-reverse justify-between items-center overflow-x-hidden gap-12`}
    >
      <section className="w-full md:w-1/2 flex items-center justify-center">
        <Fade duration={1800} triggerOnce>
          <img
            src={heroImg}
            className="mr-[4rem] sm:mr-0 max-w-md sm:max-w-md"
            alt="hero img"
          />
        </Fade>
      </section>
      <section className="p-4 md:w-1/2">
        <Slide duration={1000} triggerOnce>
          <div className="flex gap-2">
            <img src={Line} alt="line" />
            <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
              MY NAME IS
            </p>
          </div>
        </Slide>
        <Slide duration={1000} direction="up" triggerOnce>
          <h2 className="font-bold text-3xl mt-2">
            Alex <span className="text-[#7E74F1]">Smith.</span>
          </h2>
        </Slide>
        <Fade duration={2000} triggerOnce>
          <p className="mt-2">
            Creative front-end developer with more than +5 years of experience
            in enterprise companies and startups. Proficient in JavaScript,
            Angular, and React. Passionate about UI/UX
          </p>
        </Fade>
        <Slide direction="left" duration={1000} triggerOnce>
          <ul className="flex gap-4 mt-4 items-center">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.twitter.com"
              >
                <img
                  className="w-7 hover:scale-[1.1] transition-all duration-500"
                  src={TwitterIcon}
                  alt="twitter icon"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.instagram.com"
              >
                <img
                  className="w-7 hover:scale-[1.1] transition-all duration-500"
                  src={InstagramIcon}
                  alt="instagram icon"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.Github.com"
              >
                <img
                  className="w-7 hover:scale-[1.1] transition-all duration-500"
                  src={GithubIcon}
                  alt="github icon"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.linkedin.com"
              >
                <img
                  className="w-7 hover:scale-[1.1] transition-all duration-500"
                  src={LinkedinIcon}
                  alt="linkedin icon"
                />
              </a>
            </li>
          </ul>
        </Slide>
      </section>
    </section>
  );
};

export default Hero;

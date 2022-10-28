import InstagramIcon from "../../assets/images/Instagram.svg";
import GithubIcon from "../../assets/images/Github.svg";
import TwitterIcon from "../../assets/images/Twitter.svg";
import LinkedinIcon from "../../assets/images/Linkedin.svg";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col py-16">
      <ul className="flex gap-4 mt-4 items-center">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.twitter.com"
          >
            <img
              className="w-6 hover:scale-[1.1] transition-all duration-500"
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
              className="w-6 hover:scale-[1.1] transition-all duration-500"
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
              className="w-6 hover:scale-[1.1] transition-all duration-500"
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
              className="w-6 hover:scale-[1.1] transition-all duration-500"
              src={LinkedinIcon}
              alt="linkedin icon"
            />
          </a>
        </li>
      </ul>
      <p className="tracking-widest text-sm mt-2">© 2022 - Sina Shafiee</p>
    </footer>
  );
};

export default Footer;

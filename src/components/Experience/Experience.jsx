import { useState } from "react";

import { Slide } from "react-awesome-reveal";

import Line from "../../assets/images/line.svg";

import ArrowRight from "../../assets/images/arrow-right.svg";
import ArrowDown from "../../assets/images/arrow-down.svg";

const compainesData = [
  {
    companyName: "Apple",
    data: {
      title: "Front-end Developer",
      link: {
        display: "Apple .Inc",
        redirect: "https://www.apple.com"
      },
      location: "California, United States",
      time: "Feb 2021 - Present · Full-time",
      technolagies: ["React.js"],
      responseblities: [
        "Improving overall website performance for mobile users.",
        "Collaborate with back-end developers and web designers to improve usability",
        "Add voice search feature for mobile app.",
        "Developing an admin panel to manage contents, users, products and ..."
      ]
    }
  },
  {
    companyName: "MicroSoft",
    data: {
      title: "Mobile Developer",
      link: {
        display: "Microsoft .Inc",
        redirect: "https://www.micorsoft.com"
      },
      location: "California, United States",
      time: "Jan 2021 - Feb 2021 · Full-time",
      technolagies: ["swift", "go"],
      responseblities: [
        "Improving overall website performance for mobile users.",
        "Collaborate with back-end developers and web designers to improve usability",
        "Add voice search feature for mobile app."
      ]
    }
  },
  {
    companyName: "Facebook",
    data: {
      title: "Back-end Developer",
      link: {
        display: "Facebook .Inc",
        redirect: "https://www.facebook.com"
      },
      location: "Washington, United States",
      time: "Nov 2020 - Jan 2021 · Full-time",
      technolagies: ["node.js"],
      responseblities: [
        "Improving overall website performance for mobile users.",
        "Add voice search feature for mobile app.",
        "Developing an admin panel to manage contents, users, products and ..."
      ]
    }
  },
  {
    companyName: "Slack",
    data: {
      title: "Front-end Developer",
      link: {
        display: "Slack .Inc",
        redirect: "https://www.slack.com"
      },
      location: "Berlin, Germany",
      time: "Nov 2019 - Nov 2020 · Full-time",
      technolagies: ["React.js"],
      responseblities: [
        "Improving overall website performance for mobile users.",
        "Collaborate with back-end developers and web designers to improve usability"
      ]
    }
  }
];

const checkScreenwidth = () => {
  return window.innerWidth;
};

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("Apple");

  return (
    <section
      id="experience"
      className="bg-[#FBFBFB] dark:bg-[#1E1E1E] mt-12 py-12"
    >
      <section className="container py-12 mx-auto p-4 flex flex-col lg:flex-row">
        <section className="flex flex-col lg:w-1/3">
          <section>
            <section className="flex gap-2">
              <img src={Line} alt="line" />
              <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
                CAREER PATH
              </p>
            </section>
            <h4 className="font-semibold my-2 text-2xl">Work Experices</h4>
          </section>

          <section className="lg:p-4 flex lg:block overflow-x-scroll lg:overflow-hidden ">
            {compainesData.map((company, index) => {
              return (
                <button
                  key={index}
                  className={`flex gap-4 my-4 lg:my-2 items-center justify-between rounded-lg dark:text-white ${
                    company.companyName === activeCompany
                      ? "bg-white dark:bg-[#303030] "
                      : ""
                  } w-fit lg:w-[70%] py-3 pl-4 pr-8 lg:px-4 text-black text-left`}
                  onClick={() => setActiveCompany(company.companyName)}
                >
                  <span>{company.companyName}</span>
                  {company.companyName === activeCompany ? (
                    <img
                      src={checkScreenwidth() > 1024 ? ArrowRight : ArrowDown}
                      className="w-4 h-4"
                      alt="arrow"
                    />
                  ) : null}
                </button>
              );
            })}
          </section>
        </section>
        <section className="w-full lg:w-2/3">
          {compainesData
            .filter((company) => {
              return company.companyName === activeCompany;
            })
            .map(({ data }, index) => {
              return (
                <Slide direction="up" triggerOnce key={index}>
                  <h4 className="text-lg  mt-4 lg:mt-0">
                    <span>{data.title}</span>
                    <a
                      className="pl-2 border-b border-b-black"
                      href={data.link.redirect}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.link.display}
                    </a>
                  </h4>
                  <p className="text-sm mt-1 tracking-wider">{data.location}</p>
                  <p className="text-sm mt-3 tracking-wider">{data.time}</p>

                  <div className="flex gap-2">
                    {data.technolagies.map((tech, index) => {
                      return (
                        <p
                          key={index}
                          className="border tracking-wider text-sm py-1 px-4 mt-4 rounded-md "
                        >
                          {tech.toLowerCase()}
                        </p>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    {data.responseblities.map((res, index) => {
                      return (
                        <div key={index} className="flex gap-2 py-2">
                          <img src={Line} alt="line" />
                          <p>{res}</p>
                        </div>
                      );
                    })}
                  </div>
                </Slide>
              );
            })}
        </section>
      </section>
    </section>
  );
};

export default Experience;

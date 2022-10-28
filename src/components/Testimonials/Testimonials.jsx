import TestimonialCard from "../TestimonialCard/TestimonialCard";

import Line from "../../assets/images/line.svg";

import feedbackImgOne from "../../assets/images/feedback-1.png";
import feedbackImgTwo from "../../assets/images/feedback-2.png";
import feedbackImgThere from "../../assets/images/feedback-3.png";

const testmonialsData = [
  {
    img: feedbackImgOne,
    desc: "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
    name: "Amelia Miller",
    job: "Designer"
  },
  {
    img: feedbackImgTwo,
    desc: "I’m glad I decided to work with you. The project was delivered on time with all the requirements.",
    name: "James Delaney",
    job: "Developer"
  },
  {
    img: feedbackImgThere,
    desc: "The management of our projects was always faced with difficulties,but you handled well.",
    name: "Isabella Bennett",
    job: "Manager"
  }
];

const Testimonials = () => {
  return (
    <section
      id="testmonials"
      className="bg-[#f8f8f8c0] dark:bg-[#1E1E1E] mt-14 py-24"
    >
      <section className="container p-4 mx-auto">
        <div className="flex gap-2">
          <img src={Line} alt="line" />
          <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
            MY CLIENTS
          </p>
        </div>

        <h4 className="font-semibold mt-2 text-2xl">Testimoinals</h4>

        <section className="mt-12 flex flex-wrap dark:text-[#1e1e1e] max-w-6xl mx-auto gap-4 justify-center">
          {testmonialsData.map((testmonial, index) => {
            return (
              <TestimonialCard
                key={index}
                name={testmonial.name}
                job={testmonial.job}
                desc={testmonial.desc}
                img={testmonial.img}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Testimonials;

import { Slide } from "react-awesome-reveal";

import ServiceCard from "../ServiceCard/ServiceCard";

import Line from "../../assets/images/line.svg";
import Crown from "../../assets/images/crown.svg";
import Paper from "../../assets/images/papers.svg";
import Earth from "../../assets/images/globe.svg";

const serviceData = [
  {
    Icon: Crown,
    Title: "UI/UX Design",
    Text: "Turn what you have in mind of a digital product into reality. For any platform you consider."
  },
  {
    Icon: Paper,
    Title: "Application Development",
    Text: "Standard designing, building, and implementing your apps with documentation."
  },
  {
    Icon: Earth,
    Title: "Web Development",
    Text: "Create and maintain your websites and also take care of its performance and traffic capacity."
  }
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#f8f8f8c0] dark:bg-[#1E1E1E] mt-14 py-24"
    >
      <section className="container mx-auto">
        <div className="flex gap-2 justify-center  items-center">
          <img src={Line} alt="line" />
          <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
            SERVICES
          </p>
        </div>

        <h4 className="font-semibold mt-2 text-2xl text-center">
          Specialized in
        </h4>

        <section className="mt-12 flex flex-wrap dark:text-[#1e1e1e] max-w-6xl mx-auto gap-4 justify-center ">
          {serviceData.map((service, index) => {
            return (
              <Slide direction="up" fraction={0.55} triggerOnce key={index}>
                <ServiceCard
                  Icon={service.Icon}
                  Title={service.Title}
                  Text={service.Text}
                />
              </Slide>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Services;

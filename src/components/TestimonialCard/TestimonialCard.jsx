import { Slide } from "react-awesome-reveal";

const TestimonialCard = ({ img, desc, name, job }) => {
  return (
    <Slide direction="up" triggerOnce>
      <section className="bg-white mt-8 dark:bg-[#303030] dark:text-white w-[19rem] relative rounded-md">
        <img
          src={img}
          loading="lazy"
          alt="client avtar"
          className="w-20 h-20 absolute -top-10 left-[50%] translate-x-[-50%]"
        />

        <section className="pb-6 px-4 pt-14">
          <p>{desc}</p>
          <p className="mt-10 font-medium">{name}</p>
          <p className="border py-[2px] text-sm mt-2 tracking-wider px-4 rounded-md inline-block">
            {job}
          </p>
        </section>
      </section>
    </Slide>
  );
};

export default TestimonialCard;

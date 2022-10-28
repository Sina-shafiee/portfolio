import { Slide } from "react-awesome-reveal";

const blogCard = ({ img, title, date, desc, link }) => {
  return (
    <Slide triggerOnce direction="up">
      <section className="max-w-[21rem] border rounded-lg overflow-hidden dark:bg-[#303030] dark:border-none min-w-[300px] relative h-[494px]">
        <img
          src={img}
          className="w-full aspect-video object-cover"
          alt="blog post"
          loading="lazy"
        />
        <section className="p-4">
          <h2 className="mt-2 font-medium text-lg">{title}</h2>
          <p className="border bg-[#FBFBFB] dark:bg-[#1e1e1e] dark:border-none inline-block tracking-wider text-sm py-1 px-4 mt-4 rounded-md ">
            {date}
          </p>
          <p className="mt-4">{desc}</p>
          <a
            className="absolute bottom-8 left-0 right-0 text-center block"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
          >
            Continue Reading
          </a>
        </section>
      </section>
    </Slide>
  );
};

export default blogCard;

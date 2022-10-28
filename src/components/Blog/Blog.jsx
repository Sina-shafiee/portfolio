import BlogCard from "../BlogCard/BlogCard";

import Line from "../../assets/images/line.svg";

import blogPicOne from "../../assets/images/blog-1.jpg";
import blogPicTwo from "../../assets/images/blog-2.jpg";
import blogPicThree from "../../assets/images/blog-3.jpg";

const blogData = [
  {
    img: blogPicOne,
    title: "How to prototype in figma",
    date: "July 15, 2021",
    desc: "Figma is a graphic design tool that has been created to bridge the gap between designers and developers.",
    link: "https://www.someblogpost.com"
  },
  {
    img: blogPicTwo,
    title: "Being more productive with Notion.",
    date: "Aug 8, 2020",
    desc: "The notion of not having to do anything is a dream for many. But what if we could take this even further and have the machine do it all?",
    link: "https://www.someblogpost.com"
  },
  {
    img: blogPicThree,
    title: "Beginners guide to adobe illustrator",
    date: "Feb 19, 2021",
    desc: "Adobe illustrator is a computer program that is used in the creation of vector graphics. It can be used for creating illustrations and much more.",
    link: "https://www.someblogpost.com"
  }
];

const Blog = () => {
  return (
    <section className="mt-14 py-24 container mx-auto px-4" id="blog">
      <section>
        <section className="flex gap-2">
          <img src={Line} alt="line" />
          <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
            MY ARTICLES
          </p>
        </section>
        <h4 className="font-semibold my-2 text-2xl">Personal Blog</h4>
      </section>
      <section className="flex mt-12 justify-center items-center gap-4 flex-wrap">
        {blogData.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              img={blog.img}
              title={blog.title}
              desc={blog.desc}
              link={blog.link}
              date={blog.date}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Blog;

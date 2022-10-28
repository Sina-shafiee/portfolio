import Line from "../../assets/images/line.svg";

const Skills = () => {
  return (
    <section className="mt-14 py-24">
      <section className="container px-4 mx-auto">
        <div className="flex gap-2">
          <img src={Line} alt="line" />
          <p className="font-['Inter'] tracking-[7.5px] font-medium text-[12px] dark:text-slate-200 text-[#656D72]">
            LEARNING PATH
          </p>
        </div>

        <h4 className="font-semibold mt-2 text-2xl">Education & Skills</h4>

        <section className="flex flex-col md:flex-row mt-12 lg:gap-x-28 lg:items-center">
          <section className="sm:w-min sm:whitespace-nowrap">
            <ol className="relative border-l border-[#F5F3FE] dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#F5F3FE] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kingston university
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Master's degree - Software Engineering
                </p>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2019 - 2021
                </time>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#F5F3FE] rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kingston university
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Bachelor's degree - Computer Engineering
                </p>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2015 - 2019
                </time>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-[#F5F3FE] rounded-full mt-1.5 -left-1.5 dark:bg-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kingston university
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Westminster School
                </p>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2013 - 2015
                </time>
              </li>
            </ol>
          </section>
          <section className="self-start sm:px-8 lg:px-14">
            <p>
              For 5+ years, I have been continuously learning in the field of
              front-end and experimenting with new technologies and frameworks,
              and here you can see a summary of my skills.
            </p>

            <section className="mt-8 lg:mt-24 lg:w-[90%]">
              <section>
                <p>React</p>
                <div className="w-full mt-2 bg-[#F5F3FE] rounded-full h-3 dark:bg-gray-700">
                  <div
                    className="bg-[#7E74F1] h-3 rounded-full"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </section>
              <section className="mt-6">
                <p>Angular</p>
                <div className="w-full mt-2 bg-[#F5F3FE] rounded-full h-3 dark:bg-gray-700">
                  <div
                    className="bg-[#7E74F1] h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </section>
              <section className="mt-6">
                <p>Javascript</p>
                <div className="w-full mt-2 bg-[#F5F3FE] rounded-full h-3 dark:bg-gray-700">
                  <div
                    className="bg-[#7E74F1] h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;

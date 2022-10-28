import "./Contact.css";

import PinIcon from "../../assets/images/pin.svg";
import PhoneIcon from "../../assets/images/phone.svg";
import MailIcon from "../../assets/images/mail.svg";

const Contact = () => {
  return (
    <section
      id="testmonials"
      className="bg-[#f8f8f8c0] dark:bg-[#1E1E1E] mt-14 py-24"
    >
      <section className="container p-4 mx-auto flex flex-col lg:flex-row-reverse gap-14 items-center">
        <form className="flex flex-col w-full lg:w-1/2">
          <input
            className="p-4 rounded-md dark:bg-[#303030]"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-3 mt-4 rounded-md dark:bg-[#303030]"
            type="email"
            placeholder="Email"
          />

          <textarea
            className="mt-4 rounded-md p-3 h-44 dark:bg-[#303030]"
            placeholder="Message"
            style={{
              resize: "none"
            }}
          ></textarea>
          <button
            className="mt-8 bg-[#7E74F1] p-2 rounded-md text-white"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <section className="w-full lg:w-1/2">
          <section className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#F5F3FE] dark:bg-[#303030] flex justify-center items-center">
              <img src={PinIcon} alt="pin icon" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Address</h4>
              <p className="font-sm">3424 Layman Avenue, Fayetteville, NC</p>
            </div>
          </section>
          <section className="flex mt-12 items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#F5F3FE] dark:bg-[#303030] flex justify-center items-center">
              <img src={PhoneIcon} alt="pin icon" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Phone</h4>
              <a href="tel:(501) 414-1541" className="font-sm">
                (501) 414-1541
              </a>
            </div>
          </section>
          <section className="flex mt-12 items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#F5F3FE] dark:bg-[#303030] flex justify-center items-center">
              <img src={MailIcon} alt="pin icon" className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">E-Mail</h4>
              <a href="mailto:devchapter@gmail.com" className="font-sm">
                devchapter@gmail.com
              </a>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;

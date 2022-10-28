import "./ServiceCard.css";

const ServiceCard = ({ Icon, Title, Text }) => {
  return (
    <section className="card w-[19rem] h-[19rem] mx-auto rounded-md bg-white dark:bg-[#303030] dark:text-[#fefefe] flex flex-col items-center pt-12 pb-8">
      <div className="icon-container p-2 bg-[#F5F3FE] rounded-2xl hover:bg-[#f3f1ff] trasnition-[background-color] duration-500">
        <img className="icon w-12 h-12" src={Icon} alt="icon" />
      </div>

      <h4 className="mt-4 text-lg font-medium">{Title}</h4>
      <p className="mt-4 w-[80%]">{Text}</p>
    </section>
  );
};

export default ServiceCard;

import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Market Research & Competitive Analysis",
    description:
      "I conduct in-depth primary and secondary research, analyze industry trends, and deliver actionable market insights that help businesses stay ahead of competition.",
  },
  {
    id: 2,
    title: "Data Analytics & Dashboard Development",
    description:
      "I design and build interactive dashboards in Power BI, Tableau, and Excel, transforming raw data into clear insights and KPIs for informed decision-making.",
  },
  {
    id: 3,
    title: "Business Strategy, Insights & Storytelling",
    description:
      "I translate complex datasets into strategic recommendations, create compelling visual reports, and communicate findings in a way that drives business growth.",
  },
  {
    id: 4,
    title: "Survey Design & Analysis",
    description:
      "I design and manage large-scale surveys using tools like Zoho and SPSS, analyzing customer and market behavior to uncover actionable opportunities.",
  },
];


const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in uncovering market opportunities, analyzing data, and translating insights into actionable business strategies.

          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach blends analytical rigor with clear storytelling, enabling organizations to make confident, data-driven decisions.

          </p>
        </div>
        <a
          href="mailto:example@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;

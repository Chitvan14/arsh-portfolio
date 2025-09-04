import person from "../../assets/images/person1.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "5",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            {/* Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Arshpreet Kaur
            </span> */}
            Uncovering Answers that matter
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            {/* I'm a <span className="bg-highlight">Business</span>,
            <span className="bg-highlight">Research</span>, and
            <span className="bg-highlight">Marketing Analytics</span> enthusiast, driven by curiosity and a passion for uncovering insights that matter.
            From EV market research and
            competitor studies to
            consumer trend analysis and marketing dashboards, I transform raw data into strategies that drive engagement and growth.
            With tools like <span className="bg-highlight">Power BI</span>,
            <span className="bg-highlight">Tableau</span>,
            <span className="bg-highlight">Excel</span>, and
            <span className="bg-highlight">SPSS</span>, I craft insights into actionable narratives that fuel measurable impact.
           */}
            Greetings! I’m Arshpreet Kaur, a curious and detail-oriented learner passionate about exploring the world of business analytics and research. I enjoy working with data—whether it’s building dashboards in Power BI and Excel, conducting competitor analysis, or uncovering insights that drive better decision-making. My journey so far has taken me across diverse sectors like EV, education, and robotics, where I’ve gained hands-on experience in research, survey validation, and data storytelling. With a patient mindset, strong communication skills, and a drive for continuous learning, I aim to grow into roles where I can combine analytical thinking with creativity to make an impact.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="/files/my-cv.pdf"
              download="Arshpreet-Kaur-CV.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>

          </p>
        </div>
        {/* <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;

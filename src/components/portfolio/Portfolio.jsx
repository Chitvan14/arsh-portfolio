import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Business Analytics",
    title: "Market Research Report",
    description:
      "Conducted comprehensive competitor and consumer research, delivering insights that shaped product positioning and strategy.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "Data Visualization",
    title: "Sales Performance Dashboard",
    description:
      "Built an interactive Power BI dashboard to track KPIs, analyze sales performance, and enable data-driven decision making.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "Survey Analysis",
    title: "Customer Behavior Insights",
    description:
      "Designed and analyzed surveys using Zoho & SPSS, uncovering customer preferences and market trends to guide business growth.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "Business Strategy",
    title: "Data-Driven Recommendations",
    description:
      "Transformed raw datasets into actionable strategies with clear visual storytelling, improving stakeholder understanding and alignment.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "Dashboard Development",
    title: "Executive KPI Dashboard",
    description:
      "Developed a Tableau dashboard consolidating financial, sales, and operational metrics for leadership reporting.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "Analytics Project",
    title: "Trend & Forecast Analysis",
    description:
      "Performed advanced data analysis to identify industry trends, forecast demand, and support long-term strategic planning.",
    link: "#!",
  },
];


const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;

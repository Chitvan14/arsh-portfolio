import Marquee from "react-fast-marquee";
import excel from "../../assets/tech/excel.jpeg";
import jupyter from "../../assets/tech/jupyter.jpeg";
import mysql from "../../assets/tech/mysql.jpeg";
import postgresql from "../../assets/tech/postgresql.jpeg";
import powerbi from "../../assets/tech/powerbi.jpeg";
import powerpoint from "../../assets/tech/powerpoint.jpeg";
import python from "../../assets/tech/python.jpeg";
import tableau from "../../assets/tech/tableu.jpeg";
import word from "../../assets/tech/word.jpeg";
import teams from "../../assets/tech/teams.jpeg";
import googleanalyticsword from "../../assets/tech/googleanalytics.jpeg";
import ibm from "../../assets/tech/ibm.jpeg";
import athena from "../../assets/tech/athena.jpeg";

// Array of logos
const brandLogos = [
  { src: excel, alt: "Excel" },
  { src: jupyter, alt: "Jupyter Notebook" },
  { src: mysql, alt: "MySQL" },
  { src: postgresql, alt: "PostgreSQL" },
  { src: powerbi, alt: "Power BI" },
  { src: powerpoint, alt: "PowerPoint" },
  { src: python, alt: "Python" },
  { src: tableau, alt: "Tableau" },
  { src: word, alt: "Microsoft Word" },
  { src: teams, alt: "Teams" },
  { src: googleanalyticsword, alt: "Google Analytics" },
  { src: ibm, alt: "IBM" },
  { src: athena, alt: "Athena" },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title text-white mb-6">Tech Stack</p>
      </div>

      <Marquee pauseOnHover={true} speed={100}>
        <div className="flex items-center pt-4 md:pt-10">
          {brandLogos.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 sm:h-10 md:h-20 object-contain "
              />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;

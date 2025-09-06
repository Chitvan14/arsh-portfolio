import { useState } from "react";
import { faFileExcel, faFilePdf, faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import project1 from "../../assets/images/portfolio-images/project1.jpeg"
import project2 from "../../assets/images/portfolio-images/project2.jpeg"
import project2_2 from "../../assets/images/portfolio-images/project2_2.jpeg"
import project3 from "../../assets/images/portfolio-images/project3.jpeg"
import project4 from "../../assets/images/portfolio-images/project4.jpeg"
import project1PDF from "../../assets/images/portfolio-images/work/project1-certificate.pdf"
import project1Xlsx from "../../assets/images/portfolio-images/work/project1-xlsx.xlsx"
const projectData = [
  {
    id: 1,
    image: project2_2,
    category: "Data Analysis",
    title: "Data Analysis – Deloitte Job Simulation",
    description:
      "Completed a Deloitte job simulation on Forage, focusing on data analysis, forensic technology, and equality scoring using Tableau and Excel.",
    fullDescription: [
      {
        heading: "Overview",
        content:
          "Completed a Deloitte job simulation focused on data analysis, forensic technology, and equality scoring. The project involved both data visualization (Tableau) and data classification (Excel) to solve real-world business questions.",
      },
      {
        heading: "Objective",
        content:
          "To analyze machine breakdown patterns across factories, identify key problem areas, and classify workplace equality scores into actionable categories for business insights.",
      },
      {
        heading: "Key Questions Answered",
        content: `- In which location did machines break the most?
- What are the machines that broke most often in that location?`,
      },
      {
        heading: "Approach & Tasks",
        content: `1. Dashboard Creation (Tableau)
   - Built a visual dashboard displaying:
     - Downtime per Factory → Identified *Daikibo-Factory-Seiko* and *Daikibo-Shenzhen* as top breakdown locations.
     - Downtime per Machine → Highlighted the *Laser Cutter* as the most failure-prone machine.
   - Enabled easy comparison of factories and machine types for management decisions.

2. Data Classification (Excel)
   - Added a 4th column: *Equality Class* to categorize Equality Scores into:
     - Fair (±10)
     - Unfair (< -10 or > 10)
     - Highly Discriminative (< -20 or > 20)
   - Automated classification using Excel formulas to handle large datasets efficiently.

3. Business Interpretation
   - Delivered insights on breakdown hotspots and machine failures.
   - Highlighted fairness trends across factories and job roles, supporting forensic-style analysis.`,
      },
      {
        heading: "Challenges Faced",
        content:
          "Designing a dashboard that directly addressed stakeholder questions without overcomplication. Ensuring classification thresholds in Excel were logical and error-free.",
      },
      {
        heading: "Outcomes",
        content:
          "Created a professional Tableau dashboard answering key machine breakdown questions. Developed an Excel-based classification model for workplace equality. Gained hands-on experience in data visualization and classification logic.",
      },
      {
        heading: "Key Skills Gained",
        content: `- Tableau Dashboard Design & Visualization
- Excel Data Classification & Automation
- Storytelling with Data`,
      },
    ],
    level: "Intermediate",
    duration: "1–2 hours",
    tools: "Tableau, Excel",
    link: [{ href: project2_2, download: "Deloitte-Certificate.jpeg" }, { href: project2, download: "Deloitte-Report.jpeg" },

    ],
  },
  {
    id: 2,
    image: project1,
    category: "Business Analytics",
    title: "Excel Skills for Business – Job Simulation (Goldman Sachs)",
    description:
      "Completed a virtual job simulation replicating analyst tasks at Goldman Sachs, focusing on financial modeling, forecasting, and Excel skills.",
    fullDescription: [
      {
        heading: "Overview",
        content:
          "This project was completed as part of a virtual job simulation on the Forage platform. It was designed to replicate real-world tasks performed by analysts at Goldman Sachs, focusing on financial modeling, forecasting, and Excel skills.",
      },
      {
        heading: "Objective",
        content:
          "To build an end-to-end financial model by forecasting operating assumptions, translating them into Profit & Loss (P&L) and Cash Flow forecasts, and creating professional outputs to support business decision-making.",
      },
      {
        heading: "Tasks Completed",
        content: `1. Basic Excel Skills – Set up foundational formulas, references, and formatting for structured modeling.
2. Forecasting Operating Assumptions – Organized key assumptions such as sales growth, costs, and margins into a dynamic, editable sheet.
3. Translating Assumptions into P&L – Built a Profit & Loss forecast using assumptions to calculate revenues, expenses, and net income.
4. Forecasting Cash Flows – Extended the model into a Cash Flow Forecast, linking inflows and outflows to reflect business liquidity.
5. Creating Outputs in Excel – Summarized key insights in a clear, professional output sheet for decision-makers.`,
      },
      {
        heading: "Challenges Faced",
        content:
          "Structuring raw assumptions into a well-organized and reference-ready sheet. Ensuring formulas and references were dynamic and error-free across multiple sheets. Avoiding circular references and maintaining consistency across P&L and Cash Flow forecasts.",
      },
      {
        heading: "Outcomes",
        content:
          "Developed a complete financial model including P&L and Cash Flow forecasts. Produced professional outputs that summarized results for stakeholders. Gained hands-on experience in financial forecasting, Excel modeling, and business analysis, simulating real-world analyst work.",
      },
      {
        heading: "Key Skills Gained",
        content: `- Financial Modeling & Forecasting
- Excel (functions, formulas, referencing, dynamic modeling)
- Cash Flow & P&L Analysis
- Data Structuring & Assumption Building
- Professional Reporting & Presentation`,
      },
    ],
    level: "Intermediate",
    duration: "3–4 hours",
    tools: "Microsoft Excel",
    link: [
      { href: project1PDF, download: "Goldman-Sach-Certificate.pdf" },
      { href: project1Xlsx, download: "Goldman-Sach-Report.xlsx" },
      { href: project1, download: "Goldman-Sach-Certificate.jpeg" },
    ]
  },
  {
    id: 3,
    image: project3,
    category: "Data Visualization",
    title: "Electric Vehicle (EV) Data Analysis",
    description:
      "Analyzed and visualized U.S. EV adoption trends using Tableau, covering growth, distribution, manufacturers, and eligibility insights with professional dashboards.",
    fullDescription: [
      {
        heading: "Overview",
        content:
          "This project focuses on analyzing and visualizing electric vehicle adoption trends in the U.S. by leveraging Tableau for data exploration and storytelling. The goal was to address key questions around EV distribution, model adoption, and eligibility, while transforming raw data into actionable insights with professional dashboards.",
      },
      {
        heading: "Problems Addressed & Solutions",
        content: `- Problem: What is the average electric range of EVs?  
  Solution: Calculated and visualized the average EV range (67.83 miles) to provide a benchmark for performance comparison.  

- Problem: What is the total number of EVs, and how are they distributed between BEVs and PHEVs?  
  Solution: Created KPI indicators showing:  
   - Total EVs: 1,50,413  
   - BEVs: 1,16,745 (77.6%)  
   - PHEVs: 33,668 (22.4%)  

- Problem: How has EV adoption grown by year?  
  Solution: Designed a line chart (Vehicles by Model Year) showing growth from 2011 to 2024, highlighting significant surges post-2017.  

- Problem: Which states have the highest EV adoption?  
  Solution: Built a geographical heatmap representing Total Vehicles by State, with California leading EV adoption.  

- Problem: Which manufacturers dominate the EV market?  
  Solution: Ranked Top 10 EV Makes, where Tesla leads with 52.70% market share, followed by Nissan and Chevrolet.  

- Problem: What proportion of EVs are Clean Alternative Fuel Vehicle (CAFV) eligible?  
  Solution: Created a donut chart showing CAFV distribution:  
   - CAFV Eligible: 41.81%  
   - Not Eligible: 11.85%  
   - Unknown: 46.34%  

- Problem: Which models have the highest adoption?  
  Solution: Displayed Top EV Models, with Tesla Model Y and Model 3 accounting for nearly 37% of total EVs combined.`,
      },
      {
        heading: "Challenges Faced",
        content:
          "Performing accurate data transformations in Tableau for KPIs and percentages. Ensuring dashboard readability while incorporating multiple visual elements. Handling diverse metrics (range, count, eligibility, geography, share) in one consolidated dashboard.",
      },
      {
        heading: "Outcomes",
        content:
          "Delivered a comprehensive Tableau dashboard covering EV adoption from multiple perspectives. Highlighted actionable insights on growth trends, market leaders, and eligibility status. Demonstrated ability to apply formulas, calculations, and filters in Tableau for professional storytelling.",
      },
      {
        heading: "Key Skills Gained",
        content: `- Tableau Dashboard Design & KPI Calculation
- Data Storytelling with Visuals
- Trend Analysis & Market Share Breakdown
- Geographic Mapping in Tableau
- Industry Insight: EV Market`,
      },
    ],
    level: "Intermediate",
    duration: "2–3 hours",
    tools: "Tableau",
    link: [{ href: project3, download: "EV-Report.jpeg" },
    ]
  },
  {
    id: 4,
    image: project4,
    category: "Business Intelligence",
    title: "Customer Churn Analysis (Banking Sector)",
    description:
      "Developed an interactive Power BI dashboard analyzing churn patterns in the banking sector, uncovering key drivers like demographics, credit scores, and balances.",
    fullDescription: [
      {
        heading: "Overview",
        content:
          "This project focuses on analyzing bank customer churn data to identify key factors driving attrition and to provide insights for retention strategies. Using Power BI, I transformed raw customer data into an interactive dashboard that highlights churn patterns across demographics, account balances, products, and credit scores.",
      },
      {
        heading: "Problems Addressed & Solutions",
        content: `- Problem: What is the overall churn rate and number of customers lost?  
  Solution: Created KPI cards showing:  
   - Total Customers: 10,000  
   - Customers Lost (Churned): 2,037  
   - Churn Rate: 20.4%  

- Problem: Does customer activity status impact churn?  
  Solution: Built a donut chart showing nearly equal split:  
   - Active: 48.49%  
   - Inactive: 51.51%  

- Problem: How do demographics (gender, country, age) affect churn?  
  Solution:  
   - Gender distribution: Males (45.43%) vs. Females (54.57%).  
   - Country breakdown: Spain, France, and Germany with Spain having the highest customer share.  
   - Age Group chart: Higher churn seen in 41–60 age bracket.  

- Problem: Does credit score influence churn?  
  Solution: Visualized credit score ranges vs churn rate. Customers with scores below 500 had the highest churn probability.  

- Problem: Does account balance or product usage affect churn?  
  Solution:  
   - Customers with low or no balance showed higher churn rates.  
   - Product distribution chart revealed differences in loyalty across product lines.`,
      },
      {
        heading: "Challenges Faced",
        content:
          "Designing an intuitive layout to display multiple churn drivers without overwhelming the user. Balancing between customer counts and churn rates for clear insights. Cleaning and grouping data (age bands, credit score ranges, balance ranges) for effective visualization.",
      },
      {
        heading: "Outcomes",
        content:
          "Delivered a comprehensive churn analysis dashboard that helps banks identify high-risk customer segments. Showcased the power of interactive filtering to drill down into specific groups. Demonstrated strong skills in data modeling, DAX measures, and Power BI visualization design.",
      },
      {
        heading: "Key Skills Gained",
        content: `- Customer Retention Analysis
- KPI Dashboard Building in Power BI
- DAX for Calculations (Churn Rate, Segments)
- Data Cleaning & Grouping for BI Models
- Business Insights for Financial Sector`,
      },
    ],
    level: "Intermediate",
    duration: "2–3 hours",
    tools: "Power BI",
    link: [{ href: project4, download: "Churn-Analysis.jpeg" },]
  },
];

const Projects = ({ data, onReadMore }) => {
  const shortDescription =
    data.description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-gray-500">{data.category}</p>
        <h3 className="text-lg font-semibold mt-2">{data.title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-1">
          {shortDescription}
        </p>
        <button
          onClick={onReadMore}
          className="mt-4 text-primary font-medium hover:underline"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  // const getFileIcon = (filename) => {
  //   if (filename?.toLowerCase().endsWith(".xlsx") || filename?.toLowerCase().endsWith(".xls")) {
  //     return faFileExcel;
  //   }
  //   if (filename?.toLowerCase().endsWith(".pdf")) {
  //     return faFilePdf;
  //   }
  //   return null;
  // };
  const getFileIcon = (href) => {
    if (href.endsWith(".pdf")) return faFilePdf;
    if (href.endsWith(".xlsx") || href.endsWith(".xls")) return faFileExcel;
    if (href.endsWith(".jpeg")) return faImage;
    return faDownload;
  };
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

      {/* Project Cards */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects
              data={data}
              key={index}
              onReadMore={() => handleReadMore(data)}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>

            {/* Project Details */}
            <h2 className="text-2xl font-semibold mb-4">
              Project: {selectedProject.title}
            </h2>
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p><strong>Category:</strong> {selectedProject.category}</p>
              <p><strong>Level:</strong> {selectedProject.level}</p>
              <p><strong>Duration:</strong> {selectedProject.duration}</p>
              <p><strong>Tools Used:</strong> {selectedProject.tools}</p>

              {/* Looping over fullDescription */}
              {selectedProject.fullDescription.map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold mt-4">{section.heading}</h3>
                  <p className="whitespace-pre-line mt-1">{section.content}</p>
                </div>
              ))}

              {/* Download */}
              {/* {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-primary text-white rounded-lg hover:bg-primary-dark"
                >
                  <FontAwesomeIcon icon={getFileIcon(selectedProject.link)} />
                  Download File
                </a>
              )} */}
              <h3 className="text-lg font-semibold mt-4">Download</h3>

              {
                selectedProject.link &&
                selectedProject.link.map((file, index) => (
                  <a
                    key={index}
                    href={file.href}
                    download={file.download}
                    className="inline-flex items-center mr-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <FontAwesomeIcon icon={getFileIcon(file.href)} />
                    {/* <p>Download</p> */}
                    {/* {file.download ? `Download ${file.download}` : "Download File"} */}
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;

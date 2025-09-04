import person from "../../assets/images/person1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import eyLogo from "../../assets/ey.jpeg";
import kenResearchLogo from "../../assets/ken-research.jpeg";
import summer from "../../assets/summer.pdf"
import winter from "../../assets/winter.pdf"

const profileData = [
  {
    id: 1,
    title: "Business Analyst Intern",
    timeline: "June 2025 - August 2025",
    img: eyLogo,
    href: {summer},
    hrefName: "Business-Aanalyst-Intern-EY.pdf",
    location: "Gurugram, Haryana"
  },
  {
    id: 2,
    title: "Project Intern",
    timeline: "February 2025 - May 2025",
    img: kenResearchLogo,
    href: {winter},
    hrefName: "Project-Intern-Ken-Research.pdf",
    location: "Gurugram, Haryana"
  }
];
const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >

      <div className="flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="section-title text-3xl sm:text-4xl font-semibold mb-2">
            My Experience
          </h2>
          {/* <p className="text-gray-600 text-sm sm:text-base">
            A quick look at my professional journey
          </p> */}
        </div>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 justify-items-center">
            {profileData.map((m, i) => (
              <div
                key={i}
                className="flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden w-80"
              >
                {/* Image Wrapper */}
                <div className="flex justify-center items-center bg-gray-50 h-56">
                  <img
                    src={m.img}
                    alt={m.title + ' ' + i}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 text-center">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{m.timeline}</p>
                  <p className="text-gray-500 text-sm mb-4">{m.location}</p>

                  {/* Download Button */}
                  <div className="mt-auto">
                    <a
                      className="btn btn-primary px-5 py-2 text-sm rounded-lg inline-flex items-center gap-2 w-full justify-center"
                      href={m.href}
                      download={m.hrefName}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      Download Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>

    </div>
  );
};

export default Profile;

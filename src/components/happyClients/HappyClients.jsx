import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10";

const brandLogos = [
  <>
    {/* Power BI */}
    <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
      <path fill="#B8BCC2" d="M1.5 22.5v-21h21v21h-21zm12.88-4.12v-2.25h-3.76v2.25h3.76zm0-4.12v-2.25h-3.76v2.25h3.76zm0-4.13v-2.25h-3.76v2.25h3.76zm5.63 8.25v-10.5h-2.25v10.5h2.25zm-11.26 0v-14.63h-2.25v14.63h2.25z" />
    </svg>

  </>,
  <>
    {/* Tableau */}
    <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
      <path fill="#B8BCC2" d="M12 0v3h-3v3h3v3h3V6h3V3h-3V0h-3zm-6.75 6.75V9H3v1.5h2.25V12h1.5v-1.5H9V9H6.75V6.75h-1.5zm13.5 0V9H21v1.5h-2.25V12h-1.5v-1.5H15V9h2.25V6.75h1.5zM12 12v3h-3v3h3v3h3v-3h3v-3h-3v-3h-3z" />
    </svg>

  </>,
  <>
    {/* Python */}
    <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
      <path fill="#B8BCC2" d="M12 0c-5.3 0-9.6 4.3-9.6 9.6h5.4c0-2.4 1.8-4.2 4.2-4.2h4.8c2.4 0 4.2 1.8 4.2 4.2v4.8c0 2.4-1.8 4.2-4.2 4.2H12v-3.6h3.6V9.6H12v3.6H8.4V9.6C8.4 4.3 12 0 12 0zM7.8 18c0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8h-5.8v-3.6H7.8V18z" />
    </svg>

  </>,
  <>
    {/* Excel (Microsoft) */}
    <svg className={`${commonSVGClass}`} viewBox="0 0 24 24">
      <path fill="#B8BCC2" d="M1.5 3v18h21V3h-21zm7.5 3h3v3h-3V6zm0 4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3zm-4.5-9h3v3h-3V6zm0 4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3zM18 18h-4.5v-12H18v12z" />
    </svg>

  </>,
  <>
    {/* PowerPoint */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
      <path fill="#d24726" d="M24 4a20 20 0 1 0 20 20H24V4z" />
      <path fill="#fff" d="M26 14h8v4h-8zm0 8h8v4h-8zm0 8h8v4h-8z" />
    </svg>

  </>,
  <>
    {/* SQL */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
      <ellipse cx="24" cy="12" rx="16" ry="6" fill="#0277BD" />
      <path fill="#0277BD" d="M8 12v12c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
      <text x="12" y="32" font-size="10" fill="white" font-family="Arial">SQL</text>
    </svg>

  </>,
  <>
    {/* Google Analytics */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
      <circle cx="12" cy="36" r="4" fill="#f9ab00" />
      <rect x="20" y="24" width="8" height="16" rx="2" fill="#e37400" />
      <rect x="34" y="12" width="8" height="28" rx="2" fill="#d93025" />
    </svg>

  </>,
  <>
    {/* IBM SPSS */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
      <rect width="48" height="48" rx="8" fill="#052f5f" />
      <text x="10" y="28" font-size="12" fill="white" font-family="Arial Black">SPSS</text>
    </svg>

  </>
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Tech Stack
</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
         Sometext Sometext Sometext Sometext Sometext Sometext Sometext Sometext Sometext Sometext Sometext Sometext  
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;

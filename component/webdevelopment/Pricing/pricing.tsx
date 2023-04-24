import Styles from "../../../styles/pricing.module.css";
import dynamic from "next/dynamic";
const DynamicPricingmain = dynamic(() => import("./pricingmain"));

const pricing = () => {
  // web development
  var webService = [
    {
      title: "Travel & Trek",
    },
    {
      title: "Education Consultancy ",
    },
    {
      title: "Sahakari",
    },
    {
      title: "E-commerce",
    },
    {
      title: "Real Estate",
    },
    {
      title: "News Portal",
    },
    {
      title: "Job Portal ",
    },
    {
      title: "Hotel Website",
    },
    {
      title: "Business Website",
    },
    {
      title: "School/College Website",
    },
  ];
  // digital marketing
  var digitalService = [
    {
      title: "$45 Free Ad Credit",
    },
    {
      title: "Up to 8 SM Unique Graphics",
    },
    {
      title: "Free Holiday Graphics",
    },
    {
      title: "Social Media Marketing",
    },
    {
      title: "Display Marketing",
    },
    {
      title: "Influencer Marketing",
    },
    {
      title: "TikTok Image Video Creation",
    },
    {
      title: "Google AdWords ",
    },
    {
      title: "Cover Photo for social media",
    },
    {
      title: "Free Logo for social media",
    },
  ];
  //seo
  var seoService = [
    {
      title: "SEO Standard Setup",
    },
    {
      title: "Website Speed Optimization",
    },
    {
      title: "2 Self Website Blog Posting ",
    },
    {
      title: "2 Blogandarticle.com Blog Posting",
    },
    {
      title: "2 Medium.com Blog Posting",
    },
    {
      title: "2 Blogspot.com Blog Posting",
    },
    {
      title: "Google/Apple/Bing Business Setup",
    },
    {
      title: "Website Code Optimization",
    },
    {
      title: "Google Search Console Setup",
    },
    {
      title: "Google Maps Integration",
    },
  ];
  // app development price
  var appService = [
    {
      title: "E-commerce App",
    },
    {
      title: "Food Delivery App",
    },
    {
      title: "Real Estate App",
    },
    {
      title: "Jobportal App",
    },
    {
      title: "Hotel App ",
    },
    {
      title: "News Portal App",
    },
    {
      title: "Travel & Trek App",
    },
    {
      title: "Business App",
    },
    {
      title: "School/College App",
    },
    {
      title: "Education Consultancy App",
    },
  ];
  // Cloud Service
  var cloudService = [
    {
      title: "Domain Registration",
    },
    {
      title: "Web Hosting",
    },
    {
      title: "VPS Solution",
    },
    {
      title: "Dedicated Server",
    },
    {
      title: "SMTP Solution",
    },
    {
      title: "Gsuite Setup",
    },
    {
      title: "SMS Solution",
    },
    {
      title: "Large Database Hosting",
    },
    {
      title: "Serverless Solution",
    },
    {
      title: "CDN Solution",
    },
  ];
  //Attentdance
  var attendanceSystem = [
    {
      title: "QR Attendance System",
    },
    {
      title: "Payroll",
    },
    {
      title: "Upto 25 Employee",
    },
    {
      title: "Admin Portal",
    },
    {
      title: "Android and IOS App",
    },
    {
      title: "Cloud System",
    },
    {
      title: "Shift Management",
    },
    {
      title: "Holiday Management",
    },
    {
      title: "IP and Location Verification",
    },
    {
      title: "Leave and Absent Management",
    },
  ];

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,1,0"
        />
      </head>
      <div className={Styles.section_padding}>
        <div className={`${Styles.title_pricing} flex flex-col`}>
         <span className="block">Build Your Digital </span> <span className="span_heading block"> World With US</span> 
        </div>
        <div className={Styles.pricing_content}>
          {/* Cloud development */}
          <div className={Styles.padding_cloud}>
            <div className={Styles.height_pricing}>
              <DynamicPricingmain
                service={cloudService}
                price="1,999"
                pricingtime="/ Month"
                title="Cloud Solutions"
              />
            </div>
          </div>

          {/* digital marketing */}
          <div className={Styles.padding_digital}>
            <DynamicPricingmain
              service={digitalService}
              price="24,999"
              pricingtime="/ Month"
              title="Digital Marketing"
            />
          </div>
          {/* seo */}
          <div className={Styles.padding_seo}>
            <div className={Styles.height_pricing}>
              <DynamicPricingmain
                service={seoService}
                price="24,999"
                pricingtime="/ Month"
                title="SEO"
              />
            </div>
          </div>
          {/* Web Development */}
          <div className={Styles.padding_web}>
            <DynamicPricingmain
              service={webService}
              price="99,999"
              pricingtime="/ Project"
              title="Website"
            />
          </div>
          {/* app development */}
          <div className={Styles.padding_app}>
            <div className={Styles.height_pricing}>
              <DynamicPricingmain
                service={appService}
                price="1,99,999"
                pricingtime="/ Project"
                title="Mobile App"
              />
            </div>
          </div>
          {/*Attendance system */}
          <div className={Styles.padding_custom}>
            <div className={Styles.height_pricing}>
              <DynamicPricingmain
                service={attendanceSystem}
                price="24,999 "
                pricingtime="/ Year"
                title="Attendance system"
              />
            </div>
          </div>
        </div>
      </div>
            <p className="text-white text-center py-10">Note: For additional custom work or services we charge NPR 3000 or $20 per hour</p>

    </div>
  );
};

export default pricing;

import React from "react";
import Styles from "../../styles/develop.module.css";
import Image from "next/image";
import Feature from "../../public/Images/feature.png";
import { GiExtraTime } from "react-icons/gi";
import Head from "next/head";
import Ecomm from "../../public/Images/website.png";
import Wcomm from "../../public/Images/whatweb.png";

const Webdev = () => {
  return (
    <div className={Styles.main_develop}>
      <Head>
        <title>Web Development</title>
      </Head>
      <div className={Styles.box_product}>
        <svg
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          width="100%"
          id="blobSvg"
        >
          <g transform="translate(167.8234100341797, -3.1178512573242188)">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255, 95, 109)" }}
                ></stop>
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255, 195, 113)" }}
                ></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="10s"
                ease-in
                repeatCount="indefinite"
                values="
                M371.5,324Q336,398,237.5,420.5Q139,443,95,346.5Q51,250,100,162.5Q149,75,246,82Q343,89,375,169.5Q407,250,371.5,324Z;
                M423.5,343.5Q358,437,257.5,424Q157,411,127,330.5Q97,250,135,183Q173,116,272,78.5Q371,41,430,145.5Q489,250,423.5,343.5Z;
                M422.5,353Q369,456,264.5,431Q160,406,117,328Q74,250,116,170Q158,90,264,66Q370,42,423,146Q476,250,422.5,353Z;
                M380.5,322.5Q334,395,244.5,405Q155,415,93.5,332.5Q32,250,94.5,169Q157,88,247.5,92.5Q338,97,382.5,173.5Q427,250,380.5,322.5Z;
                M371.5,324Q336,398,237.5,420.5Q139,443,95,346.5Q51,250,100,162.5Q149,75,246,82Q343,89,375,169.5Q407,250,371.5,324Z;

                "
              ></animate>
            </path>
          </g>
        </svg>
      </div>
      <div className={Styles.main_product}>
        <div className={Styles.web_title}>
          <div className={Styles.text_web}>
            <div className={Styles.title_develop}>WEBSITE DEVELOPMENT</div>
            <div className={Styles.des_padding}>
              <div className={Styles.des_develop}>
                A website is important for a variety of reasons, including the
                ability to establish an online presence, increase visibility,
                reach a wider audience, and establish credibility. By having a
                website, businesses and organizations can share information
                about their products, services, and mission with a global
                audience. Websites also enable businesses to establish and
                maintain an online store, allowing them to sell products and
                services directly to customers. Additionally, websites can be
                used to build relationships with customers through features such
                as newsletters and social media integration. In today's digital
                age, having a website has become essential for businesses and
                organizations to succeed and stay competitive.
              </div>
            </div>
          </div>
          <div className={Styles.padding}>
            <div className={Styles.btn_main}>
              <div className={Styles.button_web}>
                <div className={Styles.pricing_web}>
                  <button>Pricing</button>
                </div>
                <div className={Styles.contact_web}>
                  <button>Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breakpoint for the overlay */}
      <div className={Styles.costumer}>
        {/* time */}
        <div className={Styles.text_icon}>
          <div className={Styles.icon_time}>
            <GiExtraTime />
            <div className={Styles.text_time}>
              Fast Delivery
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, obcaecati!
              </p>
            </div>
          </div>
        </div>
        {/* cost */}
        <div className={Styles.text_icon}>
          <div className={Styles.icon_time}>
            <GiExtraTime />
            <div className={Styles.text_time}>
              Fast Delivery
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, obcaecati!
              </p>
            </div>
          </div>
        </div>
        {/* secure */}
        <div className={Styles.text_icon}>
          <div className={Styles.icon_time}>
            <GiExtraTime />
            <div className={Styles.text_time}>
              Fast Delivery
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, obcaecati!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* why use web in business */}
      <div className={Styles.whyweb}>
        <div className={Styles.text_whyweb}>
          <div className={Styles.imageE}>
            <Image src={Ecomm} alt="ecommerce" />
          </div>
          <div className={Styles.title}>
          Why website for business
            <p>
              A website is crucial for a company because it gives the
              organization a platform to reach a worldwide audience and
              efficiently market its goods and services. A well-designed website
              may be a potent instrument for fostering client confidence and
              offering details about a business's goods or services. A website
              also makes it simple for clients to make purchases or inquiries,
              which is more convenient for both the customer and the company. A
              website may also act as the central hub for a company's whole
              online presence and be quickly connected to its social media pages
              and other online marketing initiatives. Overall, given the digital
              world we live in, having a professional and user-friendly website
              may be essential to a company's success.
            </p>
          </div>
        </div>
      </div>
      {/* why use personal website */}
      
      <div className={Styles.whyweb}>
        <div className={Styles.text_whyweb}>
          <div className={Styles.title1}>
            What is websites
            <p>
              An internet-accessible server-hosted collection of linked web
              pages, photos, videos, and other digital assets is known as a
              website. Web browsers like Google Chrome, Safari, or Mozilla
              Firefox are commonly used to visit websites, which may be made
              using a number of programming languages and tools, including HTML,
              CSS, and JavaScript. An interactive website with several pages,
              videos, forms, and user accounts might be as basic as a single web
              page with text and images or as sophisticated as a single web page
              with text and photos. A website may be used for a number of
              things, including informational purposes, amusement, e-commerce,
              and social networking.
            </p>
          </div>
          <div className={Styles.image1}>
            <Image src={Wcomm} alt="ecommerce" />
          </div>
        </div>
      </div>
      {/* feature image */}
      <div className={Styles.feature}>
        <div className={Styles.feature_title}>Backbone we use</div>
        <div className={Styles.feature_padding}>
          <div className={Styles.feature_image}>
            <Image src={Feature} alt="feature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdev;

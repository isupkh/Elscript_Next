import Head from "next/head";
import dynamic from "next/dynamic";
// import '../styles/global.css'
import styles from "../styles/Home.module.css";
const DynamicHero = dynamic(() => import("../component/homepage/hero/hero"));
const DynamicWeb = dynamic(() => import("../component/homepage/webdev/webdev"));

const Navbar = dynamic(() => import("../component/navbar/navbar"));
import Footer from "../component/footer/footer";
import { Header } from "../component/head/Globalbody";

export default function Home() {
  // const [scrolled, setScrolled] = useState(1);

  // const scrollProgress = () => {
  //   const scrollpx = document.documentElement.scrollTop;
  //   const winHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;

  //   const scrollLen = Math.ceil((scrollpx / winHeight) * 10); //video ends at 170.jpg
  //   console.log(scrollpx);
  //   setScrolled(scrollLen);
  //   // console.log(scrollpx);
  //   if (scrollpx > 1700) {
  //     // let heroImg = React.createRef()

  //     var logo = document.querySelector("#elscript_logo");
  //     var image = document.querySelector("#main_image");
  //     image?.classList.add("h-full");
  //     // heroImg.current.classList.add()
  //     logo?.classList.add("hidden");
  //   } else {
  //     var logo = document.querySelector("#elscript_logo");

  //     var image = document.querySelector("#main_image");
  //     image?.classList.remove("h-full");
  //     logo?.classList.remove("hidden");
  //   }
  //   // Removing and adding inner content
  //   if (scrollpx > 2015) {
  //     var webcontent = document.querySelector("#popup_content");
  //     var scroll = document.querySelector("#scroll_down");
  //     var sText = document.querySelector(".s_text");

  //     scroll?.classList.add("scroll_active");
  //     sText?.classList.add("hidden");

  //     webcontent?.classList.add("transform");
  //   } else {
  //     var sText = document.querySelector(".s_text");

  //     var webcontent = document.querySelector("#popup_content");

  //     webcontent?.classList.remove("transform");
  //     var scroll = document.querySelector("#scroll_down");
  //     sText?.classList.remove("hidden");

  //     scroll?.classList.remove("scroll_active");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollProgress);
  //   return () => window.removeEventListener("scroll", scrollProgress);
  // }, []);
  const Metas = {
    title:"Elscript Technology",
    url:"https://www.elscript.com",
    coverImg:"https://www.elscript.com",
    pageTitle:"Elscript Technology"
  }
  return (
    <>
  
      <Header  title="Elscript Technology"  />
      <div className={styles.superContainer} id="super_container">
        <div className={styles.webdev_container} id="webdev_container">
          <Navbar />

          {/* popup content */}

          <div className={styles.popup_content} id="popup_content">
            <DynamicHero />
            <DynamicWeb
              heading="1"
              titleheading1="Web Design &"
              titleheading2="Development"
              paragraph="Securing your future in the ever expanding online world depends on gaining a solid industrial footing. The first step in creating an online persona is to have a completely functional website that is up to date with IT trends. A mix of creativity, expertise, and imagination are needed to build a powerful online presence. Elscript, a renowned industry leader in Nepal for web development, has combined creativity and experience to create highly dynamic online solutions for a diverse clientele. Our skilled development team has continuously provided a full variety of programming and development solutions that are specifically designed for various requirements."
            />
            <DynamicWeb
              heading="2"
              titleheading1="Search Engine"
              titleheading2="Optimization"
              paragraph="We do a brand analysis, identify the target market, and put targeted SEO strategies into action. Our guiding principle has been to incorporate optimization strategies quickly and comprehensively. Consequently, generating more leads, traffic, and website visits that noticeably improve conversion rates. We would be your dependable SEO company in Nepal, helping you get to the top. Our strategy revolves around data-driven SEO. Advanced digital techniques may be used to analyze and assess the choices and selections of online customers. For the specific data, our experts would go further into the minute details. And would add the subtleties in the information that we post online that is optimized."
            />

            <DynamicWeb
              heading="3"
              titleheading1="Digital"
              titleheading2="Marketing"
              paragraph="With our assistance in digital marketing, improve your chances. Boost quality leads, increase website traffic, and strengthen your online presence. With specifically created digital marketing strategies, growth is guaranteed. In order to facilitate conversions, we investigate social media and other online venues. The online world provides countless opportunities to achieve successful results. Our digital marketing agency in Nepal will strategically plan the complete marketing campaign to meet your company's objectives. Since its beginning, the Elscript team's proficiency has garnered praise from our esteemed clientele."
            />
            <DynamicWeb
              heading="4"
              titleheading1="App Design &"
              titleheading2="Development"
              paragraph="With the help of our outstanding mobile app development services, you may revolutionize your company by enabling seamless user experiences across all current platforms and gadgets. Design, development, integration, administration, and support are all part of the comprehensive suite of application development services we provide. Both consumer-focused apps and innovative enterprise-class solutions are projects we collaborate on with customers.By offering seamless user experiences across all current platforms and devices, you may change your business with the aid of our excellent mobile app development services."
            />
            <DynamicWeb
              heading="5"
              titleheading1="Cloud"
              titleheading2="Solutions"
              paragraph="The first thing you should start with if you want to create a successful internet company is a reputable web host. It might be challenging to select the best hosting solution for your needs because there are so many options available on the market. We provide a wide selection of options for all hosting needs and are ready to assist. Depending on your company needs, we can assist you with cloud hosting, virtual private servers, dedicated servers, and many more solutions."
            />
             <DynamicWeb
              heading="6"
              titleheading1="Business"
              titleheading2=" Management Solutions"
             paragraph="We offer wide range of business management solution from Attendance System, Accounting Software and many more that is required to run day to day activity of your business. Our Team carefully analyze everything your organization needs and provide products and services for smooth operations."
             />
             <DynamicWeb
             heading="7"
             titleheading1="Krishna"
             titleheading2="ishu"
             paragraph="lorem lorem"
             />
             

            {/* <Dynamicseo />
              <Dynamicdigital />
              <Dynamicapp />

              {/* <WebDev />
              <Seo />
              <Digital />
              <Appdev /> */}
            {/* <WebDev/> */}
          </div>
                  {/* bg_animation */}
        <div className={`area`}>
          <ul className={`circles`}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}

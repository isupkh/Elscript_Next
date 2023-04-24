import Navbar from "../component/navbar/navbar";
import { Header } from "../component/head/Globalbody";
import Styles from "../styles/abouts.module.css";
// import { style } from "./style";
import Image from "next/image";
import Footer from "../component/footer/footer";
import Link from "next/link";

const abouts = () => {
  return (
    <>
    
      <Header title="About Us" />
      <Navbar />
    <div className="about_section  section_padding">
      {/* About hero section */}
      <div className={`${Styles.about_hero} `}>
        <span className={`${Styles.about_heading} span_heading`}>
          {" "}
          Who are we?
        </span>
        <div className={Styles.hero_content}>
          <p>
            Elscript Technology is a full-service Managed IT company. Because we
            have experts in every area of web development, we can give you
            solutions that are effective right away. We have a reputation for
            providing top-notch digital marketing services. Thanks to our team
            of experts, who collectively have decades of experience, we have
            been successful in increasing the online exposure of many businesses
            on the World Wide Web. We analyze the brand, pinpoint the audience,
            and implement specialized SEO tactics. Our driving concept has been
            to promptly and thoroughly implement optimization solutions. To
            assist your business, we have a sizable crew of graphic designers
            and logo designers.
          </p>
        </div>
      </div>
  
      <div className="team_section pt-10">
       

        <div className={Styles.team_main_container}>
        
         
         

       

       
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
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default abouts;

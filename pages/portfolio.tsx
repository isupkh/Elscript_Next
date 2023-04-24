import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import { Header } from "../component/head/Globalbody";
import Styles from "../styles/portfolio.module.css";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { BsBorderAll } from "react-icons/bs";
import { FiSearch, FiSmartphone } from "react-icons/fi";
import Image from "next/image";
import Adsaro from "../public/Images/portfolio/adsaro.png";
import Swissa from "../public/Images/portfolio/swissa.png";
import Emperor from "../public/Images/portfolio/emperor.png";
import tax from "../public/Images/portfolio/taxsubida.png";
import Harshal from "../public/Images/portfolio/harshal.png";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <Header title="Portofolio" />
      <Navbar />
      <div className={`${Styles.portfolio_section} section_padding`}>
        {/* Portfolio Heading */}
        <span className={`${Styles.portfolio_heading}`}>
          Our Latest <span className="span_heading"> Work</span>
        </span>
        <p className="content_para pt-2">
          One of the leading companies for web design, development, SEO, and
          digital marketing, Elscript Technology provides top-notch services to
          clients all over the world. Being a top provider of online solutions
          globally, we stay current with the strongest and most cutting-edge
          technology on the market. View the variety of outstanding projects we
          have completed.
        </p>
        <div className={`${Styles.portfolio_container} row`}>
          {/* Portfolio links */}
          {/* <div className={`${Styles.left_sec} col-lg-2 col-md-3`}>
         <span className={Styles.portfolio_link_heading}>Filter Products</span>
         <ul>
         <li>
             <a href="#"><BsBorderAll/> All Projects</a>
          </li>
          <li>
             <a href="#"><CgWebsite/> Web Development</a>
          </li>
          <li>
             <a href="#"><FiSearch/> SEO</a>
          </li>
          <li>
             <a href="#"><MdDesignServices/> Digital Marketing</a>
          </li>
          <li>
             <a href="#"><FiSmartphone/> App Development</a>
          </li>
         </ul>
        </div> */}
          <div className={`${Styles.right_sec} col-lg-12 col-md-12`}>
            <div className={Styles.work_container}>
              {/* Work */}
              <div className={Styles.work_box}>
                <div className={`${Styles.work_box_container} w-full h-full`}>
                  {/* Portfolio image */}
                  <div className={Styles.work_image}>
                    <Image src={Adsaro} className="w-full h-full" alt="" />
                  </div>
                  {/* portfolio content */}
                  <div className={Styles.work_content}>
                    <span className={Styles.work_heading}>Adsaro Admedia</span>
                    <p className="pt-1">
                      A Next js App , React Admin Portal and Node js Api
                    </p>
                    <p className="pt-2">Web Development</p>
                  </div>
                </div>
              </div>
              {/* Work */}
              <div className={Styles.work_box}>
                <div className={`${Styles.work_box_container} w-full h-full`}>
                  <div className={Styles.work_image}>
                    <Image src={Swissa} className="w-full h-full" alt="" />
                  </div>
                  <div className={Styles.work_content}>
                    <span className={Styles.work_heading}>
                      Swissa Trek and Travel
                    </span>
                    <p className="pt-1">
                      A Next js App , React Admin Portal and Node js Api
                    </p>
                    <p className="pt-2">Web Development</p>
                  </div>
                </div>
              </div>

              {/* Work */}
              <div className={Styles.work_box}>
                <div className={`${Styles.work_box_container} w-full h-full`}>
                  <div className={Styles.work_image}>
                    <Image src={Emperor} className="w-full h-full" alt="" />
                  </div>
                  <div className={Styles.work_content}>
                    <span className={Styles.work_heading}>
                      Emperor Education Network
                    </span>
                    <p className="pt-1">
                      A Next js App , React Admin Portal and Node js Api
                    </p>
                    <p className="pt-2">Web Development</p>
                  </div>
                </div>
              </div>

              {/* Work */}
              <div className={Styles.work_box}>
                <div className={`${Styles.work_box_container} w-full h-full`}>
                  <div className={Styles.work_image}>
                    <Image src={tax} className="w-full h-full" alt="" />
                  </div>
                  <div className={Styles.work_content}>
                    <span className={Styles.work_heading}>Tax Subidaa</span>
                    <p className="pt-1">A Normal Single page website</p>
                    <p className="pt-2"> Web Development </p>
                  </div>
                </div>
              </div>

              {/* Work */}
              <div className={Styles.work_box}>
                <div className={`${Styles.work_box_container} w-full h-full`}>
                  <div className={Styles.work_image}>
                    <Image src={Harshal} className="w-full h-full" alt="" />
                  </div>
                  <div className={Styles.work_content}>
                    <span className={Styles.work_heading}>
                      Harshal Cooperatives
                    </span>
                    <p className="pt-1">
                      A Next js App , React Admin Portal and Node js Api
                    </p>
                    <p className="pt-2"> Web Development </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <Footer/>
    </>
  );
};

export default Portfolio;

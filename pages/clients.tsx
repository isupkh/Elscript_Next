import React from "react";
// import Head from "next/head";
import { Header } from "../component/head/Globalbody";
import Styles from "../styles/abouts.module.css";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import Image from "next/image";

const clients = () => {
  return (
    <>
      <Header title="Our Clients" />
      <Navbar />
      <div className="section_padding">
        <div className={`${Styles.clients_title} span_heading`}>
          Our Clients
        </div>
        
        <p className="content_para">
          Being able to state that we worked on so many client-provided projects
          makes us proud. Customer satisfaction is a key indicator of our
          success. We have provided IT or digital marketing services to all of
          the Elscript clients in Nepal that we have worked with on IT and
          digital marketing projects. You can see businesses like yours that
          have worked with us, and you can be certain that we can complete the
          tasks you assign to us.
        </p>

        <div className={`${Styles.client_main_container} pt-10`}>
          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/adsaro.webp")}
              alt=""
            />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/365.webp")} alt="" />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/apex.webp")} alt="" />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/bridgeblue.webp")}
              alt=""
            />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/bwevents.webp")}
              alt=""
            />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/changanauto.webp")}
              alt=""
            />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/classicmultipurpose.webp")}
              alt=""
            />
          </div>

          {/* clients */}

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/eminent.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/emperor.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/everest.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/gadgetguff.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/grillofindia.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/hamro.webp")} alt="" />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/harsal.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/hemamoil.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/kanchan.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/merocanvas.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/metaverse-expedition.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/motif.webp")} alt="" />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/nawajoyti.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/nepsun.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/newbhavok.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/octo.webp")} alt="" />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/onlinedeliverynepal.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image src={require("../public/Images/client/phony.webp")} alt="" />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/swissa.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/sumanelectronicsgreen.webp")}
              alt=""
            />
          </div>

          <div className={Styles.client_image}>
            <Image
              src={require("../public/Images/client/taxsubida.webp")}
              alt=""
            />
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
      <Footer />
    </>
  );
};

export default clients;

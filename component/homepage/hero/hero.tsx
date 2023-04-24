// import { React, useEffect } from "react";
// import webhome from "../../../Images/webDev/webhome.webp";
// import { Link } from "react-router-dom";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Button, SecButton } from "../../button/button";
// import '../../../styles/global.css'

const webdev = () => {
  return (
    <div className={`${styles.web_development_hero} section_padding`}>
      {/* heading */}
      <div className={`${styles.heading} flex justify-center`}>
        <section className={styles.section_process}>
          <div className={styles.section_container}>
            {/* Hero Heading */}
            <div
              className={`${styles.process_steps_container} ${styles.container_medium} ${styles.with_padding} flex`}
            >
              <div
                className={`${styles.process_step_container} ${styles.process_step_1}`}
              >
                <div className={styles.process_step_title_container}>
                  <h1 className={styles.process_step_title}>Website. </h1>
                 
                </div>
              </div>
              <div
                className={`${styles.process_step_container} ${styles.process_step_2}`}
              >
                <div className={styles.process_step_title_container}>
                  <h1 className={`${styles.process_step_title} pl-4`}>SEO. </h1>
                  
                </div>
              </div>
              <div
                className={`${styles.process_step_container} ${styles.process_step_3}`}
              >
                <div className={styles.process_step_title_container}>
                  <h1 className={`${styles.process_step_title} pl-4`}>
                    Marketing
                  </h1>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* content */}
      <div className="content pt-8">
        <p className={styles.content_para}>
          Elscript Technology is a full-service provider of Managed IT services.
          We have specialists in every area of web development, so we can
          provide you with solutions that work right away. We are famous for
          offering superior Digital Marketing services. We have been successful
          in raising the online exposure of many businesses on the World Wide
          Web thanks to our team of pros, who together have decades of combined
          expertise. We conduct a brand analysis, identify the target market,
          and put targeted SEO strategies into action. Our guiding principle has
          been to incorporate optimization strategies quickly and
          comprehensively. We have a sizable staff of graphic designers, logo
          designers for graphics design to help your company.
        </p>
        <div className="button pt-8 flex justify-center">
          <Link href="/pricing">
            <SecButton name="Pricing" icon={<FaDollarSign />} />
          </Link>
          <Link href="/contact" className="ml-8">
            <Button name="Contact" icon={<AiOutlineMail />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default webdev;

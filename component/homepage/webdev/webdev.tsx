import Heading from "./heading";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const webdev = (props) => {
  return (
    <div className={`section_padding`}>
      <div>
        <div className={`${styles.web_heading}`}>
          <div className={styles.circle}>
            <span className={styles.heading_title}>{props.heading}</span>
          </div>
        </div>
      </div>
      <div className={`${styles.seo_hero}   py-8`}>
        {/* heading */}
        <div className="heading">
          <span className={styles.content_heading}>
            {props.titleheading1}
            <br />
            <span className={styles.span_heading}> {props.titleheading2}</span>
          </span>
        </div>
        {/* content */}
        <div className="content pt-8">
          <p className={`${styles.content_para} font-secondary`}>
            {props.paragraph}
          </p>
          {/* <div className="button pt-8 flex justify-center">
            <Link href="/webdevelopment" className={`${styles.sec_btn} ml-8`}>
              <span className="material-symbols-outlined">mail</span>
              Contact Us
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};



export default webdev;

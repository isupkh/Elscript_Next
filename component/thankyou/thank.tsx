import React from "react";
import Styles from "../../styles/thanks.module.css";
import Link from "next/link";
import Head from "next/head";
const thank = () => {
  return (
    <div className={Styles.thanks_container}>
      <Head>
        <title>
          Thank you
        </title>
      </Head>
      <div className={Styles.thanks_main}>
        {/* icon animation */}
        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              className={Styles.circle}
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path
              className={Styles.tick}
              d="M6.5 13.5L10 17 l8.808621-8.308621"
            />
          </g>
        </svg>
      </div>
      {/* texts */}
      <div className={Styles.text_main}>
      <div className={Styles.text_thanks}>
        Thank you for contacting us!!
      </div>
      <div className={Styles.text_para}>
      <p>
          We will reach you as soon as possible
        </p>
      </div>
      </div>
      {/* button */}
      <div className={Styles.back_btn}>
        <Link href="/">
        <button>
          Return to home
        </button>
        </Link>
      </div>   </div>
  );
};

export default thank;

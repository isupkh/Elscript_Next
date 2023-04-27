import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Styles from "../../styles/contactus.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { main } from "./../constants/main";
import thanks from "../../pages/thanks";
import { spawn } from "child_process";
//loader rakhdeu
// const baseURL = "https://api.elscript.com";

const baseURL = main.URL; //check gara

const notify = () => {
  toast.success("Thank you for contacting us");
};

const notifyerr = () => {
  toast.error("Contact not submitted");
};

const contact = () => {
  const router = useRouter();
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const formSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const formData = new FormData(form.current);
      const formDataObj = {};
      formData.forEach((value, key) => (formDataObj[key] = value));
      const response = await axios.post(`${baseURL}/api/contact`, formDataObj, {
        withCredentials: true,
      });

      if (response.status === 200) {
        router.push("/thanks");
        e.target.reset();
      } else {
        notifyerr();
      }
      setLoading(false);

      // {
      //   response.status === 200 && notify();
      //   e.target.reset();
      // }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const [verified, setVerified] = React.useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={`${Styles.main_contact} `}>
        <ToastContainer position="bottom-right" />
        {/* title */}
        <div
          className={`${Styles.title_contact} flex justify-center flex-col pt-10`}
        >
          <div
            className={`${Styles.head_contact} text-white font-main flex justify-center text-7xl font-semibold max-sm:text-5xl text-center`}
          >
            Talk to our experts!
          </div>
          <div
            className={`${Styles.para_contact} flex justify-center font-secondary text-2xl pt-4 max-sm:text-lg text-center`}
          >
            We'll guide you in finding the right plan and value for your
            business
          </div>
        </div>

        {/* details */}
        <div className={Styles.box_padding}>
          <div className={`${Styles.box_color} py-5 `}>
            {/* details */}
            <div className={`${Styles.main_box} flex flex-col  justify-center`}>
              <div
                className={`${Styles.mail_box} flex flex-wrap justify-center`}
              >
                {/* personal details */}

                <form
                  className={Styles.pd_contact}
                  ref={form}
                  onSubmit={formSubmit}
                >
                  <div className="main_details">
                    {/* name */}
                    <div className={`${Styles.label} font-main `}>Name</div>
                    <input
                      type="text"
                      name="name"
                      className={`${Styles.form_contact} relative`}
                      required
                    />
                    <br />
                    {/* Mail */}
                    <div className={`${Styles.label} font-main pt-3`}>
                      E-mail
                    </div>
                    <input
                      type="email"
                      name="email"
                      className={Styles.form_contact}
                      required
                    />
                    <br />
                    {/* phone */}
                    <div className={`${Styles.label} font-main pt-3`}>
                      Phone
                    </div>
                    <input
                      type="number"
                      name="phone"
                      className={Styles.form_contact}
                      id="number_form"
                      required
                    />
                    <div className={`${Styles.label} font-main pt-3`}>
                      Services
                    </div>
                    <input
                      type="text"
                      name="services"
                      className={Styles.form_contact}
                      id="number_form"
                      required
                    />
                  </div>
                  {/* button */}
                  <div className={`${Styles.textarea} pl-5 flex`}>
                    <div
                      className={`${Styles.label_1} font-main pl-7 max-[360px]:pl-3 `}
                    >
                      Message
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      cols="35"
                      rows="7"
                      className={Styles.form_contact}
                    ></textarea>
                    <div className={`${Styles.captcha} flex justify-center `}>
                      <div
                        className={`${Styles.send_contact} flex flex-col pt-8`}
                      >
                        <ReCAPTCHA
                          sitekey="6Ldo9LggAAAAADykACvA71bUg5llYE4V_gLWdZp-"
                          onChange={onChange}
                          theme="dark"
                          size="normal"
                        />

                        <button
                          type="submit"
                          className={`${Styles.btn_send} flex justify-center bg-primary p-3 mt-3 font-main font-thin text-white`}
                          disabled={!verified}
                        >
                          {loading && (
                            <div role="status">
                              <svg
                                aria-hidden="true"
                                className="w-5 h-5 mr-10 text-gray-200 animate-spin dark:text-gray-900 fill-blue-300"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          )}

                          <p className={`flex justify-center`}>Send Message</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* selector */}
              </div>
              {/* button */}
            </div>
          </div>
          <div className={Styles.location_contact}>
            {/* icons */}
            <div className={`${Styles.icons_contacts} flex cursor-pointer`}>
              <div
                className={`${Styles.icon_contact} w-72 pb-5 flex justify-between max-[390px]:w-40`}
              >
                <div
                  className={`${Styles.map_contact} text-primary text-2xl pl-20 z-50`}
                >
                  <a
                    href="https://goo.gl/maps/A5xK9EuHJYxscUdj9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLocationSharp />
                  </a>
                </div>
                <div
                  className={`${Styles.mail_contact} text-purple-600 text-2xl z-50`}
                >
                  <a
                    href="mailto:info@elscript.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrMail />
                  </a>
                </div>
                <div
                  className={`${Styles.call_contact} text-primary text-2xl pr-20 z-50`}
                >
                  <a
                    href="callto:+9779818439664"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTelephoneFill />
                  </a>
                </div>
              </div>
            </div>
            <div className={Styles.location_side}>
              <span>
                Old Baneshwor, Kathmandu-09 <br /> Kathmandu, 44600, Nepal
              </span>
            </div>
            <div className={Styles.number_side}>
              <span>+977 9818439664</span>
            </div>
            <div className={Styles.email_side}>
              <span>info@elscript.com</span>
            </div>
          </div>
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
    </>
  );
};

export default contact;

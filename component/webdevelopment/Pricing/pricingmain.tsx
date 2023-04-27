import React from "react";
import Link from "next/link";
import Styles from "../../../styles/pricing.module.css";

const pricingmain = (props) => {
  return (
    <div>
        <div className={Styles.pricing_main}>
          {/* box and pricing content-web */}
          <div className={Styles.web_pricing}>
            <div className={Styles.box_pricing}>
              {/* padding for the box and title */}
              <div className={Styles.name_padding}>
                {" "}
                <div className={Styles.name_price}>
                  {props.title}
                </div>
              </div>

              {/* pricing */}
              <div className={Styles.pricing_start}>
                <span>Starting from</span> <br />
                Rs {props.price} <span className="text-sm pl-1"> {props.pricingtime}</span>
              </div>

              {/* services name a0nd icons */}

              {props.service.map((service) => (
                <div className={Styles.services_pricing}>
                  <div className={Styles.icon_pricing}>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                  </div>
                  <div className={Styles.text_services}>
                    {service.title}
                  </div>
                </div>
              ))}

              {/* btn */}
              
              <div className={Styles.pricing_btn}>
                <Link href="/contact">
                <button type="submit"> Contact </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default pricingmain;

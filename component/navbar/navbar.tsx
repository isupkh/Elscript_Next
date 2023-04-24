import Link from "next/link";
// import { useRef } from "react";
import styles from "../../styles/Home.module.css";
import Logo from "../../public/Images/logos/4.png";
import Image from "next/image";
import { useRouter } from "next/router";

import Head from "next/head";
import { GiHamburgerMenu,GiCancel } from "react-icons/gi";
import { MdOutlineAttachMoney ,MdWorkspacesFilled } from "react-icons/md";
import { AiOutlineInfoCircle,AiOutlineUserSwitch,AiOutlineHome,AiOutlineMail } from "react-icons/ai";


import {  } from "react-icons/ai";
import { Router } from "next/router";

const navbar = () => {
  const router = useRouter()
  const navToggler = () => {
    var offcanvas = document.getElementById("offcanvas_menu");
    var offcanvasOver = document.getElementById("offcanvas_overlay");
    offcanvas?.classList?.toggle(`${styles.active}`);
    offcanvasOver?.classList?.toggle(`${styles.activeon}`);
  };
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <nav
        className={`${styles.navbar} nav_padding flex justify-between items-center `}
      >
        {/* Navbar logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} className="w-full h-full" alt="" />
          </Link>
        </div>
        {/* Navbar link */}
        <div className={styles.nav_link}>
          <ul>
            <li>
              <Link href="/" className={router.pathname == '/' ? `${styles.active}`:`${styles.nav_list}`}>
                <span>Home</span>
              </Link>
            </li>

            {/* <li className={styles.hasChildren} id="hasChildren">
              <Link href="/##" className={styles.nav_list}>
                <span>Services</span>
              </Link>
              <ul>
                <li>
                  <Link href="/webdevelopment">Web Development</Link>
                </li>
                <li>
                  <Link href="/##">SEO</Link>
                </li>

                <li>
                  <Link href="/##">App Development</Link>
                </li>

                <li>
                  <Link href="/##">Digital Marketing</Link>
                </li>

                <li>
                  <Link href="/##">Cloud Solutions</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link href="/clients" className={router.pathname == '/clients' ? `${styles.active}`:`${styles.nav_list}`}>
                <span>Our Clients</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={router.pathname == '/portfolio' ? `${styles.active}`:`${styles.nav_list}`}>
                <span>Portfolio</span>
              </Link>
            </li>
            
            <li>
              <Link href="/about-us" className={router.pathname == '/about-us' ? `${styles.active}`:`${styles.nav_list}`}>
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={router.pathname == '/pricing' ? `${styles.active}`:`${styles.nav_list}`}>
                <span>Pricing</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className={styles.nav_list_contact}>
          <button>Contact</button>
        </Link>
        {/* Navbar toggler */}
        <div className={styles.nav_toggler} onClick={navToggler}>
          <GiHamburgerMenu size={40} />
        </div>
      </nav>
      <div className={styles.offcanvas_menu} id="offcanvas_menu">
        <div className={styles.navclose} onClick={navToggler}>
          <GiCancel size={20} />
        </div>
        <div className="logo">
          <Image src={Logo} alt="" />
        </div>
        <ul className="pt-8">
          <li>
            <Link href="/">
              <AiOutlineHome size={30} /> Home
            </Link>
          </li>
          {/* <li>
            <Link href="/##">
              <span className="material-symbols-outlined">settings</span>{" "}
              Services
            </Link>
          </li> */}
          <li>
            <Link href="/clients">
              <AiOutlineUserSwitch size={30}/>
              Clients
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <MdWorkspacesFilled size={30}/>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <MdOutlineAttachMoney size={30} /> Pricing
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <AiOutlineInfoCircle size={30} /> About us
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <AiOutlineMail size={30} /> Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.offcanvas_overlay} onClick={navToggler} id="offcanvas_overlay"></div>
    </div>
  );
};

export default navbar;

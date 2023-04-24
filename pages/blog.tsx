import { Header } from "../component/head/Globalbody";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";
import Styles from "../styles/blog.module.css";
import { CgWebsite } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { BsBorderAll } from "react-icons/bs";
import { AiOutlineBars, AiOutlineCloseCircle } from "react-icons/ai";
import { FiSearch, FiSmartphone } from "react-icons/fi";
import Blogimg from "../public/Images/blog/Blog_main.png";
import Image from "next/image";
import { useEffect } from "react";

const Blog = () => {
  const filterToggler = () => {
    const filter = document.querySelector("#filter");
    filter?.classList?.toggle(`${Styles.filter_active}`);
  };
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    const scrollPx = window.scrollY

    if(scrollPx > 200){
      const filtercata = document.getElementById("filter_category")
      filtercata?.classList.add(`${Styles.filter_sticky}`)
    }
   })
   
  })
  
  // if(window.scrollY > 400){
  //   const filtercata = document.getElementById('filter_category')
  //   filtercata?.classList.toggle(`${Styles.filter_sticky}`)
  // }
  
 
  return (
    <>
      <Header title="Elscript Blogs" />
      <Navbar />
      <div className="blog_section section_padding">
        <div className={`row`}>
          {/* blog links */}
          <div
            className={`${Styles.left_sec} col-lg-2 col-md-3 col-sm-12 col-xs-12`}
          >
            <div className={Styles.left_container}>
              {/* Blogs Quick Links */}

              <ul>
                <li>
                  <span className={Styles.blog_link_heading}>Filter Posts</span>
                </li>
                <li>
                  <a href="#">
                    <BsBorderAll /> All Posts
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CgWebsite /> Web Development
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiSearch /> SEO
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdDesignServices /> Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiSmartphone /> App Development
                  </a>
                </li>
              </ul>
            </div>
            <div className={Styles.filter_sm} id="filter_category">
              <button onClick={filterToggler}>
                <AiOutlineBars /> Filter Posts
              </button>
            </div>
          </div>
          {/* bLOG content */}
          <div className={`${Styles.right_sec} col-lg-10 col-md-9 col-sm-12`}>
            <div className={Styles.heading_box}>
              <span className={`${Styles.catagory_heading}`}>All Posts</span>
            </div>
            <p className={`${Styles.blog_para} pt-3`}>
              Explore what’s new from your favorite IT Company and Developers
            </p>
            {/* blog container */}
            <div className={`${Styles.blog_container} pt-8`}>
              {/* Blog box */}
              <div className={`${Styles.blog_box} mb-4`}>
                <div className={Styles.blog_container_head}>
                  {/* Blog Image */}
                  <div className={Styles.blog_image}>
                    <Image src={Blogimg} alt="" />
                  </div>
                  {/* blog_content */}
                  <div className={Styles.blog_content}>
                    <div className={`${Styles.blog_heading}`}>
                      The Turbopack Button
                    </div>
                    <div className={Styles.blog_footer_content}>
                      <div className={Styles.author_name}>
                        <span className="block pb-2">19th Feb 2022</span>
                        <span className="block">By Krishna Pokharel</span>
                      </div>
                      <div className={Styles.tag}>
                        <a href="#">Web Design</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog box */}
              <div className={`${Styles.blog_box} mb-4`}>
                <div className={Styles.blog_container_head}>
                  {/* Blog Image */}
                  <div className={Styles.blog_image}>
                    <Image src={Blogimg} alt="" />
                  </div>
                  {/* blog_content */}
                  <div className={Styles.blog_content}>
                    <div className={`${Styles.blog_heading}`}>
                      The Turbopack Button
                    </div>
                    <div className={Styles.blog_footer_content}>
                      <div className={Styles.author_name}>
                        <span className="block pb-2">19th Feb 2022</span>
                        <span className="block">By Krishna Pokharel</span>
                      </div>
                      <div className={Styles.tag}>
                        <a href="#">Web Design</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blog box */}
              <div className={`${Styles.blog_box} mb-4`}>
                <div className={Styles.blog_container_head}>
                  {/* Blog Image */}
                  <div className={Styles.blog_image}>
                    <Image src={Blogimg} alt="" />
                  </div>
                  {/* blog_content */}
                  <div className={Styles.blog_content}>
                    <div className={`${Styles.blog_heading}`}>
                      The Turbopack Button
                    </div>
                    <div className={Styles.blog_footer_content}>
                      <div className={Styles.author_name}>
                        <span className="block pb-2">19th Feb 2022</span>
                        <span className="block">By Krishna Pokharel</span>
                      </div>
                      <div className={Styles.tag}>
                        <a href="#">Web Design</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.blog_categories_container} id="filter">
          <div
            className={Styles.categories_overlay}
            onClick={filterToggler}
          ></div>
          <div className={Styles.blog_categories}>
            <div className={Styles.close_btn} onClick={filterToggler}>
              <AiOutlineCloseCircle />
            </div>
            <ul>
              <li>
                <a href="#">
                  <BsBorderAll /> All Posts
                </a>
              </li>
              <li>
                <a href="#">
                  <CgWebsite /> Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <FiSearch /> SEO
                </a>
              </li>
              <li>
                <a href="#">
                  <MdDesignServices /> Digital Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <FiSmartphone /> App Development
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

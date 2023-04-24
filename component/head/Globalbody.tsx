import Head from "next/head";

export const Header = (props:any) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>

        {/* Meta descriptions */}
        {/* <meta
          name="description"
          content="Elscript Technology is a complete web solution provider established in the commercial city of Nepal. We have experts in each and every department of Web development to offer you solutions that can produce results from the very first day. Web design company Nepal includes experts who are specialized in a variety of areas. We have web designers with exceptional talent to build the layout of your website, developers to implement the most reliable yet cost-effective and robust technologies, online marketing gurus to spread the reputation of your website from our labs to the entire world and much more to offer. Elscript Technology is also renowned for providing high-quality Digital Marketing services in Nepal. Equipped with professionals who have decades of experience under their belt, we have succeeded in improving the online visibility of a large number of enterprises in the domain of the World Wide Web. Elscript Technology is committed to helping your enterprise realize its true brand value and marketing potential. We make sure that your online presence is felt by the world by implementing tested and proven marketing strategies. Our group of experts is passionate about their profession. We stay a step ahead of the curve of technologies and keep sharpening our designing skills to further improve our outcomes. The unwavering dedication, expertise and promptness of our professional employees have earned us a large satisfied client base in Nepal and abroad. Our Web Designing Company in Nepal is committed to serving the varying interests of all esteemed customers around the world."
        /> */}
        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content={`${meta.url}`} />
        <meta property="og:title" content={`${meta.pageTitle}`} />
        <meta
          property="og:description"
          content="Elscript Technology is a complete web solution provider established in the commercial city of Nepal. We have experts in each and every department of Web development to offer you solutions that can produce results from the very first day. Web design company Nepal includes experts who are specialized in a variety of areas. We have web designers with exceptional talent to build the layout of your website, developers to implement the most reliable yet cost-effective and robust technologies, online marketing gurus to spread the reputation of your website from our labs to the entire world and much more to offer. Elscript Technology is also renowned for providing high-quality Digital Marketing services in Nepal. Equipped with professionals who have decades of experience under their belt, we have succeeded in improving the online visibility of a large number of enterprises in the domain of the World Wide Web. Elscript Technology is committed to helping your enterprise realize its true brand value and marketing potential. We make sure that your online presence is felt by the world by implementing tested and proven marketing strategies. Our group of experts is passionate about their profession. We stay a step ahead of the curve of technologies and keep sharpening our designing skills to further improve our outcomes. The unwavering dedication, expertise and promptness of our professional employees have earned us a large satisfied client base in Nepal and abroad. Our Web Designing Company in Nepal is committed to serving the varying interests of all esteemed customers around the world."
        /> */}
        {/* <meta property="og:image" content={`${meta.coverImg}`} /> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image" /> */}
        {/* <meta property="twitter:url" content={`${meta.url}`} /> */}
        {/* <meta property="twitter:title" content={`${meta.pageTitle}`} /> */}
        {/* <meta
          property="twitter:description"
          content="Elscript Technology is a complete web solution provider established in the commercial city of Nepal. We have experts in each and every department of Web development to offer you solutions that can produce results from the very first day. Web design company Nepal includes experts who are specialized in a variety of areas. We have web designers with exceptional talent to build the layout of your website, developers to implement the most reliable yet cost-effective and robust technologies, online marketing gurus to spread the reputation of your website from our labs to the entire world and much more to offer. Elscript Technology is also renowned for providing high-quality Digital Marketing services in Nepal. Equipped with professionals who have decades of experience under their belt, we have succeeded in improving the online visibility of a large number of enterprises in the domain of the World Wide Web. Elscript Technology is committed to helping your enterprise realize its true brand value and marketing potential. We make sure that your online presence is felt by the world by implementing tested and proven marketing strategies. Our group of experts is passionate about their profession. We stay a step ahead of the curve of technologies and keep sharpening our designing skills to further improve our outcomes. The unwavering dedication, expertise and promptness of our professional employees have earned us a large satisfied client base in Nepal and abroad. Our Web Designing Company in Nepal is committed to serving the varying interests of all esteemed customers around the world." */}
        {/* /> */}
        {/* <meta property="twitter:image" content={`${meta.coverImg}`} /> */}

        {/* <link rel="canonical" href={`${meta.url}`} /> */}
        {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-219331947-1"
        />
        <script>
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-219331947-1');`}
        </script>
      </Head>
    </>
  );
};

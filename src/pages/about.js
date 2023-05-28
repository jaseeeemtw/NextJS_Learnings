import Footer from "../../components/footer";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="some description about the page" />
      </Head>
      <h1>About Page</h1>
    </>
  );
};

export default About;

About.layout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

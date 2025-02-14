import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto common-padding">
      <div>
        <div className=" w-max mx-auto pb-5">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/testimonials-img1.png"
            }
            alt="yoga-image"
            width={64}
            height={64}
          />
        </div>
        <h1 className="md:text-2xl text-lg text-center font-semibold leading-10 text-dark-green  mx-auto ">
          As a mother-daughter duo, Preeti and Anushka, both Yoga Siromanis
          trained and certified teachers from the renowned International
          Sivananda Yoga Vedanta Centre, Kerala, have created a nurturing
          environment where individuals can cultivate a profound connection
          between mind, body, and spirit. We&apos;re dedicated to guiding you on
          a journey of self-discovery, empowerment, and growth, and believe that
          life should be lived with joy, gratitude, and presence. Our
          traditional yoga classes are tailored to help you unlock your inner
          strength and well-being, and connect with yourself, your community,
          and the world around you.
        </h1>
      </div>
    </div>
  );
};

export default About;

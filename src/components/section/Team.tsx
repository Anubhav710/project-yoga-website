import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className=" common-padding">
      <div className="space-y-10 sm:space-y-0">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row  gap-4 sm:gap-0">
          <div className="flex-1">
            <Image
              src={"/home-4.png"}
              alt="h1-blog-list-img-new-image"
              width={450}
              height={300}
              className="rounded-tl-[50%] w-full"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center  ">
            <div className="sm:pl-5">
              <div className="space-y-3 ">
                <h1 className="text-dark-green text-3xl font-bold uppercase ">
                  Preeti{" "}
                </h1>
                <h4 className="text-xl text-dark-green">
                  Certified Yoga Instructor
                </h4>
                <p className="text-dark-green/80 justify">
                  Meet Preeti, a devoted and passionate yoga Siromani who pours
                  her heart into every class. Her approach to teaching goes
                  beyond just demonstrating postures - she empowers her students
                  with a deeper understanding of the transformative power of
                  yoga. By tailoring her classes to meet the unique needs of
                  each individual, Preeti creates a safe and supportive
                  environment where students can thrive. With a genuine interest
                  in every student&apos;s progress, she inspires them to reach
                  their full potential and achieve their wellness goals. At PA
                  Yoga Studio, Preeti is dedicated to providing personalized
                  attention and guidance to help her students cultivate a
                  lifelong practice that nourishes both body and soul.{" "}
                </p>
              </div>

              {/* <div className="flex gap-5">
                <h5 className="uppercase tracking-widest text-sm">View Team</h5>
                <Arrow />
              </div> */}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse   md:flex-row  gap-4 sm:gap-0 ">
          <div className="flex-1  flex flex-col  justify-center">
            <div className="space-y-3  md:pr-5 ">
              <h1 className="text-dark-green text-3xl font-bold uppercase">
                Anushka{" "}
              </h1>
              <h4 className="text-xl text-dark-green">
                Certified Yoga Instructor
              </h4>
              <p className="text-dark-green/80">
                Meet Anushka, a vibrant and dynamic yoga Siromani who brings a
                fresh perspective to the world of yoga. After leaving behind a
                career in the corporate world, she&apos;s dedicated herself to
                helping others achieve their wellness goals and live a more
                balanced life. With a passion for empowering the next
                generation, Anushka aims to inspire and motivate young yogis to
                make yoga a part of their daily lives. Her own commitment to
                physical and mental strength, as well as her enthusiasm for
                healthy living, aligns perfectly with our studio&apos;s values.{" "}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={"/home-5.png"}
              alt="h1-blog-list-img-new-image"
              width={450}
              height={300}
              className="rounded-tr-[50%] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

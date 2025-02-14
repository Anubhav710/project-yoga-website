import React from "react";
import CustomButton from "../ui/Button";

const ContactUs = () => {
  return (
    <section className="w-full  common-padding ">
      <div className="w-full mx-auto h-full  gap-10  flex flex-col md:flex-row">
        <div className="  w-full  h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1823743725657!2d77.22096965277859!3d28.547849280351265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26a20c24381%3A0x80a4309996bbde7e!2sP.A.%20Yoga%20Studio%2F%20Preeti%20%26%20Anushka!5e0!3m2!1sen!2sin!4v1733995052954!5m2!1sen!2sin"
            className="w-full sm:h-[50vh]"
            loading="lazy"
          ></iframe>
        </div>
        <div className="  w-full  h-full ">
          <div className="md:pl-32 px-5 w-full">
            <h1 className=" conatct-us-heading font-semibold text-dark-green">
              Conatct Us
            </h1>
            <form action="" className="space-y-10 mt-7">
              <input
                type="text"
                placeholder="Full name"
                className="border-b border-dark-green/60 w-full placeholder:text-dark-green pb-3 bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-b border-dark-green/60 w-full placeholder:text-dark-green pb-3 bg-transparent outline-none"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="w-full placeholder:text-dark-green pb-3 bg-transparent border-b border-dark-green/60 outline-none"
              ></textarea>

              <CustomButton>SEND MESSAGE</CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

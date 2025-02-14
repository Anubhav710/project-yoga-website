import CustomButton from "@/components/ui/Button";
import React from "react";

const BookClassForm = () => {
  return (
    <section className="common-padding common-padding-bottom">
      <form action="" className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            className="border-b border-dark-green/40 focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border-b border-dark-green/40 focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            className="border-b border-dark-green/40 focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="class">Book A Class</label>
          <select
            id="class"
            className="border-b bg-transparent border-dark-green/40 focus:outline-none focus:border-b focus:border-b-dark-green py-2"
          >
            <option value="">Select a class</option>
            <option value="yoga">Yoga Class</option>
            <option value="pilates">Pilates Class</option>
            <option value="meditation">Meditation Class</option>
            <option value="dance">Dance Class</option>
            <option value="strength">Strength Training Class</option>
          </select>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="border-b border-dark-green/40 focus:outline-none focus:border-b focus:border-b-dark-green p-2"
            rows={1}
          ></textarea>
        </div>
        <CustomButton className={"w-max !px-24  mx-auto"}>Submit</CustomButton>
      </form>
    </section>
  );
};

export default BookClassForm;

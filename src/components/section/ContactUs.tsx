"use client";
import React, { useState } from "react";
import CustomButton from "../ui/Button";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return; // Stop the submission if validation fails
    }

    // Basic email validation (optional but recommended)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return; // Stop the submission if validation fails
    }

    setIsSubmitting(true); // Disable button on submission start

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      // Check if the request was successful (e.g., status 200-299)
      if (res.ok) {
        toast.success("Message sent successfully!");
        // Optionally clear the form after successful submission
        setName("");
        setEmail("");
        setMessage("");
      } else {
        // Handle non-OK responses, e.g., read error message from body
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error); // Log the error for debugging
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false); // Re-enable button after submission attempt
    }
  };

  return (
    <section className="w-full  common-padding ">
      <div className="w-full mx-auto h-full  gap-10  flex flex-col md:flex-row">
        <div className="w-full  h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.1823743725657!2d77.22096965277859!3d28.547849280351265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26a20c24381%3A0x80a4309996bbde7e!2sP.A.%20Yoga%20Studio%2F%20Preeti%20%26%20Anushka!5e0!3m2!1sen!2sin!4v1733995052954!5m2!1sen!2sin"
            className="w-full sm:h-[50vh]"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full  h-full ">
          <div className="md:pl-32 px-5 w-full">
            <h1 className=" conatct-us-heading font-semibold text-dark-green">
              Contact Us
            </h1>
            <form onSubmit={handleSubmit} className="space-y-10 mt-7">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b border-dark-green/60 w-full placeholder:text-dark-green pb-3 bg-transparent outline-none"
                disabled={isSubmitting} // Disable inputs while submitting
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-dark-green/60 w-full placeholder:text-dark-green pb-3 bg-transparent outline-none"
                disabled={isSubmitting} // Disable inputs while submitting
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full placeholder:text-dark-green pb-3 bg-transparent border-b border-dark-green/60 outline-none"
                disabled={isSubmitting} // Disable inputs while submitting
              ></textarea>

              <CustomButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

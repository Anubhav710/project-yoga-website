"use client";
import CustomButton from "@/components/ui/Button";
import React, { useState, useRef, useEffect } from "react";

// Class options data
const classOptions = [
  { value: "Regular Classes", label: "Regular Class" },
  { value: "Advanced Classes", label: "Advanced Class" },
];

const BookClassForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleOptionClick = (value: string, label: string) => {
    setSelectedClass(label);
    setIsOpen(false);
  };

  return (
    <section className="common-padding common-padding-bottom padding-x">
      <form action="" className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            className="border-b border-dark-green/40 bg-transparent focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border-b border-dark-green/40 bg-transparent focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            className="border-b border-dark-green/40 bg-transparent focus:outline-none focus:border-b focus:border-b-dark-green p-2"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="class">Book A Class</label>
          <div className="relative" ref={dropdownRef}>
            {/* Hidden actual select for form submission */}
            <select name="class" className="hidden">
              {classOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Custom dropdown trigger */}
            <div
              className="cursor-pointer border-b bg-transparent border-dark-green/40 bg-transparent focus:outline-none py-2 flex justify-between items-center text-dark-green"
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsOpen(!isOpen);
                  e.preventDefault();
                }
              }}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              role="combobox"
            >
              <span className={selectedClass ? "" : "text-dark-green/60"}>
                {selectedClass || "Select a class"}
              </span>
              <svg
                className={`fill-current h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            {/* Dropdown options */}
            {isOpen && (
              <div
                className="absolute z-10 mt-1 w-full bg-white border border-dark-green/20 rounded-md shadow-lg max-h-60 overflow-auto"
                role="listbox"
              >
                {classOptions.map((option) => (
                  <div
                    key={option.value}
                    className="cursor-pointer px-4 py-2 hover:bg-dark-green/10 text-dark-green"
                    onClick={() =>
                      handleOptionClick(option.value, option.label)
                    }
                    role="option"
                    aria-selected={selectedClass === option.label}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleOptionClick(option.value, option.label);
                        e.preventDefault();
                      }
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="border-b border-dark-green/40 bg-transparent focus:outline-none focus:border-b focus:border-b-dark-green p-2"
            rows={1}
          ></textarea>
        </div>
        <CustomButton className={"w-max !px-24  mx-auto"}>Submit</CustomButton>
      </form>
    </section>
  );
};

export default BookClassForm;

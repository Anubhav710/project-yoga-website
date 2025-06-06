import React from "react";

const Arrow = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} w-max group`}>
      <svg
        className="qodef-svg--event-button-arrow qodef-m-arrow sm:h-12 sm:w-12 w-6 h-6  "
        xmlns="http://www.w3.org/2000/svg"
        width="46.5"
        height="23.3"
        viewBox="0 0 46.5 23.3"
      >
        <path fill="none" stroke="currentColor" d="M46.5,11.5H0"></path>
        <path
          fill="none"
          stroke="currentColor"
          d="M46.5,11.6c0,0-11.3-0.1-14.4-11.5"
          className="group-hover:scale-y-75 origin-right duration-500 transition-all"
        ></path>
        <path
          fill="none"
          stroke="currentColor"
          d="M46.5,11.6c0,0-11.3,0.1-14.4,11.5"
          className=" group-hover:scale-y-75 origin-right duration-500 transition-all"
        ></path>
      </svg>
    </div>
  );
};

export default Arrow;

import React from "react";

const CustomButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`bg-dark-green whitespace-nowrap text-white hover:bg-white hover:border hover:border-dark-green hover:text-dark-green duration-500 transition-all md:px-10 px-10 rounded-tl-[15px] rounded-br-[15px] py-3 ${className}`}
    >
      {children}{" "}
    </button>
  );
};

export default CustomButton;

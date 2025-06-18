import React from "react";

const CustomButton = ({
  children,
  className,
  type,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-dark-green whitespace-nowrap text-white hover:bg-white hover:ring-[2px] hover:ring-dark-green hover:text-dark-green duration-500 transition-all md:px-10 px-10 rounded-tl-[15px] rounded-br-[15px] py-3 ${className}`}
    >
      {children}{" "}
    </button>
  );
};

export default CustomButton;

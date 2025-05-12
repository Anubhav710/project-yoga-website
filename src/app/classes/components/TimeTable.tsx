"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const timeSlots = ["Week 1", "Week 2", "Week 3", "Week 4"];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

type WeekDay = (typeof weekDays)[number];

const classData = {
  classes: [
    {
      name: "Hatha Yoga",
      instructor: "",
      level: "Beginner",
      type: "Hatha",
      time: "7:00 AM - 8:00 AM",
      slots: "",
    },
    {
      name: "Vinyasa Yoga",
      instructor: "",
      level: "Advanced",
      type: "Vinyasa",
      time: "8:00 AM - 9:00 AM",
      slots: "",
    },
    {
      name: "Backbends & Hip Openers",
      instructor: "",
      level: "Beginner",
      type: "Flow",
      time: "9:00 AM - 10:00 AM",
      slots: "",
    },
    {
      name: "Handstands & Arm Balances",
      instructor: "",
      level: "Advanced",
      type: "Flow",
      time: "9:00 AM - 10:00 AM",
      slots: "",
    },
    {
      name: "Core & Self-Practice",
      instructor: "",
      level: "Advanced",
      type: "Flow",
      time: "9:00 AM - 10:00 AM",
      slots: "",
    },
    {
      name: "Strong Knees & Hips",
      instructor: "",
      level: "Beginner",
      type: "Flow",
      time: "9:00 AM - 10:00 AM",
      slots: "",
    },
    {
      name: "Relaxing Flow",
      instructor: "",
      level: "Beginner",
      type: "Flow",
      time: "6:00 PM - 7:00 PM",
      slots: "",
    },
    {
      name: "Gentle Flow",
      instructor: "",
      level: "Beginner",
      type: "Flow",
      time: "8:00 AM - 9:00 AM",
      slots: "",
    },
    {
      name: "No class",
      instructor: "",
      level: "",
      type: "",
      time: "",
      slots: "",
    },
  ],
};

// Define the schedule for which classes appear on which days and weeks
// Use the index of classData.classes, or null for empty
// Now supports arrays of class indices for multiple classes in a single cell
const schedule: Record<WeekDay, (number | number[] | null)[]> = {
  Monday: [[0, 1, 2], 5, 0, 0],
  Tuesday: [1, 2, [3, 4], 4], // Multiple classes on Tuesday Week 3
  Wednesday: [5, 5, 5, 5],
  Thursday: [7, 7, 7, 7],
  Friday: [[0, 1], 0, 0, 0], // Multiple classes on Friday Week 1
  Saturday: [6, 6, 6, 6],
};

const TimeTable = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 848);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const nextDay = () => {
    setCurrentDayIndex((prev) => (prev === weekDays.length - 1 ? 0 : prev + 1));
  };

  const prevDay = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? weekDays.length - 1 : prev - 1));
  };

  // Visible days based on screen size
  const visibleDays = isMobile ? [weekDays[currentDayIndex]] : weekDays;

  // Function to get class info for a specific day and time slot
  const getClassForSlot = (day: WeekDay, timeSlotIndex: number) => {
    const classEntry = schedule[day][timeSlotIndex];

    // If it's an array of class indices, return an array of class info
    if (Array.isArray(classEntry)) {
      return classEntry.map((index) =>
        index === 7
          ? {
              name: "No class",
              instructor: "",
              level: "",
              type: "",
              time: "",
              slots: "",
            }
          : classData.classes[index]
      );
    }

    // If it's a single class index
    const classIndex = classEntry as number | null;
    return classIndex !== null && classIndex !== 7
      ? [classData.classes[classIndex]]
      : classIndex === 7
      ? [
          {
            name: "No class",
            instructor: "",
            level: "",
            type: "",
            time: "",
            slots: "",
          },
        ]
      : null;
  };

  return (
    <section className=" padding-x  common-padding common-padding-bottom">
      <div className="">
        <div className="w-max mx-auto">
          <Image
            src={
              "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/04/testimonials-img1.png"
            }
            alt="yoga-image"
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-2xl py-10 md:text-4xl text-center uppercase font-semibold leading-10 text-dark-green w-full md:w-[83%] mx-auto">
          Group Classes
        </h1>
      </div>

      {/* Mobile Day Navigation */}
      {isMobile && (
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevDay}
            className="bg-dark-green text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            aria-label="Previous day"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h2 className="text-lg font-medium text-dark-green">
            {weekDays[currentDayIndex]}
          </h2>

          <button
            onClick={nextDay}
            className="bg-dark-green text-white p-2 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            aria-label="Next day"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      <div
        className={`${
          isMobile ? "min-w-full" : "min-w-[800px] overflow-x-auto"
        }`}
      >
        <div className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-7"}`}>
          <div className="border border-gray-600 text-center py-3"></div>
          {isMobile ? (
            <div className="border-y border-r bg-[#F0F0F0] border-gray-600 text-center py-3 text-sm md:text-base">
              {weekDays[currentDayIndex]}
            </div>
          ) : (
            weekDays.map((day, index) => (
              <div
                key={index}
                className="border-y border-r bg-[#F0F0F0] border-gray-600 text-center py-3 text-sm md:text-base"
              >
                {day}
              </div>
            ))
          )}
        </div>

        {timeSlots.map((timeSlot, timeSlotIndex) => (
          <div
            key={timeSlotIndex}
            className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-7"}`}
          >
            <div
              className={`text-center place-content-center border-x border-b border-gray-600 text-sm md:text-base ${
                timeSlotIndex % 2 === 0 ? "bg-[#F7F5F2]" : ""
              }`}
            >
              {timeSlot}
            </div>
            {isMobile
              ? (() => {
                  const day = weekDays[currentDayIndex];
                  const classInfoArray = getClassForSlot(day, timeSlotIndex);
                  return classInfoArray ? (
                    <MultipleClassCard
                      classInfoArray={classInfoArray}
                      isAlternate={timeSlotIndex % 2 === 0}
                    />
                  ) : (
                    <EmptyCard isAlternate={timeSlotIndex % 2 === 0} />
                  );
                })()
              : weekDays.map((day, dayIndex) => {
                  const classInfoArray = getClassForSlot(day, timeSlotIndex);
                  return classInfoArray ? (
                    <MultipleClassCard
                      key={dayIndex}
                      classInfoArray={classInfoArray}
                      isAlternate={timeSlotIndex % 2 === 0}
                    />
                  ) : (
                    <EmptyCard
                      key={dayIndex}
                      isAlternate={timeSlotIndex % 2 === 0}
                    />
                  );
                })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeTable;

interface CardProps {
  classInfo: {
    name: string;
    instructor: string;
    level: string;
    type: string;
    time: string;
    slots: string;
  };
  isAlternate?: boolean;
}

export const Card: React.FC<CardProps> = ({ classInfo, isAlternate }) => {
  return (
    <div
      className={`space-y-2 justify-between flex flex-col gap-4 cursor-pointer items-center border-r border-b border-gray-600 relative group hover:bg-[#E2E8E0] duration-500 transition-all ${
        isAlternate ? "bg-[#F7F5F2]" : ""
      }`}
    >
      <div className="bg-dark-green w-full flex flex-col items-center py-2 absolute -top-4 text-white font-thin opacity-0 group-hover:opacity-100 duration-500 transition-all z-10">
        <h1 className="text-sm md:text-base font-semibold">
          {classInfo.level}
        </h1>
        <span className="text-xs md:text-sm">{classInfo.time}</span>
        <div className="bg-dark-green h-4 w-4 rotate-45 absolute -bottom-2"></div>
      </div>
      <div className="py-8 md:py-12 px-0.5">
        <div>
          <h1 className="text-lg md:text-2xl text-center">{classInfo.name}</h1>
          <p className="text-sm md:text-base text-center">
            {classInfo.instructor}
          </p>
        </div>
        {classInfo.slots && (
          <p className="text-sm md:text-base text-center">
            {classInfo.slots} Slots available
          </p>
        )}
      </div>
      <div className="bg-dark-green w-full flex justify-center py-2 text-white font-thin scale-y-0 origin-bottom group-hover:scale-y-100 duration-200 transition-all">
        <h1 className="text-sm md:text-base">Book Now</h1>
      </div>
    </div>
  );
};

// Component for multiple classes in a single cell
interface MultipleClassCardProps {
  classInfoArray: {
    name: string;
    instructor: string;
    level: string;
    type: string;
    time: string;
    slots: string;
  }[];
  isAlternate?: boolean;
}

export const MultipleClassCard: React.FC<MultipleClassCardProps> = ({
  classInfoArray,
  isAlternate,
}) => {
  return (
    <div
      className={`space-y-2 justify-between flex flex-col gap-2 cursor-pointer items-center border-r border-b border-gray-600 relative group hover:bg-[#E2E8E0] duration-500 transition-all ${
        isAlternate ? "bg-[#F7F5F2]" : ""
      }`}
    >
      <div className="bg-dark-green w-full flex flex-col items-center py-2 absolute -top-4 text-white font-thin opacity-0 group-hover:opacity-100 duration-500 transition-all z-10">
        <h1 className="text-sm md:text-base font-semibold">
          {classInfoArray[0].level}
        </h1>
        <span className="text-xs md:text-sm">{classInfoArray[0].time}</span>
        <div className="bg-dark-green h-4 w-4 rotate-45 absolute -bottom-2"></div>
      </div>

      <div className="py-4 md:py-14 px-0.5 w-full">
        {classInfoArray.map((classInfo, index) => (
          <div key={index} className={`${index > 0 ? "mt-3 pt-3" : ""}`}>
            <h1 className="text-lg md:text-xl text-center">{classInfo.name}</h1>
            <p className="text-sm md:text-base text-center">
              {classInfo.instructor}
            </p>
            {classInfo.slots && (
              <p className="text-xs md:text-sm text-center">
                {classInfo.slots} Slots available
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-dark-green w-full flex justify-center py-2 text-white font-thin scale-y-0 origin-bottom group-hover:scale-y-100 duration-200 transition-all">
        <h1 className="text-sm md:text-base">Book Now</h1>
      </div>
    </div>
  );
};

// Component for empty slots
interface EmptyCardProps {
  isAlternate?: boolean;
}

export const EmptyCard: React.FC<EmptyCardProps> = ({ isAlternate }) => {
  return (
    <div
      className={`border-r border-b border-gray-600 py-8 md:py-12 flex items-center justify-center ${
        isAlternate ? "bg-[#F7F5F2]" : ""
      }`}
    >
      <p className="text-center text-gray-400 text-lg"></p>
    </div>
  );
};

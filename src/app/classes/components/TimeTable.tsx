"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const timeSlots = ["07.15 AM - 08.45 AM"];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

type WeekDay = (typeof weekDays)[number];

const classData = {
  classes: [
    {
      name: "Regular Class",
      instructor: "Carrie Stone",
      level: "Beginner",
      slots: "4/5",
    },
    {
      name: "Advanced Class",
      instructor: "Carrie Stone",
      level: "Advanced",
      slots: "3/5",
    },
  ],
};

// Define the schedule for which classes appear on which days
const schedule: Record<WeekDay, (number | null)[]> = {
  Monday: [0, null], // Regular class for both time slots
  Tuesday: [1, 1], // Only Advanced class for second slot
  Wednesday: [0, 0], // Regular class for both time slots
  Thursday: [null, null], // No classes
  Friday: [0, 0], // Regular class for both time slots
  Saturday: [null, null], // No classes
  Sunday: [null, null], // No classes
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
    const daySchedule = schedule[day];
    const classIndex = daySchedule[timeSlotIndex];
    return classIndex !== null ? classData.classes[classIndex] : null;
  };

  return (
    <section className="max-w-[1200px] mx-auto common-padding common-padding-bottom">
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
          Personal and group lessons
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
        <div className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-8"}`}>
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
            className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-8"}`}
          >
            <div className="text-center place-content-center border-x border-b border-gray-600 text-sm md:text-base">
              {timeSlot}
            </div>
            {isMobile
              ? (() => {
                  const day = weekDays[currentDayIndex];
                  const classInfo = getClassForSlot(day, timeSlotIndex);
                  return classInfo ? (
                    <Card classInfo={classInfo} />
                  ) : (
                    <EmptyCard />
                  );
                })()
              : weekDays.map((day, dayIndex) => {
                  const classInfo = getClassForSlot(day, timeSlotIndex);
                  return classInfo ? (
                    <Card key={dayIndex} classInfo={classInfo} />
                  ) : (
                    <EmptyCard key={dayIndex} />
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
    slots: string;
  };
}

export const Card: React.FC<CardProps> = ({ classInfo }) => {
  return (
    <div className="space-y-2 justify-between flex flex-col gap-4 cursor-pointer items-center border-r border-b border-gray-600 relative group hover:bg-[#E2E8E0] duration-500 transition-all">
      <div className="bg-dark-green w-full flex justify-center py-2 absolute -top-4 text-white font-thin opacity-0 group-hover:opacity-100 duration-500 transition-all">
        <h1 className="text-sm md:text-base">{classInfo.level}</h1>
        <div className="bg-dark-green h-4 w-4 rotate-45 absolute -bottom-2"></div>
      </div>
      <div className="py-8 md:py-12 px-0.5">
        <div>
          <h1 className="text-lg md:text-2xl text-center">{classInfo.name}</h1>
          <p className="text-sm md:text-base text-center">
            {classInfo.instructor}
          </p>
        </div>
        <p className="text-sm md:text-base text-center">
          {classInfo.slots} Slots available
        </p>
      </div>
      <div className="bg-dark-green w-full flex justify-center py-2 text-white font-thin scale-y-0 origin-bottom group-hover:scale-y-100 duration-200 transition-all">
        <h1 className="text-sm md:text-base">Book Now</h1>
      </div>
    </div>
  );
};

// Component for empty slots
export const EmptyCard: React.FC = () => {
  return (
    <div className="border-r border-b border-gray-600 py-8 md:py-12 flex items-center justify-center">
      <p className="text-center text-gray-400 text-lg">No Class</p>
    </div>
  );
};

import Image from "next/image";
import React from "react";

const timeSlots = [
  "09.00 - 10.00",
  "10.00 - 11.00",
  "11.00 - 12.00",
  "13.00 - 14.00",
];
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const classData = {
  classes: [
    {
      name: "Ashtanga",
      instructor: "Carrie Stone",
      level: "Advanced",
      slots: "4/5",
    },
    {
      name: "Vinyasa",
      instructor: "John Doe",
      level: "Intermediate",
      slots: "3/5",
    },
  ],
};

const TimeTable = () => {
  return (
    <section className="max-w-[1200px] mx-auto  overflow-x-auto common-padding common-padding-bottom">
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

      <div className="min-w-[800px]">
        <div className="grid grid-cols-8">
          <div className="border border-gray-600 text-center py-3"></div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="border-y border-r bg-[#F0F0F0] border-gray-600 text-center py-3 text-sm md:text-base"
            >
              {day}
            </div>
          ))}
        </div>

        {timeSlots.map((timeSlot, index) => (
          <div key={index} className="grid grid-cols-8">
            <div className="text-center place-content-center border-x border-b border-gray-600 text-sm md:text-base">
              {timeSlot}
            </div>
            {weekDays.map((_, dayIndex) => (
              <Card
                key={dayIndex}
                classInfo={
                  classData.classes[
                    Math.floor(Math.random() * classData.classes.length)
                  ]
                }
              />
            ))}
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
    <div className="space-y-2 flex flex-col gap-4 cursor-pointer items-center border-r border-b border-gray-600 relative group hover:bg-[#E2E8E0] duration-500 transition-all">
      <div className="bg-dark-green w-full flex justify-center py-2 absolute -top-4 text-white font-thin opacity-0 group-hover:opacity-100 duration-500 transition-all">
        <h1 className="text-sm md:text-base">{classInfo.level}</h1>
        <div className="bg-dark-green h-4 w-4 rotate-45 absolute -bottom-2"></div>
      </div>
      <div className="py-8 md:py-12">
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

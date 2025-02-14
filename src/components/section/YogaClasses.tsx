import React from "react";
import Image from "next/image";
import { yogaClasses } from "@/constants/index";
import Arrow from "../ui/Arrow";

interface TimeSlot {
  time: string;
  days: string[];
}

interface YogaClassType {
  name: string;
  image: string;
  instructor: string;
  times: TimeSlot[];
}

interface YogaClassCardProps {
  yogaClass: YogaClassType;
}

const YogaClassCard: React.FC<YogaClassCardProps> = ({ yogaClass }) => {
  return (
    <div className="flex border-b border-dark-green/30 pb-12 pt-6 flex-col md:flex-row px-5 space-y-5">
      <div className="flex-1 space-y-3">
        <h1 className="text-2xl  uppercase font-semibold text-dark-green">
          {yogaClass.name}
        </h1>
        <div className="flex gap-5 items-center">
          <div className="h-10 w-10 relative rounded-full">
            <Image src={yogaClass.image} alt={yogaClass.name} fill />
          </div>
          <p>{yogaClass.instructor}</p>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        {yogaClass.times.map((timeSlot, index) => (
          <p key={index}>{timeSlot.time}</p>
        ))}
      </div>
      <div className="flex-1 space-y-4 flex justify-between flex-col md:flex-row ">
        <div className="space-y-2">
          {yogaClass.times.map((timeSlot, index) => (
            <p key={index}>{timeSlot.days.join(" and ")}</p>
          ))}
        </div>

        <Arrow />
      </div>
    </div>
  );
};

const YogaClass: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto  common-padding">
      <div>
        {/* Header section  */}
        <div className="border-b border-dark-green/30 ">
          <div className="md:flex font-semibold pb-2 hidden ">
            <h1 className="uppercase flex-1">class</h1>
            <h1 className="uppercase flex-1">time</h1>
            <h1 className="uppercase flex-1">day</h1>
          </div>
        </div>
        <div>
          {yogaClasses.map((yogaClass, index) => (
            <YogaClassCard key={index} yogaClass={yogaClass} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaClass;

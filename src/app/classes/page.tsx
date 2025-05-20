import React from "react";
import TimeTable from "./components/TimeTable";

import Image from "next/image";
import Banner from "@/components/common/banner";

const classes = () => {
  return (
    <main className="space-y-24">
      <Banner title="classes" src="/assets/images/classes/banner.jpg" />
      <TimeTable />
    </main>
  );
};

export default classes;

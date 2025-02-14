import Image from "next/image";
import React from "react";

const logoUrls = [
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/yoga-mats-c1-hover.png",
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/sun-studio-c1-hover.png",
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/calm-mind-c1-hover.png",
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/vinyasa-c1-hover.png",
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/mindfully-yoga-c1-hover.png",
  "https://ashtanga.qodeinteractive.com/wp-content/uploads/2023/08/yoga-vida-yoga-c1-hover.png",
];

const CompanyLogo = () => {
  return (
    <section className="common-margin">
      <div>
        <div className="grid grid-cols-3 place-items-center gap-y-12">
          {logoUrls.map((logos, i) => (
            <Image key={i} src={logos} alt="logo" width={240} height={364} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;

import { logoEmosFull } from "@src/lib/constants/assets";

import React from "react";

const Splash: React.FC = () => {
  return (
    <div
      className={`w-full h-screen bg-splash-day flex items-center justify-center flex-col`}
    >
      <img src={logoEmosFull} className="w-1/2 md:w-[15rem] -ml-3" />
      <div className="text-primary mt-3 font-bold md:text-xl">
        Load application...
      </div>
    </div>
  );
};
export default Splash;

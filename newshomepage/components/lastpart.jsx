import Image from "next/image";
import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-6 mt-10 h-[140px]">
      <div className="flex-1 flex gap-x-6 md:gap-x-0 ">
        <Image src="/images/image-retro-pcs.jpg" width={100} height={140} />

        <div>
          <h1 className="text-3xl font-bold text-slate-300 md:p-2">01</h1>
          <h1 className="font-bold text-black md:p-2">Reviving Retro PCs</h1>
          <p className="text-sm md:p-2 text-slate-400">
            what happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex-1 flex  gap-x-6 md:gap-x-0  ">
        <Image src="/images/image-top-laptops.jpg" width={100} height={140} />
        <div>
          <h1 className="text-3xl font-bold text-slate-300 md:p-2">02</h1>
          <h1 className="font-bold text-black md:p-2">
            Top 10 Laptops of 2022
          </h1>
          <p className="text-sm md:p-2 text-slate-400">
            Our best picks for various needs and budgets
          </p>
        </div>
      </div>
      <div className="flex-1 flex  gap-x-6 md:gap-x-0  ">
        <Image src="/images/image-gaming-growth.jpg" width={100} height={140} />
        <div>
          <h1 className="text-3xl font-bold text-slate-300 md:p-2">03</h1>
          <h1 className="font-bold text-black md:p-2">The Growth of Gaming</h1>
          <p className="text-sm md:p-2 text-slate-400">
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastPart;

import Image from "next/image";
import React from "react";

const LastPart = () => {
  return (
    <div className="flex mt-10 h-[150px]">
      <div className="flex-1 flex ">
        <Image src="/images/image-retro-pcs.jpg" width={100} height={120} />
        <div>
          <h1 className="text-3xl font-bold text-slate-300 p-2">01</h1>
          <h1 className="font-bold text-black p-2">Reviving Retro PCs</h1>
          <p className="text-sm p-2 text-slate-400">
            what happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex-1 flex gap-x-3">
        <Image src="/images/image-top-laptops.jpg" width={100} height={120} />
        <div>
          <h1 className="text-3xl font-bold text-slate-300">02</h1>
          <h1 className="font-bold text-black mt-2">Top 10 Laptops of 2022</h1>
          <p className="text-sm p-2 text-slate-400">
            Our best picks for various needs and budgets
          </p>
        </div>
      </div>
      <div className="flex-1 flex gap-x-3">
        <Image src="/images/image-gaming-growth.jpg" width={100} height={120} />
        <div>
          <h1 className="text-3xl font-bold text-slate-300">03</h1>
          <h1 className="font-bold text-black mt-2">The Growth of Gaming</h1>
          <p className="text-sm p-2 text-slate-400">
            How the pandemic has sparked fresh opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastPart;

import Image from "next/image";
import React from "react";

const LastPart = () => {
  return (
    <div className="flex mt-10">
      <div className="flex-1 flex gap-x-3">
        <Image src="/images/image-retro-pcs.jpg" width={100} height={200} />
        <div>
          <h1>01</h1>
          <h1>Reviving Retro PCs</h1>
          <p>what happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex-1 flex gap-x-3">
        <Image src="/images/image-top-laptops.jpg" width={100} height={200} />
        <div>
          <h1>01</h1>
          <h1>Reviving Retro PCs</h1>
          <p>what happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex-1 flex gap-x-3">
        <Image src="/images/image-gaming-growth.jpg" width={100} height={200} />
        <div>
          <h1>01</h1>
          <h1>Reviving Retro PCs</h1>
          <p>what happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
    </div>
  );
};

export default LastPart;

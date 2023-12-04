import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-12 flex ">
      <div>
        <div>
          <Image
            src="/images/image-web-3-desktop.jpg"
            width={650}
            height={80}
          />
        </div>
        <div className="flex  w-[650px]">
          <h1 className="flex-1">The Bright Future of Web 3.0? </h1>
          <div className="flex-1">
            <p>
              We dive into the nextevolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="bg-black ms-5 w-[490px]">
        <div>
          <h1 className="text-orange-300 text-2xl font-semibold mt-5 ml-3 p-2">
            New
          </h1>
        </div>
        <div className="p-5">
          <h1 className="text-white font-semibold cursor-pointer hover:text-orange-300">
            Hydrogen VS Electric Cars
          </h1>
          <p className="text-slate-400">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr className="mt-5 me-2 bg-slate-400" />
          <h1 className="text-white font-semibold cursor-pointer hover:text-orange-300 mt-5">
            The Downsides od AI Artistry
          </h1>
          <p className="text-slate-400">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="mt-5 me-2" />
          <h1 className="text-white font-semibold cursor-pointer hover:text-orange-300 mt-5">
            Is VC Funding Drying Up?
          </h1>
          <p className="text-slate-400">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

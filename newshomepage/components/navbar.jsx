import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Image src="./images/logo.svg" width={65} height={40} />
      </div>
      <div className="flex gap-x-5 text-slate-400">
        <Link href="http://" className=" hover:text-orange-600">
          Home
        </Link>
        <Link href="http://" className=" hover:text-orange-600">
          New
        </Link>
        <Link href="http://" className=" hover:text-orange-600">
          Popular
        </Link>
        <Link href="http://" className=" hover:text-orange-600">
          Trending
        </Link>
        <Link href="http://" className=" hover:text-orange-600">
          Categories
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

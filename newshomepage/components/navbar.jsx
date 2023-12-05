"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Image src="./images/logo.svg" width={65} height={40} />
      </div>
      <button className="sm:hidden cursor-pointer">
        <div className="h-full bg-white w-1/2 flex flex-col justify-end">
          <button className="flex justify-end">X</button>
          <div>
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
      </button>
      <div className="sm:flex gap-x-5 text-slate-400 hidden ">
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

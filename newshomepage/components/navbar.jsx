"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Image src="./images/logo.svg" width={65} height={40} />
      </div>
      <div className="sm:hidden cursor-pointer">
        <div onClick={handleClick}>
          {" "}
          {isMenuOpen ? (
            <div className=" bg-white w-1/2 h-screen fixed top-0 right-0 overflow-y-auto transition transform duration-200 ease-in-out">
              <button className="flex justify-end text-3xl font-bold mt-10">
                X
              </button>
              <div className="flex flex-col gap-y-6 mt-5 ms-5 font-semibold text-slate-400">
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
          ) : (
            <Image src="./images/icon-menu.svg" width={65} height={40} />
          )}
        </div>
      </div>
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

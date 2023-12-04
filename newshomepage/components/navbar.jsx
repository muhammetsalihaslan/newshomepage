import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Image src="./images/logo.svg" width={65} height={40} />
      </div>
      <div>
        <Link href="http://">Home</Link>
        <Link href="http://">New</Link>
        <Link href="http://">Popular</Link>
        <Link href="http://">Trending</Link>
        <Link href="http://">Categories</Link>
      </div>
    </div>
  );
};

export default Navbar;

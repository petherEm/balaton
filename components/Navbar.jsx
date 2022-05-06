import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-4 z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/Balaton-logos_black.png"
            width="100px"
            height="100px"
            className="cursor-pointer"
          />
        </Link>
        <div className="lg:flex md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="#features">Plan</Link>
          <Link href="#gallery">Galeria</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

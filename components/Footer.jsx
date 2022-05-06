import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="container mt-10 flex items-center justify-center lg:w-1/2 md:w-1/2 h-20 text-black m-4">
      <div className="lg:text-xl md:text-xl text-md flex justify-center items-center gap-x-2">
        Developed with{" "} <HiHeart style={{color: "red"}}/> by{" "}
        <Link href="https://www.piotrmaciejewski.com" target="_blank">
          <span className="font-bold cursor-pointer">Piotr Maciejewski</span>
        </Link>
      </div>
      <div className="hidden lg:flex md:flex items-center justify-between mx-auto lg:gap-x-4 md:gap-x-4 gap-x-2">
        <Link href="https://github.com/petherEm" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ fontSize: "25px", cursor: "pointer" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/piotrek-maciejewski/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ fontSize: "25px", cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

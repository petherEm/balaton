import Link from "next/link";
import React from "react";
import Image from "next/image";

import { HiSun, HiTrendingDown, HiOutlineSwitchVertical, HiCash } from "react-icons/hi";


const Hero = ({ data }) => {
  
  return (
    <div className="container relative">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image src="/44.jpeg" layout="fill" objectFit="cover" />
      </div>

      <div className="container relative flex flex-col-reverse md:flex-row lg:justify-around md:justify-around justify-center lg:items-start md:items-start items-center mx-auto mt-10 space-y-0 md:space-y-0">
        {/* Left */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 z-50 p-12">
          <h1 className="max-w-md text-4xl font-bold text-white text-center md:text-6xl md:text-left">
            Balaton w drugą stronę
          </h1>
          <p className="max-w-sm text-center text-slate-100 md:text-left">
            Tym razem zdecydowaliśmy objechać piękny Balaton w stronę zachodnią, startując znów z Balatonfured na południu jeziora.
            Przed nami 3 dni pięknej pogody i ok 220km trasy.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="#features">
              <button className="p-3 px-6 pt-2 text-white bg-blue-600 rounded-full baseline hover:bg-blue-700">
                Jedziemy
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="md:w-1/4 w-3/4 bg-blue-600/50 max-h-fit rounded-2xl p-4 z-50 text-white shadow-lg">
          
          <div className="flex items-center gap-x-2"><HiSun style={{ fontSize: "25px", color: "gold"  }}/>Aktualna temp. {Math.round(data.main.temp)} °C</div>
          <div className="flex items-center gap-x-2"><HiTrendingDown style={{ fontSize: "25px", color: "gold"  }}/>Odczuwalna {Math.round(data.main.feels_like)} °C</div>
          <div className="flex items-center gap-x-2"><HiOutlineSwitchVertical style={{ fontSize: "25px", color: "gold"  }}/>Ciśnienie {Math.round(data.main.pressure)} hPa</div>
          <br />
          <div className="flex items-center gap-x-2"><HiCash style={{ fontSize: "25px", color: "gold"  }}/>FX: 10 PLN = 811 HUF </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;


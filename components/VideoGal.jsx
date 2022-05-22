import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";



const VideoGal = () => {
  return (
    <div
      id="videos"
      className="flex flex-col max-w-6xl px-5 mx-auto mt-32 text-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center">Videos</h2>

      <div className="flex items-center justify-center flex-wrap gap-4 rounded-md">
        <video src="Day1.MP4" type="video/mp4" width="400" height="300" controls>Video</video>
        <video src="Day2.MP4" type="video/mp4" width="400" height="300" controls>Video</video>
        <video src="Day3.MP4" type="video/mp4" width="400" height="300" controls>Video</video>
      </div>

      
    </div>
  );
};

export default VideoGal;

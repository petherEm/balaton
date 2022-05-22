import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: '/best/1.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 2,
    src: '/best/2.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 3,
    src: '/best/3.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 4,
    src: '/best/4.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 5,
    src: '/best/5.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 6,
    src: '/best/6.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 7,
    src: '/best/7.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 8,
    src: '/best/8.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 9,
    src: '/best/9.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 10,
    src: '/best/10.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 11,
    src: '/best/11.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 12,
    src: '/best/12.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 13,
    src: '/best/13.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 14,
    src: '/best/14.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 15,
    src: '/best/15.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 16,
    src: '/best/16.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 17,
    src: '/best/17.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 18,
    src: '/best/18.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 19,
    src: '/best/19.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 20,
    src: '/best/20.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 21,
    src: '/best/21.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 22,
    src: '/best/22.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 23,
    src: '/best/23.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 24,
    src: '/best/24.jpeg',
    legend: 'Widok z okna'
  },
  {
    id: 25,
    src: '/best/25.jpeg',
    legend: 'Widok z okna'
  }

]

const GalleryNew = () => {
  return (
    <div
      id="gallery"
      className="flex flex-col max-w-6xl px-5 mx-auto mt-32 text-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center">Galeria</h2>

      <Carousel
        dynamicHeight={true}
        dynamicWidth={true}
        className=""
        showThumbs={false}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.src} width={1200} height={800} objectFit="cover" />
            {/* <p className="legend">{photo.legend}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryNew;

import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="flex flex-col max-w-6xl px-5 mx-auto mt-32 text-center justify-center">
      <h2 className="text-4xl font-bold text-center">Galeria</h2>

      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/4">
          Miejsce na fotki
          {/* <h5 className="text-lg font-bold">Description</h5> */}
          <p className="text-sm text-indigo-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            mollitia.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/4">
          Miejsce na fotki
          {/* <h5 className="text-lg font-bold">Description</h5> */}
          <p className="text-sm text-indigo-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            mollitia.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/4">
          Miejsce na fotki
          {/* <h5 className="text-lg font-bold">Description</h5> */}
          <p className="text-sm text-indigo-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            mollitia.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-200 md:w-1/4">
          Miejsce na fotki
          {/* <h5 className="text-lg font-bold">Description</h5> */}
          <p className="text-sm text-indigo-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            mollitia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

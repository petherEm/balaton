import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { HiFlag } from "react-icons/hi";

import Master from "../data/master";

const Map = () => {
  const [currentPlaceID, setCurrentPlaceID] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46.8303,
    longitude: 17.734,
    zoom: 8,
  });

  const handleMarkerClick = (e) => {
    setCurrentPlaceID(e);
  };

  return (
    <div className="h-[400px]">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.mapbox_key}
        onMove={(e) => setViewport(e.viewport)}
        mapStyle="mapbox://styles/petherem/ckru6rvn91kcp17qscy6c62rn"
      >
        {Master.map((i) => (
          <div key={i.ID}>
            <Marker
              latitude={i.Lat}
              longitude={i.Long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <HiFlag
                onClick={() => handleMarkerClick(i.ID)}
                style={{ fontSize: "20px", color: i.Color }}
              />
            </Marker>
            {currentPlaceID === i.ID ? (
              <Popup
                latitude={i.Lat}
                longitude={i.Long}
                closeButton={true}
                closeOnClick={false}
                className=""
                anchor="left"
                onClick={() => handleMarkerClick(null)}
              >
                <div className="">
                  <p className="font-bold">{i.Name}</p>
                  <p className="">{i.Address}</p>
                  <p className="mt-2">{i.Description}</p>
                  <p className="mt-2 font-bold text-indigo-500"><a href={i.Link} target="_blank" rel="noreferrer">Link do hotelu</a></p>
                  
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}

        <NavigationControl />
        <FullscreenControl />
      </ReactMapGL>
    </div>
  );
};

export default Map;

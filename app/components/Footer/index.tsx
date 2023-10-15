"use client";

import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const libraries = React.useMemo(() => ["places"], []);

  const isXs = useMediaQuery({
    query: `(max-width: 370px)`,
  });
  const isSm = useMediaQuery({
    query: `(max-width: 550px)`,
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const mapCenter = React.useMemo(
    () => ({ lat: -30.032948898244435, lng: -51.20366138673213 }),
    []
  );

  const mapOptions = React.useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 3.0,
      },
      streetViewControl: true,
      streetViewControlOptions: {
        position: 9.0,
      },
    }),
    []
  );

  return (
    <footer className="footer p-10 text-[--fg] mt-4 items-start flex flex-col md:flex-row md:justify-between md:items-center lg:items-start">
      <aside className="mr-2">
        <span className="font-bold text-2xl md:text-3xl tracking-wider mb-4">
          +55 51 3737-2728
        </span>
        <div className="flex flex-col gap-4 text-lg">
          <div>R. Vasco da Gama, 837 - RS</div>
          <div>We work from 8:00 to 21:30</div>
          <div>hanamisushi@gmail.com</div>
        </div>
      </aside>
      {isLoaded ? (
        <div className="relative">
          <GoogleMap
            options={mapOptions}
            zoom={18}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{
              width: isXs ? 250 : 400,
              height: isXs ? "200px" : isSm ? "240px" : "200px",
              border: "6px solid white",
            }}
            onLoad={() => console.log("Map Component Loaded...")}
          >
            <MarkerF
              position={mapCenter}
              onLoad={() => console.log("Marker Loaded")}
            />
          </GoogleMap>
          <div
            className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] left-[-25px] rotate-[-30deg] opacity-60`}
          />
          <div
            className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] right-[-25px] rotate-[30deg] opacity-60`}
          />
        </div>
      ) : (
        <div className="w-[300px] h-[200px] md:w-[400px] md:h-[200px] animate-pulse bg-zinc-400 relative border-4 border-white">
          <div
            className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] left-[-25px] rotate-[-30deg] opacity-60`}
          />
          <div
            className={`w-12 h-6 bg-[#EEECD3] absolute top-[-10px] right-[-25px] rotate-[30deg] opacity-60`}
          />
        </div>
      )}
      <nav className="ml-2">
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}

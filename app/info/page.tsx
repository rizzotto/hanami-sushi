"use client";
import Image from "next/image";
import infoTitle from "../assets/info_title.svg";
import ItemDashed from "../components/ItemDashed";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export default function Info() {
  const libraries = React.useMemo(() => ["places"], []);

  const isSm = useMediaQuery({
    query: `(max-width: 835px)`,
  });
  const isXs = useMediaQuery({
    query: `(max-width: 530px)`,
  });

  const mapCenter = React.useMemo(
    () => ({ lat: -30.032948898244435, lng: -51.20366138673213 }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Image alt="Info title" src={infoTitle} style={{ objectFit: "cover" }} />

      <div className="w-full max-w-[800px]">
        <ItemDashed title="Minimum order" value="10$" />
        <ItemDashed title="Delivery cost" value="5$" />
        <ItemDashed title="Free delivery over" value="40$" />
      </div>

      {!isLoaded ? (
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] animate-pulse bg-zinc-400 relative border-[12px] border-white">
          <div
            className={`w-20 h-6 bg-[#EEECD3] absolute top-[-10px] left-[-25px] rotate-[-30deg] opacity-60`}
          />
          <div
            className={`w-20 h-6 bg-[#EEECD3] absolute top-[-10px] right-[-25px] rotate-[30deg] opacity-60`}
          />
        </div>
      ) : (
        <div className="relative mt-4">
          <GoogleMap
            options={mapOptions}
            zoom={14}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{
              width: isXs ? "300px" : isSm ? "500px" : "800px",
              height: isXs ? "300px" : isSm ? "500px" : "800px",
              border: "12px solid white",
            }}
            onLoad={(map) => console.log("Map Loaded")}
          >
            <MarkerF
              position={mapCenter}
              onLoad={() => console.log("Marker Loaded")}
            />

            {[1000, 2500].map((radius, idx) => {
              return (
                <CircleF
                  key={idx}
                  center={mapCenter}
                  radius={radius}
                  onLoad={() => console.log("Circle Load...")}
                  options={{
                    fillColor: radius > 1000 ? "#FDB288" : "#6fcf97",
                    strokeColor: radius > 1000 ? "#1b1b1b" : "#1b1b1b",
                    strokeOpacity: 0.8,
                  }}
                />
              );
            })}
          </GoogleMap>
          <div
            className={`w-20 h-6 bg-[#EEECD3] absolute top-[-10px] left-[-25px] rotate-[-30deg] opacity-60`}
          />
          <div
            className={`w-20 h-6 bg-[#EEECD3] absolute top-[-10px] right-[-25px] rotate-[40deg] opacity-80`}
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#6fcf97] w-8 h-8 border border-[--fg]" />
          <div className="font-bold">Delivery within</div>
          <div className="font-bold">30-45</div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[--bg] w-8 h-8 border border-[--fg]" />
          <div className="font-bold">Delivery within</div>
          <div className="font-bold">45-60</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-3 w-full max-w-[800px]">
        <li className="font-bold">
          Pickup at the address: R. Vasco da Gama, 837 - Bom Fim, Porto Alegre -
          RS (working hours 8:00 - 21:30).
        </li>
        <li className="font-bold">
          Payment options: cash, card on the website or courier. We accept Visa,
          Mastercard.
        </li>
      </div>
    </div>
  );
}

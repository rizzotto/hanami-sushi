"use client";
import React from "react";
import title from "./assets/home_title.svg";
import rope from "./assets/rope.svg";
import ropeVertical from "./assets/rope_vertical.svg";
import hashi from "./assets/hashi.svg";
import nigiriHome from "./assets/nigiri_home.svg";
import plate from "./assets/plate.svg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";
import Link from "next/link";

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints: any = fullConfig.theme?.screens;

export default function Home() {
  const [hover, setHover] = React.useState(false);
  const isSm = useMediaQuery({
    query: `(max-width: ${breakpoints?.sm})`,
  });

  console.log(isSm);

  return (
    <div className="flex flex-col h-max md:h-[85vh] items-center justify-evenly">
      {/* <h1>Home</h1> */}
      <Image
        alt="Home Title"
        quality={100}
        src={title}
        width={800}
        height={400}
      />
      <div className="relative w-full flex flex-col md:flex-row gap-8 justify-between items-center">
        {isSm ? (
          <Image alt="Nigiri" src={nigiriHome} width={300} height={200} />
        ) : (
          <Image alt="Hashi" src={hashi} width={300} height={200} />
        )}
        <Link href="/menu">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            // hover:bg-[#f1f1f1] hover:text-[--fg]
            className="btn btn-outline btn-lg relative hover:bg-[--bg] hover:border-[--fg] hover:text-[--fg]"
          >
            <div className="z-10">Order Now</div>
            {/* {hover && (
            <svg
              className="absolute top-[-32px]"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="a">
                  <feTurbulence
                    result="TURBULENCE"
                    baseFrequency=".09"
                    seed="1"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="TURBULENCE"
                    scale="20"
                  />
                </filter>
                <filter id="b">
                  <feOffset dy="50" result="OFFSET-3" />
                </filter>
                <mask id="c">
                  <path fill="#fff" d="M0 0h1000v1000H0z" />
                  <circle cx="391" cy="200" r="8" filter="url(#a)" />
                  <circle cx="631" cy="410" r="5" filter="url(#a)" />
                  <circle cx="725" cy="423" r="5" filter="url(#a)" />
                  <circle cx="683" cy="605" r="5" filter="url(#a)" />
                  <g filter="url(#b)">
                    <path
                      fill="none"
                      stroke-width="8"
                      stroke="#000"
                      d="M697.5 695q-218.5 89-437 0"
                      filter="url(#a)"
                    />
                  </g>
                  <g filter="url(#b)">
                    <path
                      fill="none"
                      stroke-width="6"
                      stroke="#000"
                      d="M260.5 280.5q218.5-82 437 0"
                      filter="url(#a)"
                    />
                  </g>
                </mask>
              </defs>
              <g mask="url(#c)">
                <path
                  filter="url(#a)"
                  fill="#f1b487"
                  d="M697.5 695q-197.5 195-437 0t0-414.5q239.5-219.5 437 0t0 414.5Z"
                />
              </g>
            </svg>
          )} */}
          </button>
        </Link>
        {!isSm && (
          <Image
            alt="Plate"
            quality={100}
            src={plate}
            width={300}
            height={200}
          />
        )}
      </div>
      {isSm ? (
        <Image
          alt="Rope Vertical"
          src={ropeVertical}
          height={400}
          width={200}
          // objectFit="fill"
          // layout="responsive"
        />
      ) : (
        <Image alt="Rope" src={rope} objectFit="cover" layout="responsive" />
      )}
    </div>
  );
}

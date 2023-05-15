import * as React from "react";
import { IconProps } from "./types";

function IconWebpack(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      width="80"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <radialGradient
            id="a"
            cx="-236.884"
            cy="-171.086"
            r="0.006"
            gradientTransform="matrix(2157.515, 0, 0, -2491.283, 511096.688, -426208.482)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#93b4e7"></stop>
            <stop offset="0.593" stopColor="#b9d1f8"></stop>
            <stop offset="1" stopColor="#9cb6e0"></stop>
          </radialGradient>
        </defs>
        <title>file_type_webpack</title>
        <path
          d="M16,2.043,3.9,9.032V23.011L16,30l12.106-6.989V9.032Z"
          style={{ fill: "url(#a)" }}
        ></path>
        <path
          d="M16,9.133,10,12.6v6.932L16,23l6-3.466V12.6Z"
          style={{ fill: "#6f95db" }}
        ></path>
        <path
          d="M16,2,3.869,9.037,16,15.642,28.131,9.08Zm0,14.548L3.869,22.981,16,29.974l12.088-7.037L16,16.548Z"
          style={{ fill: "#ffffff", fillOpacity: 0.100000001490116 }}
        ></path>
      </g>
    </svg>
  );
}

export default IconWebpack;

import React from "react";

function HorseIcon() {
  return (
    <svg viewBox="1 1 43 43" width="100" className="mb-4">
      <g>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="45"
          height="45"
        >
          <g
            style={{
              opacity: 1,
              fill: "none",
              fillOpacity: 1,
              fillRule: "evenodd",
              stroke: "black",
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 4,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
          >
            <path
              d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
              fill="white"
              stroke="black"
            />
            <path
              d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
              fill="white"
              stroke="black"
            />
            <circle cx="9.5" cy="25.5" r="0.5" fill="black" stroke="black" />
            <ellipse
              cx="15"
              cy="15.5"
              rx="0.5"
              ry="1.5"
              fill="black"
              stroke="black"
              transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
            />
          </g>
        </svg>
      </g>
    </svg>
  );
}

export default HorseIcon;

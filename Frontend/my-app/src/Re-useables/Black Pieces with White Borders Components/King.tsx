import React, { useContext } from "react";
import WindowSizeContext from "../../store/WindowSizeContext";

function King() {
  const { squareWidth } = useContext(WindowSizeContext);
  return (
    <div
      style={{
        width: squareWidth,
        height: squareWidth,

        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      {/*svg width and height, second svg width and height, g stroke */}
      <svg
        width={squareWidth}
        height={squareWidth}
        display="block"
        viewBox="1 1 43 43"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinejoin="miter"
              d="M22.5 11.63V6"
            ></path>
            <path
              fill="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
            ></path>
            <path
              fill="#000"
              d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"
            ></path>
            <path strokeLinejoin="miter" d="M20 8h5"></path>
            <path
              stroke="#FFF"
              d="M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5"
            ></path>
            <path
              stroke="#FFF"
              d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"
            ></path>
          </g>
        </svg>
      </svg>
      {/* */}
    </div>
  );
}

export default King;

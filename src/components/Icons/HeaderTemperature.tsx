import React from "react";

const HeaderTemperature = (props: any) => {
  return (
    <svg
      {...props}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.7662 149.19C-2.72461 122.438 1.39993 94.9502 13.5447 70.6939L19.4892 73.6702C7.97517 96.6667 4.06483 122.727 8.3224 148.09L1.7662 149.19Z"
        fill="#28D4EC"
      />
      <path
        d="M18.7079 61.3724C32.8282 38.2103 53.9419 20.1331 79.0026 9.74918L81.5474 15.8908C57.7883 25.7354 37.7711 42.8737 24.3842 64.8328L18.7079 61.3724Z"
        fill="#28EC30"
      />
      <path
        d="M89.8086 5.83038C115.7 -2.26346 143.493 -1.92241 169.178 6.80432L167.039 13.0989C142.688 4.82538 116.339 4.50204 91.7921 12.1755L89.8086 5.83038Z"
        fill="#FFDA3D"
      />
      <path
        d="M241.516 68.8543C254.05 92.9115 258.618 120.329 254.559 147.15L247.986 146.156C251.834 120.727 247.504 94.7339 235.62 71.9262L241.516 68.8543Z"
        fill="#FF0101"
      />
      <path
        d="M176.061 9.36539C201.203 19.5508 222.459 37.4605 236.762 60.5102L231.113 64.0154C217.553 42.1628 197.401 25.1833 173.565 15.5269L176.061 9.36539Z"
        fill="#FFAA30"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_10044"
          x1="223.5"
          y1="90.9995"
          x2="29.5"
          y2="133.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0000" />
          <stop offset="0.229167" stopColor="#FF9B2B" />
          <stop offset="0.515625" stopColor="#FFEC42" />
          <stop offset="0.723958" stopColor="#28EC30" />
          <stop offset="0.994792" stopColor="#28D4EC" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeaderTemperature;

import React from "react";

function WaterAnimation() {
  return (
    <div className="flex-center">
      <svg width="500" height="500">
        <defs>
          <clipPath id="circle-mask">
            <circle cx="50%" cy="50%" r="200"></circle>
          </clipPath>
        </defs>
        <g clip-path="url(#circle-mask)">
          <circle cx="50%" cy="50%" r="200" fill="#003"></circle>
          <path
            id="water-5"
            fill="#119"
            d="M.5.5c41.37 0 41.37 42 82.75 42S124.62.5 166 .5s41.38 42 82.76 42S290.12.5 331.5.5V231H.5z"
          />
          <path
            id="water-4"
            fill="#22a"
            d="M.5.5c41.37 0 41.37 42 82.75 42S124.62.5 166 .5s41.38 42 82.76 42S290.12.5 331.5.5V231H.5z"
          />
          <path
            id="water-1"
            fill="#33c"
            d="M.5.5c41.37 0 41.37 42 82.75 42S124.62.5 166 .5s41.38 42 82.76 42S290.12.5 331.5.5V231H.5z"
          />

          <path
            id="water-3"
            fill="#44f"
            d="M.5.5c41.37 0 41.37 42 82.75 42S124.62.5 166 .5s41.38 42 82.76 42S290.12.5 331.5.5V231H.5z"
          />
          <g id="boat-2">
            <g id="boat-1">
              <path fill="#c9c8c8" d="M214.5 139h-143L143 68.5l71.5 70.5z" />
              <path fill="#e6e6e6" d="M0 55.5l143 13L71.5 139 0 55.5z" />
              <path fill="#d7d7d7" d="M143 68.5l143-13-71.5 83.5L143 68.5z" />
              <path
                fill="#c8c8c8"
                d="M286 55.5l-143 13-143-13 146.29-5.64L286 55.5z"
              />
              <path
                fill="#f0f0f0"
                d="M134.39 67.72l8.61.78 66.09-6.01L143 0l-8.61 67.72z"
              />
              <path
                fill="#fff"
                d="M81.72 62.93l52.67 4.79L143 0 81.72 62.93z"
              />
            </g>
          </g>
          <path
            id="water-2"
            fill="#66f"
            d="M.5.5c41.37 0 41.37 42 82.75 42S124.62.5 166 .5s41.38 42 82.76 42S290.12.5 331.5.5V231H.5z"
          />
        </g>
      </svg>
    </div>
  );
}

export default WaterAnimation;

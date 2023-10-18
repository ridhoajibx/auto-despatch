import "@/beer.css";
import { useEffect, useMemo, useState } from "react";

type Props = {
  className?: string;
  classWaveBack?: string;
  classWaveFront?: string;
  value?: number;
};

const Beer = ({ className, classWaveBack, classWaveFront, value }: Props) => {
  //   const tankiValue = useMemo(() => {
  //     let height: string = "h-0";
  //     if(value && value <= 10) {
  //         return height = "h-[10%]";
  //     } else if(value && value > 10 && value <= 20) {
  //         return height = "h-[20%]"
  //     } else if(value && value > 20 && value <= 30) {
  //         return height = "h-[30%]"
  //     } else if(value && value > 30 && value <= 50) {
  //         return height = "h-[50%]"
  //     } else if(value && value > 50 && value <= 70) {
  //         return height = "h-[70%]"
  //     }
  //     return height;
  //   }, [value]);

  return (
    <div id="stage" className={`stage ${className}`}>
      <div className="waves border-2 border-gray-5">
        <div
          className={`wave wave--back ${classWaveBack} ${
            value == 0 ? "hidden" : ""
          }`}
          style={{
            height: `${value}%`
          }}
        >
          <div className="water">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 32"
              preserveAspectRatio="none"
            >
              <title>wave2</title>
              <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
            </svg>
          </div>
          <div className="water">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 32"
              preserveAspectRatio="none"
            >
              <title>wave2</title>
              <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
            </svg>
          </div>
        </div>
        <div
          className={`wave wave--front ${classWaveFront} ${
            value == 0 ? "hidden" : ""
          }`}
          style={{
            height: `${value}%`
          }}
        >
          <div className="water">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 32"
              preserveAspectRatio="none"
            >
              <title>wave2</title>
              <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
            </svg>
          </div>
          <div className="water">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 32"
              preserveAspectRatio="none"
            >
              <title>wave2</title>
              <path d="M350,17.32V32H0V17.32C116.56,65.94,175-39.51,350,17.32Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beer;

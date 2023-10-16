import React, { useEffect, useState } from "react";
// import "./Tank.css"; 
// Define your CSS styles for the tank here

const Tank: React.FC = () => {
  const [fillLevel, setFillLevel] = useState<number>(0);

  useEffect(() => {
    const tankFill = document.getElementById("tankFill");
    if (!tankFill) return;

    const animateTank = () => {
      let currentFillLevel = 0;
      const animationSpeed = 0.5; // Adjust the speed

      const fillTank = () => {
        currentFillLevel += animationSpeed;
        if (currentFillLevel <= 100) {
          tankFill.setAttribute("height", `${currentFillLevel}%`);
          requestAnimationFrame(fillTank);
        }
      };

      fillTank();
    };

    animateTank();
  }, []);

  

  return (
    <div className="tank-container">
      <object data="Tank.svg" type="image/svg+xml" />
    </div>
  );
};

export default Tank;

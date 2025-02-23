"use client";;
import React from 'react';
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div className={`relative p-4 rounded-lg overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2975] to-[#00FFF1] opacity-50 rounded-lg"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

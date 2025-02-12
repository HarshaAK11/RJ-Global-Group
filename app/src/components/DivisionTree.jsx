"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const DivisionTree = () => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  return (
    <div
      className="relative flex items-center justify-center"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[500px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-end">
          <Circle ref={div2Ref} className="size-20">
            <img 
              src="https://picsum.photos/seed/tech/64/64" 
              alt="Tech" 
              className="w-full h-full rounded-full object-cover"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="size-24">
            <img 
              src="https://picsum.photos/seed/main/80/80" 
              alt="Main" 
              className="w-full h-full rounded-full object-cover"
            />
          </Circle>
          <Circle ref={div3Ref} className="size-20">
            <img 
              src="https://picsum.photos/seed/media/64/64" 
              alt="Media" 
              className="w-full h-full rounded-full object-cover"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-end">
          <Circle ref={div4Ref} className="size-20">
            <img 
              src="https://picsum.photos/seed/creative/64/64" 
              alt="Creative" 
              className="w-full h-full rounded-full object-cover"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div1Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div1Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div1Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
};

export default DivisionTree;

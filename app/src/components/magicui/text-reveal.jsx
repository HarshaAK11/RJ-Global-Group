"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const TextReveal = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.7"]
  });
  
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative min-h-[30vh]", className)}>
      <p className="flex flex-wrap text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute text-gray-200">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className="relative text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};

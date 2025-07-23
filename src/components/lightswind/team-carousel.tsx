"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils"; // Utility to merge class names

export interface Location {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamCarouselProps {
  members: Location[];
  title?: string;
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  titleColor?: string;
  background?: string;
  cardWidth?: number;
  cardHeight?: number;
  cardRadius?: number;
  showArrows?: boolean;
  showDots?: boolean;
  visibleCards?: number;
  grayscaleEffect?: boolean;
  onMemberChange?: (location: Location, index: number) => void;
  onCardClick?: (location: Location, index: number) => void;
}

export const TeamCarousel: React.FC<TeamCarouselProps> = ({
  members,
  title = "Featured Locations",
  titleSize = "2xl",
  titleColor = "#47B5FF",
  background = "#1E3A8A",
  cardWidth = 457,
  cardHeight = 479,
  cardRadius = 30,
  showArrows = true,
  showDots = true,
  visibleCards = 3,
  grayscaleEffect = false,
  onMemberChange,
  onCardClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalMembers = members.length;

  const paginate = (direction: number) => {
    const nextIndex = (currentIndex + direction + totalMembers) % totalMembers;
    setCurrentIndex(nextIndex);
    onMemberChange?.(members[nextIndex], nextIndex);
  };

  const calculatePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "center";
    if (Math.abs(diff) <= visibleCards)
      return diff > 0 ? `right-${Math.abs(diff)}` : `left-${Math.abs(diff)}`;
    return "hidden";
  };

  const getVariantStyles = (position: string) => {
    const transition = { duration: 0.3 };

    switch (position) {
      case "center":
        return {
          opacity: 1,
          scale: 1.1,
          x: 0,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-1":
      case "left-1":
        return {
          opacity: 0.7,
          scale: 0.9,
          x: position === "right-1" ? cardWidth * 0.7 : -cardWidth * 0.7,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "auto",
          transition,
        };
      case "right-2":
      case "left-2":
        return {
          opacity: 0.5,
          scale: 0.8,
          x: position === "right-2" ? cardWidth * 1.4 : -cardWidth * 1.4,
          filter: grayscaleEffect ? "grayscale(100%)" : "grayscale(0%)",
          pointerEvents: "none",
          transition,
        };
      default:
        return { opacity: 0, x: 0, pointerEvents: "none", transition };
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative",
        background
      )}
      style={{ background: background }}
    >
      {/* Title */}
      {title && (
        <h1
          className={cn(
            "font-black text-center",
            titleSize === "2xl" ? "text-4xl" : "text-2xl"
          )}
          style={{
            color: titleColor,
          }}
        >
          {title}
        </h1>
      )}

      {/* Cards Container */}
      <div
        className="w-full flex justify-center items-center relative mt-20"
        style={{ height: cardHeight + 40 }}
      >
        {/* Arrows */}
        {showArrows && (
          <>
            <motion.button
              onClick={() => paginate(-1)}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
            >
              <ChevronRight size={20} />
            </motion.button>
          </>
        )}

        {/* Cards */}
        <div
          className="w-full flex gap-6 justify-center items-center overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence>
            {members.map((location, index) => {
              const position = calculatePosition(index);
              if (position === "hidden") return null;

              return (
                <motion.div
                  key={location.id}
                  className="relative flex-shrink-0"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: cardRadius,
                    zIndex: position === "center" ? 10 : 1,
                    opacity: position === "center" ? 1 : 0.7,
                    pointerEvents: position === "center" ? "auto" : "none",
                  }}
                  initial={getVariantStyles("hidden")}
                  animate={getVariantStyles(position)}
                  exit={getVariantStyles("hidden")}
                  onClick={() => onCardClick?.(location, index)}
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-black/40 rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold">
                      {location.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {location.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-3 mt-6">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#47B5FF]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Points for our abstract lattice/network graph
  const points = {
    start: { x: 100, y: 300 },
    mid: { x: 450, y: 150 },
    end: { x: 800, y: 350 },
    alt: { x: 600, y: 100 }
  };

  // We connect start -> mid -> end, and mid -> alt -> end
  const path1 = `M ${points.start.x} ${points.start.y} L ${points.mid.x} ${points.mid.y} L ${points.end.x} ${points.end.y}`;
  const path2 = `M ${points.mid.x} ${points.mid.y} L ${points.alt.x} ${points.alt.y} L ${points.end.x} ${points.end.y}`;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-0 right-0 w-full lg:w-[800px] h-[600px] opacity-40 mix-blend-screen transform translate-x-1/4 -translate-y-12">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMaxYMin slice"
        >
          <defs>
            <filter id="glow-hero" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="line-gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1C2026" stopOpacity="0" />
              <stop offset="50%" stopColor="#C84B15" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1C2026" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Connection Lines */}
          <motion.path
            d={path1}
            stroke="url(#line-gradient-hero)"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d={path2}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          />

          {/* Node Points */}
          {[points.start, points.mid, points.end, points.alt].map((pt, i) => (
            <motion.circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="3"
              fill="#4B4B5A"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
            />
          ))}

          {/* Moving Object (Dot) along Path 1 */}
          <motion.circle
            r="4"
            fill="#C84B15"
            filter="url(#glow-hero)"
            animate={{
              cx: [points.start.x, points.mid.x, points.end.x],
              cy: [points.start.y, points.mid.y, points.end.y],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 0.9, 1]
            }}
          />

          {/* Moving Object (Dot) along Path 2 */}
          <motion.circle
            r="3"
            fill="#E6E8EB"
            filter="url(#glow-hero)"
            animate={{
              cx: [points.mid.x, points.alt.x, points.end.x],
              cy: [points.mid.y, points.alt.y, points.end.y],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.9, 1],
              delay: 1.5
            }}
          />
        </svg>
      </div>
    </div>
  );
}

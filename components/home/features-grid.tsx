"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FeaturesGrid() {
  const [animated, setAnimated] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#181822] rounded-sm overflow-hidden border border-[#181822]">
      {/* 01 / CAPITAL */}
      <div className="bg-[#0A0A0F] p-8 flex flex-col justify-between h-[360px] group transition-all duration-300 hover:bg-[rgb(14,16,19)]">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={textVariants}
        >
          <p 
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: "0.04em",
              fontSize: "11px",
              textTransform: "uppercase",
              color: "rgb(192, 74, 27)",
              marginBottom: "16px"
            }}
          >
            01 / CAPITAL
          </p>
          <div 
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: 1.15,
              color: "rgb(230, 232, 235)",
              margin: "0px 0px 12px",
              letterSpacing: "-0.015em"
            }}
          >
            Capital, before it moves.
          </div>
          <p className="text-[12.5px] text-ml-text-secondary leading-relaxed max-w-[270px]">
            Run wallet-level simulations across emissions, liquidity routes, and treasury strategies. See outcomes before committing them on-chain.
          </p>
        </motion.div>
        
        {/* SVG Graphic - Bar Chart */}
        <div className="w-full mt-6 h-28 flex items-end">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C84B15" />
                <stop offset="100%" stopColor="#C84B15" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* Base Line */}
            <line x1="0" y1="95" x2="300" y2="95" stroke="#1C1C28" strokeWidth="1" />
            
            {/* Bars */}
            {[
              { x: 10, h: 25, active: false },
              { x: 30, h: 35, active: false },
              { x: 50, h: 48, active: false },
              { x: 70, h: 72, active: true },
              { x: 90, h: 90, active: true },
              { x: 110, h: 84, active: true },
              { x: 130, h: 68, active: true },
              { x: 150, h: 54, active: false },
              { x: 170, h: 42, active: false },
              { x: 190, h: 32, active: false },
              { x: 210, h: 22, active: false },
              { x: 230, h: 15, active: false },
              { x: 250, h: 10, active: false },
              { x: 270, h: 5, active: false },
            ].map((bar, i) => {
              const height = animated ? bar.h : 0;
              const y = 95 - height;
              return (
                <rect
                  key={i}
                  x={bar.x}
                  y={y}
                  width="10"
                  height={height}
                  fill={bar.active ? "url(#barGrad)" : "#181824"}
                  rx="1"
                  className="transition-all duration-1000 ease-out"
                  style={{ transitionDelay: `${i * 40}ms` }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* 02 / GOVERNANCE */}
      <div className="bg-[#0A0A0F] p-8 flex flex-col justify-between h-[360px] group transition-all duration-300 hover:bg-[rgb(14,16,19)]">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={textVariants}
        >
          <p 
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: "0.04em",
              fontSize: "11px",
              textTransform: "uppercase",
              color: "rgb(192, 74, 27)",
              marginBottom: "16px"
            }}
          >
            02 / GOVERNANCE
          </p>
          <div 
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: 1.15,
              color: "rgb(230, 232, 235)",
              margin: "0px 0px 12px",
              letterSpacing: "-0.015em"
            }}
          >
            Systems, in motion.
          </div>
          <p className="text-[12.5px] text-ml-text-secondary leading-relaxed max-w-[270px]">
            Operational runtime for governance behavior, incentive design, and capital coordination across protocols and L2 ecosystems.
          </p>
        </motion.div>

        {/* SVG Graphic - Overlapping Waves */}
        <div className="w-full mt-6 h-28">
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            {/* Secondary wave background */}
            <path
              d="M 10 80 Q 75 90 150 70 T 290 85"
              fill="none"
              stroke="#1C1C28"
              strokeWidth="1.5"
            />
            {/* Primary animated waves */}
            <path
              d={animated ? "M 10 75 Q 75 10 150 75 T 290 50" : "M 10 75 Q 75 75 150 75 T 290 75"}
              fill="none"
              stroke="#C84B15"
              strokeWidth="1.5"
              className="transition-all duration-[1500ms] ease-out"
            />
            <path
              d={animated ? "M 10 75 Q 75 25 150 65 T 290 60" : "M 10 75 Q 75 75 150 75 T 290 75"}
              fill="none"
              stroke="#C84B15"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              className="transition-all duration-[1800ms] ease-out"
            />
            {/* Decorative points */}
            {animated && (
              <>
                <circle cx="150" cy="70" r="3" fill="#C84B15" />
                <circle cx="215" cy="53" r="3" fill="#C84B15" />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* 03 / ENGINE */}
      <div className="bg-[#0A0A0F] p-8 flex flex-col justify-between h-[360px] group transition-all duration-300 hover:bg-[rgb(14,16,19)]">
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={textVariants}
        >
          <p 
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: "0.04em",
              fontSize: "11px",
              textTransform: "uppercase",
              color: "rgb(192, 74, 27)",
              marginBottom: "16px"
            }}
          >
            03 / ENGINE
          </p>
          <div 
            style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: 1.15,
              color: "rgb(230, 232, 235)",
              margin: "0px 0px 12px",
              letterSpacing: "-0.015em"
            }}
          >
            Strategy, with evidence.
          </div>
          <p className="text-[12.5px] text-ml-text-secondary leading-relaxed max-w-[270px]">
            Translate simulation outputs into deployment-ready economic decisions. Built for ecosystem teams who can&apos;t afford to guess.
          </p>
        </motion.div>

        {/* SVG Graphic - Heatmap Grid */}
        <div className="w-full mt-6 h-28 flex flex-col justify-between">
          <div className="grid grid-cols-8 gap-1.5 w-full">
            {[
              0.1, 0.2, 0.4, 0.1, 0.1, 0.3, 0.2, 0.1,
              0.2, 0.6, 0.8, 0.4, 0.2, 0.1, 0.4, 0.3,
              0.3, 0.8, 0.9, 0.6, 0.4, 0.2, 0.5, 0.1,
              0.1, 0.4, 0.5, 0.3, 0.1, 0.1, 0.2, 0.1
            ].map((opacity, idx) => {
              const currentOpacity = animated ? opacity : 0.05;
              return (
                <div
                  key={idx}
                  className="aspect-video rounded-[1px] transition-all duration-1000 ease-out"
                  style={{
                    backgroundColor: currentOpacity > 0.3 ? `rgba(200, 75, 21, ${currentOpacity})` : `rgba(28, 28, 40, ${currentOpacity * 2})`,
                    border: `1px solid rgba(28, 28, 40, ${currentOpacity})`,
                    transitionDelay: `${(idx % 8) * 50 + Math.floor(idx / 8) * 80}ms`
                  }}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-between text-[8px] font-mono text-ml-text-muted/40 tracking-wider select-none mt-2">
            <span>DECILES 01-10 + EMISSIONS-V2-FIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

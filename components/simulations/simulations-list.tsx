"use client";

import { useState } from "react";

const FILTER_TABS = ["All", "Treasury", "Governance", "Emissions", "Liquidity", "Launch"];

const SIMULATIONS = [
  {
    id: "SIM-0142",
    title: "Emission curve compression — L2 rollup",
    tags: ["EMISSIONS", "L2"],
    category: "Emissions",
    chart: "lines",
    epochs: "250",
    wallets: "12.4k",
    outcome: "+18.4% retention",
    outcomeColor: "#C04A1B",
  },
  {
    id: "SIM-0138",
    title: "Treasury rebalance under liquidity shock",
    tags: ["TREASURY", "STRESS"],
    category: "Treasury",
    chart: "sine",
    epochs: "180",
    wallets: "4.8k",
    outcome: "-6.2% drawdown",
    outcomeColor: "#5FB5A6",
  },
  {
    id: "SIM-0134",
    title: "Governance delegation concentration",
    tags: ["GOVERNANCE", "DAO"],
    category: "Governance",
    chart: "bars",
    epochs: "120",
    wallets: "31.2k",
    outcome: "Gini 0.71 → 0.54",
    outcomeColor: "#C04A1B",
  },
  {
    id: "SIM-0131",
    title: "Sybil-resistant launchpad allocation",
    tags: ["LAUNCH", "SYBIL"],
    category: "Launch",
    chart: "heatmap",
    epochs: "90",
    wallets: "84.0k",
    outcome: "Sybil yield -41%",
    outcomeColor: "#C04A1B",
  },
  {
    id: "SIM-0127",
    title: "Cross-chain liquidity migration model",
    tags: ["LIQUIDITY", "X-CHAIN"],
    category: "Liquidity",
    chart: "lines",
    epochs: "200",
    wallets: "6.1k",
    outcome: "Migration t≈42d",
    outcomeColor: "#5FB5A6",
  },
  {
    id: "SIM-0124",
    title: "Restaking yield-curve scenario set",
    tags: ["RESTAKING"],
    category: "Treasury",
    chart: "sine",
    epochs: "300",
    wallets: "9.4k",
    outcome: "12 scenarios mapped",
    outcomeColor: "#C04A1B",
  },
];

function MiniChartLines() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24 my-4 select-none">
      <defs>
        <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path d="M 10,70 L 290,80" fill="none" stroke="#2A2F3A" strokeWidth="8" strokeLinecap="round" />
      <path id="line-path" d="M 10,50 L 290,40" fill="none" stroke="#C04A1B" strokeWidth="8" strokeLinecap="round" />
      {/* Moving dot marquee animation */}
      <circle r="2.5" fill="#F97316" filter="url(#dot-glow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 10,50 L 290,40" />
      </circle>
    </svg>
  );
}

function MiniChartSine() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24 my-4 select-none">
      <defs>
        <filter id="dot-glow-sine" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path 
        d="M 10,50 Q 45,80 80,50 T 150,50 T 220,50 T 290,50" 
        fill="none" 
        stroke="#C04A1B" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      {/* Moving dot marquee animation */}
      <circle r="2.5" fill="#F97316" filter="url(#dot-glow-sine)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 10,50 Q 45,80 80,50 T 150,50 T 220,50 T 290,50" />
      </circle>
    </svg>
  );
}

function MiniChartBars() {
  const bars = [
    { h: 45, c: "orange", dur: "2.1s" },
    { h: 35, c: "grey", dur: "2.5s" },
    { h: 25, c: "grey", dur: "1.9s" },
    { h: 28, c: "orange", dur: "2.3s" },
    { h: 40, c: "grey", dur: "2.7s" },
    { h: 48, c: "grey", dur: "2.2s" },
    { h: 48, c: "orange", dur: "2.6s" },
    { h: 42, c: "grey", dur: "2.0s" },
    { h: 20, c: "grey", dur: "2.4s" },
    { h: 32, c: "orange", dur: "2.8s" },
    { h: 38, c: "grey", dur: "2.1s" },
    { h: 45, c: "grey", dur: "2.5s" },
    { h: 48, c: "orange", dur: "2.3s" },
    { h: 42, c: "grey", dur: "2.7s" },
    { h: 35, c: "grey", dur: "2.2s" },
    { h: 22, c: "orange", dur: "2.6s" },
    { h: 35, c: "grey", dur: "2.0s" },
    { h: 45, c: "grey", dur: "2.4s" },
    { h: 48, c: "orange", dur: "2.8s" },
    { h: 45, c: "grey", dur: "2.1s" },
  ];
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24 my-4 select-none">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={10 + i * 14}
          y={80 - b.h}
          width="10"
          height={b.h}
          fill={b.c === "orange" ? "#C04A1B" : "#2A2F3A"}
        >
          <animate 
            attributeName="height" 
            values={`${b.h};${b.h + 10};${b.h}`} 
            dur={b.dur} 
            repeatCount="indefinite" 
          />
          <animate 
            attributeName="y" 
            values={`${80 - b.h};${80 - (b.h + 10)};${80 - b.h}`} 
            dur={b.dur} 
            repeatCount="indefinite" 
          />
        </rect>
      ))}
    </svg>
  );
}

function MiniChartHeatmap() {
  const pattern = [
    "OOMVVMOMMMMVVMOMMMMV",
    "MMVVGXMOOMXXVGMOOMXG",
    "DMVGXXVDDMMXGVVDDMMV",
    "VDGXXGVVDDXXGVDDXXGV"
  ];
  const colorMap: Record<string, string> = {
    "O": "#C04A1B",
    "M": "#9B3811",
    "D": "#5A230F",
    "G": "#3E4853",
    "X": "#2A2F3A",
    "V": "#15181D"
  };

  const cells = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 20; c++) {
      const char = pattern[r][c];
      const fill = colorMap[char];
      
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={10 + c * 14.5}
          y={20 + r * 14.5}
          width="12.5"
          height="12.5"
          fill={fill}
        >
          {/* Add a subtle fade animation for orange cells to make it feel alive */}
          {(char === 'O' || char === 'M') && (
            <animate
              attributeName="opacity"
              values="1;0.6;1"
              dur={`${2 + (c % 3)}s`}
              begin={`${(r + c) * 0.1}s`}
              repeatCount="indefinite"
            />
          )}
        </rect>
      );
    }
  }
  return (
    <svg viewBox="0 0 300 100" className="w-full h-24 my-4 select-none">
      {cells}
    </svg>
  );
}

export function SimulationsList() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? SIMULATIONS
      : SIMULATIONS.filter((s) =>
          s.tags.some((t) => t.toLowerCase() === active.toLowerCase()) ||
          s.category === active
        );

  return (
    <div>
      {/* Filter tabs */}
      <div 
        className="rounded-sm overflow-hidden mb-8 w-full"
        style={{
          border: "1px solid rgb(28, 32, 38)",
          display: "flex",
          alignItems: "center",
          gap: "0px",
          background: "rgb(17, 19, 23)"
        }}
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`filter-tab text-center text-xs border-r border-[rgb(28,32,38)] ${
              active === tab ? "active bg-[rgb(14,16,19)]" : ""
            }`}
            style={{
              padding: "10px 18px"
            }}
          >
            {tab}
          </button>
        ))}
        <span 
          className="mono-label text-[10px] text-ml-text-muted border-l border-[rgb(28,32,38)] ml-auto whitespace-nowrap"
          style={{
            padding: "10px 18px"
          }}
        >
          {filtered.length} RUNS
        </span>
      </div>

      {/* Simulation cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgb(28,32,38)]">
        {filtered.map((sim) => (
          <div
            key={sim.id}
            className="bg-ml-bg p-6 hover:bg-[rgb(14,16,19)] transition-colors duration-150 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="sim-id">{sim.id}</span>
              <div className="flex gap-1.5">
                {sim.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                      letterSpacing: "0.04em",
                      fontSize: "9px",
                      textTransform: "uppercase",
                      color: "rgb(139, 144, 152)",
                      padding: "3px 7px",
                      border: "1px solid rgb(28, 32, 38)"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="mb-4 group-hover:text-white transition-colors"
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                color: "rgb(230, 232, 235)",
                lineHeight: 1.3
              }}
            >
              {sim.title}
            </div>

            {sim.chart === "lines" && <MiniChartLines />}
            {sim.chart === "sine" && <MiniChartSine />}
            {sim.chart === "bars" && <MiniChartBars />}
            {sim.chart === "heatmap" && <MiniChartHeatmap />}

            {/* Divider */}
            <div className="border-t border-[rgb(28,32,38)] my-4" />

            {/* Grid stats */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] font-mono tracking-widest text-[#6B6B7A] uppercase mb-1">
                  EPOCHS
                </p>
                <p className="text-[14px] text-white font-mono font-medium">
                  {sim.epochs}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest text-[#6B6B7A] uppercase mb-1">
                  WALLETS
                </p>
                <p className="text-[14px] text-white font-mono font-medium">
                  {sim.wallets}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest text-[#6B6B7A] uppercase mb-1">
                  OUTCOME
                </p>
                <p 
                  className="text-[14px] font-mono font-medium"
                  style={{
                    color: sim.outcomeColor
                  }}
                >
                  {sim.outcome}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

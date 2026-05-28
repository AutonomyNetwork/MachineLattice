"use client";

import { useEffect, useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  active?: boolean;
}

interface Edge {
  from: string;
  to: string;
  highlight?: boolean;
}

const NODES: Node[] = [
  { id: "TRSY", x: 180, y: 100 },
  { id: "LP-A", x: 350, y: 80 },
  { id: "DAO", x: 480, y: 110 },
  { id: "GOV", x: 550, y: 180 },
  { id: "VLT", x: 420, y: 240 },
  { id: "AMM", x: 280, y: 210, active: true },
  { id: "ORC", x: 150, y: 260 },
];

const EDGES: Edge[] = [
  { from: "TRSY", to: "AMM" },
  { from: "ORC", to: "AMM" },
  { from: "TRSY", to: "LP-A" },
  { from: "LP-A", to: "DAO" },
  { from: "DAO", to: "GOV" },
  { from: "GOV", to: "VLT" },
  { from: "VLT", to: "AMM" },
  { from: "AMM", to: "LP-A" },
];

const STATS = [
  { label: "TVL ROUTED", value: "146.0M", delta: "+ 0.24%", positive: true },
  { label: "ACTIVE WALLETS", value: "8464", delta: "+ 1.04%", positive: true },
  { label: "GOVERNANCE LOAD", value: "0.64", delta: "- 0.70%", positive: false },
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function SimulationPreview() {
  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    // Cycle the highlighted edges every 3 seconds
    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % (EDGES.length / 2));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-card p-0 overflow-hidden h-full bg-[#111317]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-ml-bg-border/60 bg-[#14181E]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C84B15]" />
          <span className="mono-label text-ml-text-primary text-[10px]">
            SIM/ARB-L2/EMISSIONS-V3
          </span>
        </div>
        <span className="mono-label text-ml-text-muted text-[10px]">
          RUN 0438 · EPOCH 142
        </span>
      </div>

      {/* Graph */}
      <div className="relative bg-[#111317]" style={{ height: 260 }}>
        <svg
          viewBox="0 0 640 300"
          className="w-full h-full animate-fade-in"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="card-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161622" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="640" height="300" fill="url(#card-grid)" />

          {/* All edges and moving dots */}
          {EDGES.map((e, i) => {
            const a = nodeById(e.from);
            const b = nodeById(e.to);
            const isHl = Math.floor(i / 2) === activeGroup;
            return (
              <g key={`edge-${i}`}>
                <line
                  className="transition-all duration-1000"
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke={isHl ? "#C84B15" : "#1F1F2F"} 
                  strokeWidth={isHl ? "1.5" : "1"}
                  strokeOpacity={isHl ? "0.85" : "1"}
                />
                {/* Moving dot */}
                <circle 
                  r={isHl ? "3" : "1.5"} 
                  fill={isHl ? "#C84B15" : "#4A4A62"}
                  className="transition-all duration-1000"
                >
                  <animateMotion 
                    dur={`${2.5 + (i % 3) * 0.5}s`} 
                    repeatCount="indefinite" 
                    path={`M ${a.x} ${a.y} L ${b.x} ${b.y}`} 
                  />
                </circle>
              </g>
            );
          })}

          {/* Nodes */}
          {NODES.map((node) => (
            <g key={node.id}>
              {node.active ? (
                <>
                  <circle
                    cx={node.x} cy={node.y} r={10}
                    fill="rgba(200, 75, 21, 0.15)"
                    className="animate-pulse"
                  />
                  <circle
                    cx={node.x} cy={node.y} r={4.5}
                    fill="#C84B15"
                  />
                </>
              ) : (
                <circle
                  cx={node.x} cy={node.y} r={3}
                  fill="#1C1C28"
                  stroke="#3A3A52"
                  strokeWidth="1"
                />
              )}
              <text
                x={node.x + 8} y={node.y + 3}
                fill={node.active ? "#F0F0F0" : "#4A4A62"}
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
                className="select-none"
              >
                {node.id}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Stats Table/Columns */}
      <div className="grid grid-cols-3 divide-x divide-ml-bg-border/60 border-t border-ml-bg-border/60">
        {STATS.map(({ label, value, delta, positive }) => (
          <div key={label} className="px-4 py-3">
            <p className="mono-label text-[8.5px] text-ml-text-muted mb-1.5">{label}</p>
            <p className="stat-value text-[22px] font-normal font-sans leading-none tracking-tight mb-1 text-ml-text-primary flex items-baseline">
              {value.endsWith("M") ? (
                <>
                  {value.slice(0, -1)}
                  <span className="text-xs text-ml-text-muted ml-0.5 select-none font-sans font-normal">M</span>
                </>
              ) : (
                value
              )}
            </p>
            <p className={`font-mono text-[9px] ${positive ? "text-ml-orange" : "text-ml-text-muted/60"}`}>
              {delta}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom attribution banner inside card */}
      <div className="bg-[#0E1013] border-t border-ml-bg-border/40 px-4 py-2.5 flex items-center justify-between text-[9px] font-mono text-ml-text-muted/70 select-none">
        <span>[LOG] treasury rebalance: 12.4% &rarr; reserve_A</span>
      </div>
    </div>
  );
}

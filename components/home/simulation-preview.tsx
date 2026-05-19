"use client";

import { useEffect, useRef } from "react";

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
  { id: "DAO", x: 420, y: 70 },
  { id: "LP-A", x: 320, y: 120 },
  { id: "GOV", x: 500, y: 130 },
  { id: "VLT", x: 470, y: 220 },
  { id: "TRSY", x: 300, y: 230 },
  { id: "LP-B", x: 140, y: 210 },
  { id: "AMM", x: 220, y: 150, active: true },
  { id: "ORC", x: 120, y: 90 },
];

const EDGES: Edge[] = [
  { from: "AMM", to: "DAO", highlight: true },
  { from: "AMM", to: "LP-A", highlight: true },
  { from: "AMM", to: "GOV", highlight: true },
  { from: "AMM", to: "VLT", highlight: true },
  { from: "AMM", to: "TRSY", highlight: true },
  { from: "AMM", to: "LP-B" },
  { from: "AMM", to: "ORC" },
  { from: "DAO", to: "GOV" },
  { from: "LP-A", to: "DAO" },
  { from: "GOV", to: "VLT" },
  { from: "VLT", to: "TRSY" },
  { from: "TRSY", to: "LP-B" },
  { from: "LP-B", to: "ORC" },
];

const STATS = [
  { label: "TVL ROUTED", value: "141.7M", delta: "+ 1.34%", positive: true },
  { label: "ACTIVE WALLETS", value: "8464", delta: "+ 0.92%", positive: true },
  { label: "GOVERNANCE LOAD", value: "0.63", delta: "- 0.57%", positive: false },
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function SimulationPreview() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate highlighted paths on load
    const paths = svgRef.current?.querySelectorAll(".hl-path");
    paths?.forEach((p) => {
      const el = p as SVGLineElement;
      const x1 = Number(el.getAttribute("x1"));
      const y1 = Number(el.getAttribute("y1"));
      const x2 = Number(el.getAttribute("x2"));
      const y2 = Number(el.getAttribute("y2"));
      const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      el.style.strokeDasharray = String(length);
      el.style.strokeDashoffset = String(length);
      el.style.transition = "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)";
      
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.strokeDashoffset = "0";
        }, 100);
      });
    });
  }, []);

  return (
    <div className="ml-card p-0 overflow-hidden h-full bg-[#0D0D13]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-ml-bg-border/60">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C84B15]" />
          <span className="mono-label text-ml-text-primary text-[10px]">
            SIM/ARB-L2/EMISSIONS-V3
          </span>
        </div>
        <span className="mono-label text-ml-text-muted text-[10px]">
          RUN 0077 · EPOCH 142
        </span>
      </div>

      {/* Graph */}
      <div className="relative bg-[#09090D]" style={{ height: 260 }}>
        <svg
          ref={svgRef}
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

          {/* Regular edges */}
          {EDGES.filter((e) => !e.highlight).map((e, i) => {
            const a = nodeById(e.from);
            const b = nodeById(e.to);
            return (
              <line
                key={i}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="#1F1F2F" strokeWidth="1"
              />
            );
          })}

          {/* Highlight edges */}
          {EDGES.filter((e) => e.highlight).map((e, i) => {
            const a = nodeById(e.from);
            const b = nodeById(e.to);
            return (
              <line
                key={`hl-${i}`}
                className="hl-path"
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="#C84B15" strokeWidth="1.5"
                strokeOpacity="0.85"
              />
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
            <p className="stat-value text-[22px] font-normal font-sans leading-none tracking-tight mb-1 text-ml-text-primary">
              {value}
            </p>
            <p className={`font-mono text-[9px] ${positive ? "text-ml-orange" : "text-ml-text-muted/60"}`}>
              {delta}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom attribution banner inside card */}
      <div className="bg-[#09090D] border-t border-ml-bg-border/40 px-4 py-2 flex items-center justify-between text-[8px] font-mono text-ml-text-muted/50 select-none">
        <span>LCC: governance load attributed | peak 0.28</span>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

const FILTER_TABS = ["All", "Treasury", "Governance", "Emissions", "Liquidity", "Launch"];

const SIMULATIONS = [
  {
    id: "SIM-0142",
    title: "Emission curve compression — L2 rollup",
    tags: ["EMISSIONS", "L2"],
    category: "Emissions",
    chart: "wave",
    epochs: "250",
    wallets: "12.4k",
    outcome: "+18.4% retention",
    positive: true,
  },
  {
    id: "SIM-0138",
    title: "Treasury rebalance under liquidity shock",
    tags: ["TREASURY", "STRESS"],
    category: "Treasury",
    chart: "wave",
    epochs: "120",
    wallets: "8.2k",
    outcome: "-1.1% slippage",
    positive: false,
  },
  {
    id: "SIM-0131",
    title: "Delegate concentration — post-airdrop DAO",
    tags: ["GOVERNANCE", "DAO"],
    category: "Governance",
    chart: "wave",
    epochs: "500",
    wallets: "4.1k",
    outcome: "+0.8% voting power",
    positive: true,
  },
  {
    id: "SIM-0127",
    title: "Sybil-resistant liquidity bootstrapping",
    tags: ["LIQUIDITY", "LAUNCH"],
    category: "Liquidity",
    chart: "wave",
    epochs: "180",
    wallets: "24.5k",
    outcome: "+5.4% efficiency",
    positive: true,
  },
  {
    id: "SIM-0119",
    title: "Quorum decay under voter fatigue",
    tags: ["GOVERNANCE"],
    category: "Governance",
    chart: "wave",
    epochs: "320",
    wallets: "1.8k",
    outcome: "-2.3% participation",
    positive: false,
  },
  {
    id: "SIM-0114",
    title: "Token launch emission schedule — L1 mainnet",
    tags: ["EMISSIONS", "LAUNCH"],
    category: "Emissions",
    chart: "wave",
    epochs: "150",
    wallets: "15.0k",
    outcome: "+1.9% accuracy",
    positive: true,
  },
];

function MiniChart({ positive }: { positive: boolean }) {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-20 my-4 select-none">
      {/* Top thick line (slopes up slightly if positive, slopes down if negative) */}
      <path
        d={positive ? "M 10,48 L 290,36" : "M 10,36 L 290,48"}
        fill="none"
        stroke="#C84B15"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Small highlight point */}
      <circle cx={positive ? "110" : "180"} cy={positive ? "44" : "42"} r="3" fill="#C84B15" />
      {/* Bottom thin line */}
      <path
        d={positive ? "M 10,64 L 290,78" : "M 10,78 L 290,64"}
        fill="none"
        stroke="#2A2F3A"
        strokeWidth="2"
      />
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

            <MiniChart positive={sim.positive} />

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
                    color: sim.positive ? "#C84B15" : "#E05A1F"
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

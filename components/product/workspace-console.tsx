"use client";

import { useState } from "react";
import { ConsoleGraph } from "@/components/graphics/console-graph";

export function WorkspaceConsole() {
  const [activeTab, setActiveTab] = useState("scenario.lattice");

  return (
    <div
      className="w-full rounded-sm overflow-hidden mb-20"
      style={{
        border: "1px solid rgb(28, 32, 38)",
        background: "rgb(10, 11, 13)"
      }}
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          background: "rgb(17, 19, 23)",
          borderBottom: "1px solid rgb(28, 32, 38)"
        }}
      >
        {/* Left Side: Window dots + breadcrumbs */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 select-none">
            <span className="w-2 h-2 rounded-full bg-[rgb(48,52,58)]" />
            <span className="w-2 h-2 rounded-full bg-[rgb(48,52,58)]" />
            <span className="w-2 h-2 rounded-full bg-[rgb(48,52,58)]" />
          </div>
          <span
            className="font-mono text-[9px] tracking-widest text-[#6B6B7A]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            LATTICE / WORKSPACE / ARBITRUM-L2
          </span>
        </div>

        {/* Right Side: Runtime status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15]" />
          <span
            className="font-mono text-[9px] tracking-widest text-[#6B6B7A]"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            RUNTIME · ONLINE
          </span>
        </div>
      </div>

      {/* Main Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[580px]">
        {/* Left Panel - Workspace Navigation (Columns: 2) */}
        <div
          className="lg:col-span-2 p-4 flex flex-col gap-6"
          style={{
            background: "rgb(11, 12, 14)",
            borderRight: "1px solid rgb(28, 32, 38)"
          }}
        >
          {/* Section: Workspace */}
          <div>
            <p className="font-mono text-[9px] tracking-widest text-[#6B6B7A] uppercase mb-3">
              WORKSPACE
            </p>
            <div className="space-y-1">
              {[
                { name: "Scenarios", count: 8, active: true },
                { name: "Wallet models", count: 4, active: false },
                { name: "Treasuries", count: 12, active: false },
                { name: "Governance", count: 3, active: false },
                { name: "Runs", count: 142, active: false },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center justify-between text-xs px-2.5 py-1.5 cursor-pointer rounded-[2px] transition-colors select-none ${item.active ? "text-white font-medium" : "text-[#8A8A9A] hover:text-white"
                    }`}
                  style={{
                    background: item.active ? "rgba(200, 75, 21, 0.08)" : "transparent"
                  }}
                >
                  <div className="flex items-center gap-2">
                    {item.active && (
                      <span className="w-1.5 h-1.5 bg-[#C84B15] transform rotate-45" />
                    )}
                    <span>{item.name}</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#6B6B7A]">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Files */}
          <div>
            <p className="font-mono text-[9px] tracking-widest text-[#6B6B7A] uppercase mb-3">
              FILES
            </p>
            <div className="space-y-1 px-2.5">
              {[
                { name: "scenario.lattice", active: activeTab === "scenario.lattice" },
                { name: "wallet_model.py", active: activeTab === "wallet_model.py" },
                { name: "treasury.yaml", active: activeTab === "treasury.yaml" },
              ].map((file) => (
                <div
                  key={file.name}
                  onClick={() => setActiveTab(file.name)}
                  className={`text-xs py-1.5 cursor-pointer font-mono select-none ${file.active ? "text-white font-semibold" : "text-[#6B6B7A] hover:text-[#8A8A9A]"
                    }`}
                >
                  {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Panel - Editor / Graph (Columns: 7) */}
        <div
          className="lg:col-span-7 flex flex-col justify-between"
          style={{
            borderRight: "1px solid rgb(28, 32, 38)"
          }}
        >
          {/* Tab Bar */}
          <div
            className="flex border-b border-[rgb(28,32,38)]"
            style={{
              background: "rgb(17, 19, 23)"
            }}
          >
            {[
              { name: "scenario.lattice" },
              { name: "wallet_model.py" },
              { name: "treasury.yaml" },
            ].map((tab) => {
              const isActive = tab.name === activeTab;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className="font-mono text-[10px] py-2 px-5 border-r border-[rgb(28,32,38)] transition-all relative focus:outline-none"
                  style={{
                    background: isActive ? "rgb(10, 11, 13)" : "rgb(17, 19, 23)",
                    color: isActive ? "white" : "#6B6B7A"
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: "#C84B15" }}
                    />
                  )}
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Graph Visualization Area */}
          <div className="flex-1 p-8 flex flex-col justify-between relative bg-black/[0.1]">
            {/* Graph Visualization Area */}
            <div className="w-full flex-1 flex items-center justify-center py-4">
              <ConsoleGraph className="w-full h-auto max-h-[450px] object-contain select-none" />
            </div>

            {/* Bottom Status marker */}
            <div className="flex items-center justify-between border-t border-[rgb(28,32,38)]/40 pt-3 mt-2">
              <span className="font-mono text-[8px] tracking-wider text-[#6B6B7A]">
                CAPITAL FLOW · EPOCH 145 · t=36s
              </span>
            </div>
          </div>

          {/* Bottom Console Terminal */}
          <div
            className="p-4"
            style={{
              background: "rgb(11, 12, 14)",
              borderTop: "1px solid rgb(28, 32, 38)"
            }}
          >
            <div className="font-mono text-[10px] space-y-1">
              <p className="text-white">
                <span className="text-[#6B6B7A] mr-1.5">&gt;</span> lattice run scenario.lattice --epochs 250
              </p>
              <p className="text-[#8A8A9A]">
                <span className="text-[#6B6B7A] mr-1.5">·</span> loaded wallet_model: cohort_v3 (n=12,400)
              </p>
              <p className="text-[#8A8A9A]">
                <span className="text-[#6B6B7A] mr-1.5">·</span> treasury baseline: $142.8M across 4 vaults
              </p>
              <p className="text-[#C84B15]">
                <span className="text-[#6B6B7A] mr-1.5">·</span> epoch 145 · convergence d=0.041 ✓
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Parameters & Metrics (Columns: 3) */}
        <div
          className="lg:col-span-3 p-4 flex flex-col justify-between"
          style={{
            background: "rgb(11, 12, 14)"
          }}
        >
          {/* Section: Scenario Parameters */}
          <div className="space-y-4">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-[#6B6B7A] uppercase pb-2 border-b border-[rgb(28,32,38)]/60">
                SCENARIO PARAMETERS
              </p>
              <div className="mt-2.5 space-y-2 font-mono text-[10.5px]">
                {[
                  { label: "epochs", value: "250", color: "#ffffff" },
                  { label: "wallet_n", value: "12,400", color: "#ffffff" },
                  { label: "treasury_init", value: "142.8M", color: "#ffffff" },
                  { label: "emission_curve", value: "exp_decay", color: "#C84B15" },
                  { label: "sybil_filter", value: "enabled", color: "#0D9488" },
                  { label: "seed", value: "0x4a2c..91f", color: "#8A8A9A" },
                ].map((param) => (
                  <div key={param.label} className="flex justify-between items-center">
                    <span className="text-[#6B6B7A]">{param.label}</span>
                    <span style={{ color: param.color }}>{param.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Output Metrics */}
            <div>
              <p className="font-mono text-[9px] tracking-widest text-[#6B6B7A] uppercase pb-2 border-b border-[rgb(28,32,38)]/60">
                OUTPUT METRICS
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { label: "TVL RETAINED", val: "78.4%", delta: "+ 0.25", active: true },
                  { label: "MERCENARY %", val: "12.1%", delta: "- 1.14", active: false },
                  { label: "GOV. PARTICIPATION", val: "31.2%", delta: "+ 1.36", active: true },
                ].map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-[8px] text-[#6B6B7A] tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <div className="flex items-baseline justify-between">
                      <span className="text-lg font-mono text-white font-medium">
                        {metric.val}
                      </span>
                      <span
                        className="font-mono text-[9px]"
                        style={{
                          color: metric.active ? "#C84B15" : "#6B6B7A"
                        }}
                      >
                        {metric.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

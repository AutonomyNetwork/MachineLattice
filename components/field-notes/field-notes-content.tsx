"use client";

import React, { useState } from "react";
import { FieldNoteCard } from "./field-note-card";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const FILTERS = [
  "All",
  "Treasury",
  "Emissions",
  "Sybil",
  "Governance",
  "Incentives",
  "Liquidity",
];

const MOCK_NOTES = [
  {
    id: "FN-028",
    date: "2026 · MAR",
    category: "TREASURY",
    title: "Why aggregate TVL hides the cohort that breaks you",
    description: "A treasury looks stable until the 12% of wallets routing 38% of capital decide to leave together. Aggregate metrics average them away; cohort simulation surfaces them before they move.",
    observation: "12% of wallets · 38% of routed capital · correlated exit",
  },
  {
    id: "FN-027",
    date: "2026 · FEB",
    category: "EMISSIONS",
    title: "Compression is a schedule, not a switch",
    description: "Most emission cuts are deployed as a parameter change at a block height. The economy responds to the curvature and the timing, not the endpoint. Shape the path or the path will shape you.",
    observation: "decay constant 0.6 → 78% TVL retained at steady state",
  },
  {
    id: "FN-026",
    date: "2026 · FEB",
    category: "TREASURY",
    title: "The reserve tranche has a floor",
    description: "Below a threshold, the reserve stops being a buffer and becomes a rounding error. We keep seeing treasuries optimize it to zero in calm conditions, then discover the floor under stress.",
    observation: "reserve < 9% → failure in 3 of 5 stress scenarios",
  },
  {
    id: "FN-025",
    date: "2026 · JAN",
    category: "SYBIL",
    title: "Sybil resistance is an economic problem",
    description: "Cryptographic identity helps, but the capture happens in the incentive design. If the program pays for behavior a single entity can cheaply replicate across wallets, it will be replicated.",
    observation: "behavioral filter → −41% sybil-captured yield",
  },
  {
    id: "FN-024",
    date: "2026 · JAN",
    category: "GOVERNANCE",
    title: "Declared intent is not voting behavior",
    description: "Forum sentiment and realized votes diverge most when proposals are contested — exactly when a forecast is worth having. Model the behavior, not the discourse.",
    observation: "contested proposal → 22% voter participation",
  },
  {
    id: "FN-023",
    date: "2025 · DEC",
    category: "LIQUIDITY",
    title: "Liquidity routing is deeply path-dependent",
    description: "Initial conditions dictate terminal states. A slight change in the initial liquidity distribution can alter the entire trajectory of the network's capital efficiency over time.",
    observation: "0.5% shift in initial state → 14% difference in 30d volume",
  }
];

const GLOSSARY_TERMS = [
  {
    term: "Simulation Runtime",
    category: "SIMULATION",
    description: "The operational environment in which economic scenarios are executed against wallet-level behavior models over a fixed number of epochs."
  },
  {
    term: "Wallet Cohort",
    category: "ECONOMIC",
    description: "A segment of wallets grouped by behavioral propensity rather than by size or address — the unit at which economic response is actually modeled."
  },
  {
    term: "Behavioral Vector",
    category: "MACHINE LATTICE",
    description: "The parameter set defining how a cohort responds to economic conditions — yield sensitivity, peer-response weight, time-since-entry decay, and exit threshold."
  },
  {
    term: "Emission Compression",
    category: "ECONOMIC",
    description: "A deliberate reduction in token emission rate over time, characterized by its decay constant, schedule curvature, and cohort exposure."
  },
  {
    term: "Cohort Decay",
    category: "MACHINE LATTICE",
    description: "The rate at which a cohort exits a position as realized yield, peer behavior, and time-since-entry evolve."
  },
  {
    term: "Economic Stress Layer",
    category: "MACHINE LATTICE",
    description: "A configured shock — liquidity drain, governance attack, correlated drawdown — applied at a defined epoch to test how an economy behaves under adverse conditions."
  },
  {
    term: "Liquidity Migration",
    category: "ECONOMIC",
    description: "The movement of capital from a compressing venue to the next-highest realized yield with comparable exit liquidity."
  },
  {
    term: "Mercenary Capital",
    category: "ECONOMIC",
    description: "Liquidity that enters for short-term yield and exits in correlated fashion once incentives compress."
  },
  {
    term: "Convergence (σ)",
    category: "SIMULATION",
    description: "The standard deviation across simulation runs at which a scenario's output is considered stable enough to inform a deployment decision."
  },
  {
    term: "Reserve Tranche",
    category: "TREASURY",
    description: "The portion of a treasury held as a stability buffer; below a threshold share it ceases to function as one under correlated stress."
  },
  {
    term: "Sybil Distortion",
    category: "ECONOMIC",
    description: "The capture of incentive rewards by a single entity operating many wallets, detectable through shared funding ancestry and timing signatures."
  },
  {
    term: "Governance Load",
    category: "ECONOMIC",
    description: "A measure of the participation and concentration pressure on a governance system, used to forecast proposal pass-rate variance."
  }
];

const GLOSSARY_FILTERS = ["All", "Simulation", "Economic", "Treasury", "Machine Lattice"];

export function FieldNotesContent() {
  const [activeTab, setActiveTab] = useState<"Field Notes" | "Glossary">("Field Notes");
  const [activeFilter, setActiveFilter] = useState("All");
  
  const [glossaryFilter, setGlossaryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = MOCK_NOTES.filter((note) => {
    if (activeFilter === "All") return true;
    return note.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex w-fit items-center mb-12 border border-ml-bg-border rounded-[1px] bg-ml-bg">
        {(["Field Notes", "Glossary"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-6 py-2 text-xs transition-all duration-300",
              activeTab === tab
                ? "text-ml-text-primary bg-[rgb(21,24,28)] border-b border-b-[#C84B15]"
                : "text-ml-text-secondary hover:text-ml-text-primary"
            )}
            style={{
              borderBottomWidth: activeTab === tab ? "2px" : "0px",
              borderBottomColor: activeTab === tab ? "#C84B15" : "transparent"
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Field Notes" ? (
        <>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="font-mono text-[9.5px] tracking-widest text-ml-text-secondary uppercase mr-4">
              Filter
            </span>
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-1 text-xs transition-colors duration-300 border",
                  filter === "All" && activeFilter === "All"
                    ? "bg-[#C84B15] text-white border-[#C84B15]"
                    : activeFilter === filter
                    ? "bg-ml-bg-border text-ml-text-primary border-ml-bg-border"
                    : "bg-transparent text-ml-text-secondary border-ml-bg-border hover:border-ml-text-muted hover:text-ml-text-primary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-l border-[#1C2026] bg-[#0E1013]">
            {filteredNotes.map((note) => (
              <div key={note.id} className="border-b border-r border-[#1C2026]">
                <FieldNoteCard {...note} />
              </div>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="py-20 text-center text-ml-text-secondary border border-dashed border-[#1C2026]">
              No field notes found for this category.
            </div>
          )}
        </>
      ) : (
        <>
          {/* Glossary Search and Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10 w-full">
            {/* Search Input */}
            <div className="flex-1 w-full bg-[#0E1013] border border-[#1C2026] flex items-center px-4 h-10">
              <input 
                type="text" 
                placeholder="Search terminology..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-xs text-[#8A9098] placeholder-[#4C535A]"
              />
            </div>

            {/* Filter Group */}
            <div className="flex items-center border border-[#1C2026] rounded-sm bg-[#0E1013] shrink-0 overflow-x-auto w-full md:w-auto">
              {GLOSSARY_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setGlossaryFilter(filter)}
                  className={cn(
                    "px-5 py-2.5 text-[11px] transition-colors duration-300 border-r border-[#1C2026] last:border-r-0 whitespace-nowrap",
                    glossaryFilter === filter
                      ? "text-white"
                      : "text-[#6B6B7A] hover:text-[#8A9098]"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Glossary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-l border-[#1C2026] bg-[#0E1013]">
            {GLOSSARY_TERMS
              .filter(t => glossaryFilter === "All" || t.category.toLowerCase() === glossaryFilter.toLowerCase())
              .filter(t => t.term.toLowerCase().includes(searchQuery.toLowerCase()) || t.description.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((term, idx) => (
              <div key={idx} className="border-b border-r border-[#1C2026] p-8 flex flex-col hover:bg-[#15181C] transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15] shrink-0" />
                    <h3 className="text-[15px] font-medium text-white">{term.term}</h3>
                  </div>
                  <span className="text-[9px] tracking-widest text-[#4C535A] uppercase font-mono mt-1">
                    {term.category}
                  </span>
                </div>
                <p className="text-[13px] text-[#8A9098] leading-[1.6]">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

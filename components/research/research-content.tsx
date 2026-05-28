"use client";

import { useState } from "react";
import Link from "next/link";
import { InteractiveRow } from "@/components/layout/reveal";

const FILTER_TABS = ["All", "Incentives", "Treasury", "Governance"];

interface Paper {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

const PAPERS: Paper[] = [
  {
    id: "RP-014",
    year: "2026",
    month: "MAR",
    title: "Wallet-cohort modeling under emission compression",
    description:
      "A behavioral framework for predicting cohort-level retention when emission curves are compressed in mature L2 ecosystems.",
    readTime: "22 MIN",
    category: "Incentives",
    featured: true,
  },
  {
    id: "RP-013",
    year: "2026",
    month: "FEB",
    title: "Sybil yield distortion in incentive design",
    description:
      "Empirical analysis of sybil-driven yield distortion across nine launchpad programs and a proposed filtering protocol.",
    readTime: "18 MIN",
    category: "Incentives",
  },
  {
    id: "RP-012",
    year: "2026",
    month: "JAN",
    title: "Treasury rebalance under correlated drawdowns",
    description:
      "Stress-testing multi-vault DAO treasuries against synchronized liquidity events using lattice simulation runtime.",
    readTime: "26 MIN",
    category: "Treasury",
  },
  {
    id: "RP-011",
    year: "2025",
    month: "DEC",
    title: "Predictive governance: from sentiment to behavior",
    description:
      "Moving the governance modeling field from sentiment-based heuristics to behavior-grounded simulation primitives.",
    readTime: "31 MIN",
    category: "Governance",
  },
];

function FeaturedSimulationPreview() {
  return (
    <div className="flex flex-col h-full">
      <p className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B7A] uppercase mb-5 select-none">
        SIMULATION PREVIEW
      </p>
      <div className="flex-1 flex items-center justify-center">
        <svg viewBox="0 0 300 120" className="w-full h-auto select-none">
          <defs>
            <filter id="featured-dot-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* Lower grey line */}
          <path
            d="M 10,80 L 290,90"
            fill="none"
            stroke="#2A2F3A"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Upper orange line */}
          <path
            d="M 10,50 L 290,40"
            fill="none"
            stroke="#C04A1B"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Moving dot on orange */}
          <circle r="3" fill="#F97316" filter="url(#featured-dot-glow)">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path="M 10,50 L 290,40"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export function ResearchContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const featuredPaper = PAPERS.find((p) => p.featured);
  const listedPapers =
    activeFilter === "All"
      ? PAPERS.filter((p) => !p.featured)
      : PAPERS.filter(
          (p) =>
            !p.featured &&
            p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const paperCount =
    activeFilter === "All"
      ? PAPERS.filter((p) => !p.featured).length
      : PAPERS.filter(
          (p) =>
            !p.featured &&
            p.category.toLowerCase() === activeFilter.toLowerCase()
        ).length;

  return (
    <>
      {/* Featured Paper Card */}
      {featuredPaper && (
        <div
          className="mb-16 rounded-sm overflow-hidden"
          style={{
            border: "1px solid #262B33",
            background: "#111317",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Paper Details */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="text-[10px] font-semibold text-[#C84B15] tracking-wider font-mono">
                    {featuredPaper.id}
                  </span>
                  <span className="text-[11px] text-[#6B6B7A] tracking-wider font-mono">
                    {featuredPaper.year} · {featuredPaper.month}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-[0.04em] uppercase px-2 py-0.5"
                    style={{
                      color: "#C84B15",
                      border: "1px solid rgba(200, 75, 21, 0.3)",
                    }}
                  >
                    FEATURED · WORKING PAPER
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-2xl md:text-[32px] font-light leading-[1.1] text-white tracking-tight mb-4"
                  style={{
                    fontFamily: "var(--font-fraunces, Georgia, serif)",
                  }}
                >
                  {featuredPaper.title}
                </h2>

                {/* Description */}
                <p className="text-[14px] text-[#8A8A9A] leading-[1.6] max-w-lg mb-6">
                  {featuredPaper.description}
                </p>
              </div>

              {/* Read link + time */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] tracking-[0.04em] text-[#C84B15] hover:text-[#E05619] cursor-pointer transition-colors duration-200">
                  Read paper →
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[#6B6B7A] uppercase">
                  {featuredPaper.readTime}
                </span>
              </div>
            </div>

            {/* Right: Simulation Preview */}
            <div
              className="p-8 lg:p-10"
              style={{
                borderLeft: "1px solid #262B33",
                background:
                  "radial-gradient(80% 80% at 50% 0%, rgba(192, 74, 27, 0.04) 0%, rgba(192, 74, 27, 0.00) 60%), #111317",
              }}
            >
              <FeaturedSimulationPreview />
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div
        className="rounded-sm overflow-hidden mb-0 w-full"
        style={{
          border: "1px solid rgb(28, 32, 38)",
          display: "flex",
          alignItems: "center",
          gap: "0px",
          background: "rgb(17, 19, 23)",
        }}
      >
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`filter-tab text-center text-xs border-r border-[rgb(28,32,38)] ${
              activeFilter === tab ? "active bg-[rgb(14,16,19)]" : ""
            }`}
            style={{
              padding: "10px 18px",
            }}
          >
            {tab}
          </button>
        ))}
        <span
          className="mono-label text-[10px] text-ml-text-muted border-l border-[rgb(28,32,38)] ml-auto whitespace-nowrap"
          style={{
            padding: "10px 18px",
          }}
        >
          {paperCount} PAPERS
        </span>
      </div>

      {/* Paper Rows */}
      <div className="divide-y divide-[rgb(28,32,38)]">
        {listedPapers.map(
          ({ id, year, month, title, description, readTime, category }) => (
            <InteractiveRow key={id}>
              <Link 
                href={id === "RP-013" ? "/article" : "#"} 
                className={id === "RP-013" ? "block w-full" : "block w-full pointer-events-none"}
              >
                <div className="group py-8 grid grid-cols-1 md:grid-cols-[80px_100px_1fr_auto_90px] gap-4 items-start hover:bg-[rgb(14,16,19)] px-4 -mx-4 transition-all duration-300 cursor-pointer rounded-sm">
                  {/* Orange ID label */}
                  <span className="text-[10px] font-semibold text-[#C84B15] tracking-wider font-mono">
                    {id}
                  </span>
                  {/* Date label */}
                  <span className="text-[11px] text-[#6B6B7A] tracking-wider font-mono">
                    {year} · {month}
                  </span>
                  {/* Title & Description Column */}
                  <div className="space-y-1.5">
                    <h2
                      className="text-[24px] font-light text-white group-hover:text-[#C84B15] transition-colors duration-200 leading-[1.05] tracking-tight"
                      style={{
                        fontFamily: "var(--font-fraunces, Georgia, serif)",
                      }}
                    >
                      {title}
                    </h2>
                    <p className="text-[14px] text-[#8A8A9A] leading-relaxed max-w-2xl">
                      {description}
                    </p>
                  </div>
                  {/* Category Tag */}
                  <span className="font-mono text-[9px] tracking-[0.04em] uppercase text-[#6B6B7A] whitespace-nowrap self-center">
                    {category.toUpperCase()}
                  </span>
                  {/* Read Time with dynamic orange hover arrow */}
                  <span className="text-[10px] text-[#6B6B7A] group-hover:text-white transition-colors duration-200 font-mono tracking-widest text-right flex items-center justify-end gap-1.5">
                    {readTime}{" "}
                    <span className="text-[#6B6B7A] group-hover:text-[#C84B15] transition-colors duration-200">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </InteractiveRow>
          )
        )}
      </div>
    </>
  );
}

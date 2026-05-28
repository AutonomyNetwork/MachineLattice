"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";

// Generate heatmap grid cells deterministically to avoid hydration mismatch
const GRID_COLS = 17;
const GRID_ROWS = 7;

interface Cell {
  r: number;
  c: number;
  color: string;
}

// Generate cells with seed or stable math to avoid hydration issues
const CELLS: Cell[] = [];
for (let r = 0; r < GRID_ROWS; r++) {
  for (let c = 0; c < GRID_COLS; c++) {
    let color = "#111317"; // base dark
    
    // Deterministic pseudo-random generation based on row and column index
    const val = ((r * 123 + c * 456) % 100) / 100;
    
    if (r < 3) {
      if (c <= 5 || c >= 11) {
        // Orange cluster (Sybil)
        color = val > 0.75 ? "#E05619" : val > 0.35 ? "#C84B15" : "#6A2D12";
      } else {
        // Muted or dark in center
        color = val > 0.8 ? "#1C1C24" : "#111317";
      }
    } else {
      if (c >= 6 && c <= 10) {
        // Teal cluster (Real cohorts)
        color = val > 0.75 ? "#7CA4AC" : val > 0.35 ? "#658A91" : "#2E474C";
      } else {
        // Muted or dark on sides
        color = val > 0.8 ? "#1C1C24" : "#111317";
      }
    }
    CELLS.push({ r, c, color });
  }
}

export function ArticleContent() {
  const [activeSection, setActiveSection] = useState("context");
  const [scrollProgress, setScrollProgress] = useState(0);

  const contextRef = useRef<HTMLDivElement>(null);
  const findingsRef = useRef<HTMLDivElement>(null);
  const implicationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));
      }

      // ScrollSpy handler
      const scrollPosition = window.scrollY + 200; // Offset for section boundary trigger
      const contextTop = contextRef.current?.offsetTop || 0;
      const findingsTop = findingsRef.current?.offsetTop || 0;
      const implicationTop = implicationRef.current?.offsetTop || 0;

      if (scrollPosition >= implicationTop) {
        setActiveSection("implication");
      } else if (scrollPosition >= findingsTop) {
        setActiveSection("findings");
      } else {
        setActiveSection("context");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to initialize
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string, ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const topOffset = ref.current.offsetTop - 120; // Navbar offset
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
      
      {/* 1. Header Area */}
      <StaggeredReveal className="mb-12 border-b border-[#1C2026] pb-12">
        <StaggeredItem>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-semibold text-[#C84B15] tracking-wider font-mono">
              RP-013
            </span>
            <span className="text-[#6B6B7A] font-mono text-[10px] tracking-wider">
              2026 · FEB · WORKING PAPER
            </span>
          </div>
        </StaggeredItem>
        
        <StaggeredItem>
          <h1
            className="text-4xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] text-white tracking-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Sybil yield distortion in incentive design
          </h1>
        </StaggeredItem>
        
        <StaggeredItem>
          <p className="text-[15px] text-[#8A8A9A] leading-[1.6] max-w-2xl mb-12">
            Empirical analysis of sybil-driven yield distortion across nine launchpad programs and a proposed filtering protocol.
          </p>
        </StaggeredItem>

        {/* Paper details columns */}
        <StaggeredItem className="grid grid-cols-3 gap-6 max-w-lg mt-8">
          <div>
            <span className="block font-mono text-[9px] tracking-widest text-[#4C535A] uppercase mb-1.5">
              AUTHORS
            </span>
            <span className="text-xs text-white">Economic Systems Group</span>
          </div>
          <div>
            <span className="block font-mono text-[9px] tracking-widest text-[#4C535A] uppercase mb-1.5">
              READING
            </span>
            <span className="text-xs text-white">18 min</span>
          </div>
          <div>
            <span className="block font-mono text-[9px] tracking-widest text-[#4C535A] uppercase mb-1.5">
              CATEGORY
            </span>
            <span className="text-xs text-white">Incentives</span>
          </div>
        </StaggeredItem>
      </StaggeredReveal>

      {/* 2. Figure 1 Card */}
      <div className="mb-16 border border-[#262B33] bg-[#0E1013] rounded-sm overflow-hidden flex flex-col">
        {/* Figure header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C2026] text-[9px] font-mono tracking-widest text-[#4C535A] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15]" />
            <span>Figure 1 · Simulation Output</span>
          </div>
          <span>RP-013 · Epoch 250</span>
        </div>
        
        {/* Figure visual area */}
        <div className="py-16 flex items-center justify-center bg-[#0C0C0F]">
          <div className="w-full max-w-[420px] px-6">
            <svg viewBox={`0 0 ${GRID_COLS * 24} ${GRID_ROWS * 18}`} className="w-full h-auto">
              <g stroke="#0C0C0F" strokeWidth="2.5">
                {CELLS.map((cell, idx) => (
                  <rect
                    key={idx}
                    x={cell.c * 24}
                    y={cell.r * 18}
                    width="24"
                    height="18"
                    fill={cell.color}
                    rx="1.5"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Sidebar + Content Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Sticky Column */}
        <aside className="lg:sticky lg:top-28 space-y-12">
          
          {/* Table of Contents */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-widest text-[#4C535A] uppercase">
              CONTENTS
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("context", contextRef)}
                  className={`flex items-center gap-3 transition-colors duration-200 text-left ${
                    activeSection === "context"
                      ? "text-[#C84B15] font-medium"
                      : "text-[#6B6B7A] hover:text-[#8A8A9A]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-wider text-[#4C535A]">01</span>
                  <span>Context</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("findings", findingsRef)}
                  className={`flex items-center gap-3 transition-colors duration-200 text-left ${
                    activeSection === "findings"
                      ? "text-[#C84B15] font-medium"
                      : "text-[#6B6B7A] hover:text-[#8A8A9A]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-wider text-[#4C535A]">02</span>
                  <span>Findings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("implication", implicationRef)}
                  className={`flex items-center gap-3 transition-colors duration-200 text-left ${
                    activeSection === "implication"
                      ? "text-[#C84B15] font-medium"
                      : "text-[#6B6B7A] hover:text-[#8A8A9A]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-wider text-[#4C535A]">03</span>
                  <span>Implication</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Reading progress bar */}
          <div className="space-y-3 pt-6 border-t border-[#1C2026]/60">
            <h4 className="font-mono text-[9px] tracking-widest text-[#4C535A] uppercase">
              PROGRESS
            </h4>
            <div className="relative h-[2px] bg-[#1C2026] w-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-[#C84B15] transition-all duration-100 ease-out" 
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6B7A]">
              <span>{scrollProgress}%</span>
              <span>18 MIN</span>
            </div>
          </div>
        </aside>

        {/* Right Content Column */}
        <article className="space-y-16 text-[#8A8A9A] text-[15px] leading-[1.75]" style={{ fontFamily: "var(--font-geist, sans-serif)" }}>
          
          {/* 01 Context */}
          <div ref={contextRef} className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C84B15] font-bold">01</span>
              <h2 className="text-xl text-white font-medium">Context</h2>
            </div>
            <p>
              Incentive programs are designed for the population the team imagines, not the population that actually shows up. Sybil actors exploit the gap, capturing rewards intended to bootstrap genuine participation.
            </p>
            <p>
              We quantify that capture across nine real launchpad programs and test a filtering protocol in simulation.
            </p>
          </div>

          {/* 02 Findings */}
          <div ref={findingsRef} className="space-y-6 pt-4 border-t border-[#1C2026]/40">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C84B15] font-bold">02</span>
              <h2 className="text-xl text-white font-medium">Findings</h2>
            </div>
            <p>
              Across the programs studied, sybil clusters captured between a third and a half of distributed rewards. The capture was highly concentrated and behaviorally distinct: sybil wallets share funding ancestry, timing signatures, and exit patterns that legitimate cohorts do not.
            </p>
            <p>
              A behavioral filter trained on these signatures reduced sybil-captured yield by 41% while misclassifying fewer than 3% of legitimate participants.
            </p>
            
            {/* Callout Quote */}
            <div className="pl-6 border-l-2 border-[#C84B15] my-10 py-1 bg-gradient-to-r from-[#C84B15]/5 to-transparent">
              <p className="text-lg md:text-xl font-light italic text-[#E2E8F0] leading-relaxed" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                &ldquo;Aggregate models average away the cohorts that drive the outcome. The lattice runtime keeps them visible.&rdquo;
              </p>
            </div>
          </div>

          {/* 03 Implication */}
          <div ref={implicationRef} className="space-y-6 pt-4 border-t border-[#1C2026]/40">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#C84B15] font-bold">03</span>
              <h2 className="text-xl text-white font-medium">Implication</h2>
            </div>
            <p>
              Sybil resistance is an economic design problem, not only a cryptographic one. Programs simulated against an adversarial wallet population before launch are far less likely to subsidize the actors they were meant to exclude.
            </p>
          </div>

          {/* Metadata Footer */}
          <div className="pt-12 border-t border-[#1C2026] flex items-center gap-3 font-mono text-[9px] tracking-widest text-[#4C535A]">
            <img src="/images/logo-full.png" alt="Machine Lattice" className="h-4 object-contain brightness-[0.25] grayscale" />
            <span>·</span>
            <span>RP-013 · MACHINE LATTICE · WORKING PAPER</span>
          </div>

          {/* 4. Related Research / Connected Concepts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1C2026] border border-[#1C2026] mt-16 text-xs bg-[#0E1013] rounded-sm overflow-hidden">
            
            {/* Related Research */}
            <div className="p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="block font-mono text-[9px] tracking-widest text-[#C84B15] uppercase mb-4">
                  RELATED RESEARCH
                </span>
                <span className="block font-mono text-[9px] tracking-wider text-[#6B6B7A] mb-2 uppercase">
                  RP-014 · INCENTIVES
                </span>
                <Link 
                  href="/research"
                  className="block text-sm font-medium text-white hover:text-[#C84B15] transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
                >
                  Wallet-cohort modeling under emission compression
                </Link>
              </div>
            </div>

            {/* Connected Concepts */}
            <div className="p-8 flex flex-col justify-between space-y-6 md:border-l md:border-[#1C2026] bg-[#111317]">
              <div>
                <span className="block font-mono text-[9px] tracking-widest text-[#C84B15] uppercase mb-4">
                  CONNECTED CONCEPTS
                </span>
                <span className="block font-mono text-[9px] tracking-wider text-[#6B6B7A] mb-2 uppercase">
                  RELATED FIELD NOTE
                </span>
                <span className="block font-mono text-[9.5px] text-[#C84B15] mb-1 font-semibold">
                  FN-023
                </span>
                <Link 
                  href="/field-notes"
                  className="block text-sm font-sans font-normal text-white hover:text-[#C84B15] transition-colors leading-snug"
                >
                  Why incentives collapsed after week three
                </Link>
              </div>
            </div>

          </div>

        </article>

      </div>

    </div>
  );
}

import type { Metadata } from "next";
import { WorkspaceConsole } from "@/components/product/workspace-console";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Machine Lattice product — simulation runtime, wallet modeling, and governance infrastructure.",
};

const RUNTIMES = [
  {
    label: "CAPITAL RUNTIME",
    title: "Liquidity & treasury simulation",
    bullets: [
      "AMM and CLOB-aware routing models",
      "Multi-vault treasury rebalance paths",
      "Wallet cohort propensity engine",
      "Cross-protocol capital migration",
    ],
  },
  {
    label: "GOVERNANCE RUNTIME",
    title: "Behavior & participation modeling",
    bullets: [
      "Voter cohort simulation",
      "Delegate concentration analysis",
      "Proposal pass-rate forecasting",
      "Quorum & timelock stress tests",
    ],
  },
  {
    label: "INCENTIVE RUNTIME",
    title: "Emissions & program design",
    bullets: [
      "Emission curve experimentation",
      "Sybil-aware reward distribution",
      "Mercenary capital detection",
      "Retention scenario synthesis",
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
        <StaggeredItem className="lg:col-span-7">
          <p className="section-label mb-6">PRODUCT</p>
          <h1
            className="text-4xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            One environment.
            <span className="block italic mt-1" style={{ color: "#6B6B7A" }}>
              Three runtimes.
            </span>
          </h1>
        </StaggeredItem>
        <StaggeredItem className="lg:col-span-5">
          <p 
            className="text-[15px] text-[#8A8A9A] leading-[1.6] max-w-[480px] lg:mb-2 lg:ml-[-40px]"
          >
            Machine Lattice is an operational platform — not a dashboard, not a
            report. Connect your economic surface, configure simulations, and
            run them against wallet-level behavior models.
          </p>
        </StaggeredItem>
      </StaggeredReveal>

      {/* Interactive Workspace Console Mockup */}
      <WorkspaceConsole />

      {/* Runtimes Cards Grid */}
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgb(28, 32, 38)"
        }}
      >
        {RUNTIMES.map(({ label, title, bullets }) => (
          <InteractiveCard key={label}>
            <div className="bg-ml-bg p-8 flex flex-col justify-between h-full">
              <div>
                <p 
                  style={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    letterSpacing: "0.04em",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: "rgb(192, 74, 27)",
                    marginBottom: "0px"
                  }}
                >
                  {label}
                </p>
                <div 
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(230, 232, 235)",
                    margin: "0px 0px 18px",
                    lineHeight: 1.3
                  }}
                >
                  {title}
                </div>
                <ul className="space-y-0">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        fontFamily: "Geist, sans-serif",
                        fontSize: "13px",
                        color: "rgb(139, 144, 152)",
                        padding: "8px 0px",
                        borderTop: "1px solid rgb(28, 32, 38)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontWeight: 300
                      }}
                    >
                      <span 
                        style={{
                          width: "3px",
                          height: "3px",
                          background: "rgb(62, 72, 83)",
                          display: "inline-block",
                          flexShrink: 0
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>

    </div>
  );
}

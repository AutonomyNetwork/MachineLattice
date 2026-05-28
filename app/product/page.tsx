import type { Metadata } from "next";
import Link from "next/link";
import { WorkspaceConsole } from "@/components/product/workspace-console";
import { StaggeredReveal, StaggeredItem, InteractiveCard } from "@/components/layout/reveal";

export const metadata: Metadata = {
  title: "Product — One Environment, Three Runtimes | Machine Lattice",
  description: "An operational simulation platform — not a dashboard. Configure capital, governance, and incentive runtimes against wallet-level behavior models.",
  openGraph: {
    title: "One Environment, Three Runtimes — Machine Lattice",
    description: "Connect your economic surface, configure simulations, and run them against wallet-level behavior models.",
    images: [
      {
        url: "/images/og-product.png",
        width: 1200,
        height: 630,
        alt: "One Environment, Three Runtimes — Machine Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Environment, Three Runtimes — Machine Lattice",
    description: "Connect your economic surface, configure simulations, and run them against wallet-level behavior models.",
    images: ["/images/og-product.png"],
  },
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


      {/* Footer CTA Section */}
      <section className="mt-32">
        <div 
          className="bg-[#111317] border border-[#262B33] rounded-sm p-8 md:p-12 lg:px-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 lg:gap-16 w-full"
        >
          {/* Left Content */}
          <div className="flex flex-col">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#C84B15] uppercase mb-5 select-none flex items-center gap-2">
                — REQUEST ACCESS · V0.4.2
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.05] text-white tracking-tight mb-5"
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                See the runtime handling <span className="italic text-[#6B6B7A] font-light block mt-1">your simulation.</span>
              </h2>
              <p className="text-[#8A8A9A] text-[14.5px] leading-[1.65] max-w-[580px] mb-4">
                Request access to run your own scenarios inside the lattice runtime — emission compression, treasury stress, governance modeling — configured against your protocol&apos;s actual parameters. We&apos;ll walk you through a live simulation before you deploy a single decision on-chain.
              </p>
            </div>

            {/* Bottom 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              <div>
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#4A4A5E] uppercase block mb-2 font-medium">CAPITAL RUNTIME</span>
                <span className="text-[13px] text-[#8A8A9A]">Liquidity, treasury, routing</span>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#4A4A5E] uppercase block mb-2 font-medium">GOVERNANCE RUNTIME</span>
                <span className="text-[13px] text-[#8A8A9A]">Delegation, pass-rate, quorum</span>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-[0.15em] text-[#4A4A5E] uppercase block mb-2 font-medium">INCENTIVE RUNTIME</span>
                <span className="text-[13px] text-[#8A8A9A]">Emissions, sybil, retention</span>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col pt-4 lg:pt-20">
            <div className="space-y-3.5">
              <Link
                href="/access"
                className="bg-[#C84B15] hover:bg-[#E05619] text-black font-mono text-[11px] font-medium tracking-[0.04em] uppercase py-3.5 px-6 w-full text-center rounded-sm transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
              >
                Request access&nbsp;→
              </Link>
              <Link
                href="/research"
                className="bg-transparent border border-[#262B33] hover:border-[#383E47] hover:bg-white/[0.02] text-white font-mono text-[11px] font-medium tracking-[0.04em] uppercase py-3.5 px-6 w-full text-center rounded-sm transition-all duration-200 block"
              >
                Read the methodology
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2.5 font-mono text-[9.5px] tracking-widest text-[#6B6B7A] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15] flex-shrink-0"></span>
              <span>RUNTIME ONLINE · &lt; 48H RESPONSE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

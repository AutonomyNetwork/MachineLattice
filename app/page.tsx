import Link from "next/link";
import { SimulationPreview } from "@/components/home/simulation-preview";
import { FeaturesGrid } from "@/components/home/features-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Lattice — Economic Simulation for Blockchain Ecosystems",
  description: "Simulate capital before you deploy it. Model how liquidity, incentives, and governance will behave — before the chain decides for you.",
  openGraph: {
    title: "Simulate Capital Before You Deploy It — Machine Lattice",
    description: "Economic simulation infrastructure for blockchain ecosystems. Model liquidity, incentives, and governance before deployment.",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Simulate Capital Before You Deploy It — Machine Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulate Capital Before You Deploy It — Machine Lattice",
    description: "Economic simulation infrastructure for blockchain ecosystems. Model liquidity, incentives, and governance before deployment.",
    images: ["/images/og-home.png"],
  },
};

export default function HomePage() {
  return (
    <div className="text-[#F0F0F5] min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Hero Content) - Spans 7 columns on large screens */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            {/* Section Tag */}
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#C84B15] uppercase mb-8 flex items-center gap-2 select-none">
              — V0.4.2 — SIMULATION RUNTIME
            </p>

            {/* Heading */}
            <h1
              style={{
                fontFamily: "Fraunces, serif",
                fontWeight: 300,
                fontSize: "72px",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                color: "rgb(230, 232, 235)",
                margin: "0px 0px 28px"
              }}
            >
              <span className="block">Simulate capital</span>
              <span className="block mt-1">
                <span className="italic font-light" style={{ color: "#6B6B7A" }}>before</span> you deploy it.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontSize: "17px",
                lineHeight: 1.55,
                color: "rgb(139, 144, 152)",
                maxWidth: "520px",
                margin: "0px 0px 40px",
                fontWeight: 300
              }}
            >
              Economic simulation infrastructure for blockchain ecosystems.
              Model liquidity, incentives, and governance before the chain decides for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/access"
                style={{
                  color: "black",
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                className="bg-[#C84B15] hover:bg-[#E05619] whitespace-nowrap transition-colors duration-200"
            >
              Explore the platform →
            </Link>
              <Link
                href="/simulations"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  color: "rgb(230, 232, 235)",
                  border: "1px solid rgb(28, 32, 38)",
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s"
                }}
                className="hover:border-white/20 hover:bg-white/[0.05]"
              >
                See a live simulation
              </Link>
            </div>

            {/* Bottom Fine Sub-label */}
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#4A4A5E] select-none border-t border-[#1E1E28]/40 pt-6">
              <span>REACTIVE ANALYTICS</span>
              <span>→</span>
              <span>PREDICTIVE ECONOMIC INTELLIGENCE</span>
            </div>
          </div>

          {/* Right Column (Simulation Widget) - Spans 5 columns on large screens */}
          <div className="lg:col-span-5 w-full animate-fade-in animate-delay-200">
            <SimulationPreview />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#161622]" />
      </div>

      {/* Three Columns features section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <FeaturesGrid />
      </section>

      {/* Built For banner section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="border-t border-b border-[#161622] py-6 flex flex-col gap-3">
          <span
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: "0.06em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "rgb(100, 105, 112)"
            }}
            className="select-none"
          >
            BUILT FOR
          </span>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {[
              "L1 & L2 ecosystems",
              "DAO treasuries",
              "Protocol founders",
              "Launchpads",
              "Institutional researchers",
              "Capital allocators"
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "14px",
                  color: "rgb(230, 232, 235)",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <span
                  style={{
                    width: "3px",
                    height: "3px",
                    background: "rgb(192, 74, 27)",
                    display: "inline-block",
                    flexShrink: 0
                  }}
                />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Access Request CTA Card */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="border border-[#181822] bg-[#0D0D13] p-10 md:p-16 rounded-sm flex flex-col items-center text-center gap-8">
          {/* CTA Content */}
          <div className="space-y-4 max-w-4xl flex flex-col items-center">
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#C84B15] uppercase select-none">
              — ACCESS · V0.4.2
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.05] text-white tracking-tight"
              style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
            >
              The intelligence layer for <span className="italic text-[#6B6B7A] font-light">programmable</span> economics.
            </h2>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center flex-shrink-0">
            <Link
              href="/access"
              style={{
                color: "black",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "10px 20px",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              className="bg-[#C84B15] hover:bg-[#E05619] w-full text-center whitespace-nowrap transition-colors duration-200"
            >
              Request access →
            </Link>
            <Link
              href="/research"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                color: "rgb(230, 232, 235)",
                border: "1px solid rgb(28, 32, 38)",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "10px 20px",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s"
              }}
              className="hover:border-white/20 hover:bg-white/[0.05] w-full text-center"
            >
              Read research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

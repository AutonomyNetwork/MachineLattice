import { SimulationsList } from "@/components/simulations/simulations-list";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";
import { TryItOutCTA } from "@/components/simulations/try-it-out-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulations — Live Runs from Partner Ecosystems | Machine Lattice",
  description: "Selected simulation runs from live L1s, L2s, DAOs, and launchpads. Emission compression, treasury rebalancing, governance modeling, and more.",
  openGraph: {
    title: "Simulation Runs from Live Ecosystems — Machine Lattice",
    description: "Explore real runs: emission curves, treasury stress tests, governance concentration, sybil filtering, and more.",
    images: [
      {
        url: "/images/og-simulations.png",
        width: 1200,
        height: 630,
        alt: "Simulation Runs from Live Ecosystems — Machine Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulation Runs from Live Ecosystems — Machine Lattice",
    description: "Explore real runs: emission curves, treasury stress tests, governance concentration, sybil filtering, and more.",
    images: ["/images/og-simulations.png"],
  },
};

export default function SimulationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Page header */}
      <StaggeredReveal className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-16 items-start">
        <StaggeredItem className="lg:col-span-6">
          <p className="section-label mb-6">SIMULATIONS</p>
          <h1
            className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            <span className="block font-light">
              Selected runs from
            </span>
            <span
              className="block italic font-light mt-1"
              style={{ color: "#6B6B7A" }}
            >
              live ecosystems.
            </span>
          </h1>
        </StaggeredItem>
        <StaggeredItem className="lg:col-span-6 lg:pt-14 lg:pl-16">
          <p className="text-[16px] text-[#8A8A9A] leading-[1.6] max-w-[420px]">
            A small sample of recent simulation runs from partners across L1s,
            L2s, DAOs, and launchpads. Identifying details redacted where
            required.
          </p>
        </StaggeredItem>
      </StaggeredReveal>

      <SimulationsList />

      {/* Try It Out Live CTA */}
      <TryItOutCTA />
    </div>
  );
}

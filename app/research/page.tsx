import type { Metadata } from "next";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";
import { ResearchContent } from "@/components/research/research-content";

export const metadata: Metadata = {
  title: "Research — Working Papers & Field Notes | Machine Lattice",
  description: "Working papers on wallet-cohort modeling, sybil yield distortion, treasury rebalancing, and predictive governance. Published openly.",
  openGraph: {
    title: "The Economic Intelligence Layer, Written Openly — Machine Lattice",
    description: "Working papers on wallet-cohort modeling, sybil yield distortion, treasury rebalancing, and predictive governance.",
    images: [
      {
        url: "/images/og-research.png",
        width: 1200,
        height: 630,
        alt: "The Economic Intelligence Layer, Written Openly — Machine Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Economic Intelligence Layer, Written Openly — Machine Lattice",
    description: "Working papers on wallet-cohort modeling, sybil yield distortion, treasury rebalancing, and predictive governance.",
    images: ["/images/og-research.png"],
  },
};

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
      {/* Header */}
      <StaggeredReveal className="mb-16">
        <StaggeredItem>
          <p className="section-label mb-6">RESEARCH</p>
        </StaggeredItem>
        <StaggeredItem>
          <h1
            className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] max-w-3xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            The economic intelligence layer is being written,{" "}
            <span className="italic text-[#6B6B7A] font-light">
              openly.
            </span>
          </h1>
        </StaggeredItem>
        <StaggeredItem>
          <p className="text-[13.5px] text-[#8A8A9A] leading-[1.7] mt-4 max-w-lg">
            Working papers, simulation methodology, and field notes from
            deployments with ecosystem partners.
          </p>
        </StaggeredItem>
      </StaggeredReveal>

      {/* Featured Paper + Filter Tabs + Paper Rows */}
      <ResearchContent />
    </div>
  );
}

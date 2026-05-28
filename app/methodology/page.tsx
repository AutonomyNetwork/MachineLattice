import type { Metadata } from "next";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";
import { MethodologyContent } from "@/components/methodology/methodology-content";

export const metadata: Metadata = {
  title: "Methodology | Machine Lattice",
  description: "Machine Lattice produces probabilistic scenarios, not forecasts. This is the framework behind every run.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
      {/* Header */}
      <StaggeredReveal className="mb-12">
        <StaggeredItem>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-4 h-[1px] bg-[#C84B15]"></div>
            <p className="text-[9px] tracking-widest text-[#C84B15] uppercase font-mono">
              METHODOLOGY
            </p>
          </div>
        </StaggeredItem>
        <StaggeredItem>
          <h1
            className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] text-white tracking-tight"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            How the runtime <span className="italic text-[#6B6B7A] font-light">reasons.</span>
          </h1>
        </StaggeredItem>
        <StaggeredItem>
          <p className="text-[14px] text-[#8A9098] leading-[1.6] mt-6 max-w-2xl">
            Machine Lattice produces probabilistic scenarios, not forecasts. This is the framework
            behind every run — the inputs, the modeling layers, the assumptions we hold, and the
            lifecycle a decision passes through.
          </p>
        </StaggeredItem>
      </StaggeredReveal>

      <MethodologyContent />
    </div>
  );
}

import type { Metadata } from "next";
import { StaggeredReveal, StaggeredItem } from "@/components/layout/reveal";
import { FieldNotesContent } from "@/components/field-notes/field-notes-content";

export const metadata: Metadata = {
  title: "Field Notes | Machine Lattice",
  description: "Short, technical observations from live deployments — and a glossary of the terminology the platform runs on.",
};

export default function FieldNotesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
      {/* Header */}
      <StaggeredReveal className="mb-16">
        <StaggeredItem>
          <p className="section-label mb-6">FIELD NOTES</p>
        </StaggeredItem>
        <StaggeredItem>
          <h1
            className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] whitespace-nowrap text-white tracking-tight"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Operational notes from the{" "}
            <span className="italic text-[#6B6B7A] font-light">
              runtime.
            </span>
          </h1>
        </StaggeredItem>
        <StaggeredItem>
          <p className="text-[13.5px] text-[#8A8A9A] leading-[1.7] mt-4 max-w-lg">
            Short, technical observations from live deployments — and a glossary of the
            terminology the platform runs on.
          </p>
        </StaggeredItem>
      </StaggeredReveal>

      {/* Main Content Area */}
      <FieldNotesContent />
    </div>
  );
}

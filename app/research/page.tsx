import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The economic intelligence layer is being written, openly. Working papers, simulation methodology, and field notes from deployments.",
};

const PAPERS = [
  {
    id: "RP-014",
    year: "2026",
    month: "MAR",
    title: "Wallet-cohort modeling under emission compression",
    description:
      "A behavioral framework for predicting cohort-level retention when emission curves are compressed in mature L2 ecosystems.",
    readTime: "22 MIN",
  },
  {
    id: "RP-013",
    year: "2026",
    month: "FEB",
    title: "Sybil yield distortion in incentive design",
    description:
      "Empirical analysis of sybil-driven yield distortion across nine launchpad programs and a proposed filtering protocol.",
    readTime: "18 MIN",
  },
  {
    id: "RP-012",
    year: "2026",
    month: "JAN",
    title: "Treasury rebalance under correlated drawdowns",
    description:
      "Stress-testing multi-vault DAO treasuries against synchronized liquidity events using lattice simulation runtime.",
    readTime: "26 MIN",
  },
  {
    id: "RP-011",
    year: "2025",
    month: "DEC",
    title: "Predictive governance: from sentiment to behavior",
    description:
      "Moving the governance modeling field from sentiment-based heuristics to behavior-grounded simulation primitives.",
    readTime: "31 MIN",
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
      {/* Header */}
      <div className="mb-16">
        <p className="section-label mb-6">RESEARCH</p>
        <h1
          className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] max-w-3xl text-white tracking-tight"
          style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
        >
          The economic intelligence layer is being written,{" "}
          <span className="italic text-[#6B6B7A] font-light">
            openly.
          </span>
        </h1>
        <p className="text-[13.5px] text-[#8A8A9A] leading-[1.7] mt-4 max-w-lg">
          Working papers, simulation methodology, and field notes from
          deployments with ecosystem partners.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgb(28,32,38)] mb-0" />

      {/* Papers list */}
      <div className="divide-y divide-[rgb(28,32,38)]">
        {PAPERS.map(({ id, year, month, title, description, readTime }) => (
          <div
            key={id}
            className="group py-8 grid grid-cols-1 md:grid-cols-[100px_100px_1fr_90px] gap-4 items-start hover:bg-[rgb(14,16,19)] px-4 -mx-4 transition-all duration-300 cursor-pointer rounded-sm"
          >
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
                style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
              >
                {title}
              </h2>
              <p className="text-[14px] text-[#8A8A9A] leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
            {/* Read Time with dynamic orange hover arrow */}
            <span className="text-[10px] text-[#6B6B7A] group-hover:text-white transition-colors duration-200 font-mono tracking-widest text-right flex items-center justify-end gap-1.5">
              {readTime} <span className="text-[#6B6B7A] group-hover:text-[#C84B15] transition-colors duration-200">→</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

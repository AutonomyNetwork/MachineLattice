import Link from "next/link";
import { Reveal } from "@/components/layout/reveal";

const SIMULATE_ITEMS = [
  {
    title: "Emission compression",
    description:
      "How your wallet cohorts respond to a compression schedule — before it goes live.",
  },
  {
    title: "Treasury stress test",
    description:
      "Your vaults under correlated drawdown, staged vs. immediate rebalance.",
  },
  {
    title: "Governance load",
    description:
      "Pass-rate forecasting and delegate concentration across your proposal types.",
  },
  {
    title: "Sybil exposure",
    description:
      "How much of your incentive budget a behavioral filter would reclaim.",
  },
];

export function TryItOutCTA() {
  return (
    <Reveal className="mt-20">
      <section
        className="relative overflow-hidden rounded-sm"
        style={{
          border: "1px solid #262B33",
          background: "#111317",
        }}
      >
        {/* Radial gradient glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(80% 80% at 50% 0%, rgba(192, 74, 27, 0.06) 0%, rgba(192, 74, 27, 0.00) 60%)",
          }}
        />

        {/* Content grid */}
        <div
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,1fr)] gap-16"
          style={{
            padding: "80px 48px 56px 48px",
          }}
        >
          {/* Left Column */}
          <div className="flex flex-col">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#C84B15] uppercase mb-6 select-none flex items-center gap-2">
              — TRY IT OUT LIVE
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.1] text-white tracking-tight mb-5"
              style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
            >
              Run a simulation on
              <br />
              <span className="italic text-[#6B6B7A] font-light">
                your protocol.
              </span>
            </h2>
            <p className="text-[14.5px] text-[#8A8A9A] leading-[1.65] max-w-[480px] mb-8">
              The runs above were built for real ecosystems. Yours can be next —
              wallet-cohort behavior, emission curves, treasury stress, and
              governance load, all simulated before you commit anything on-chain.
            </p>
            <div>
              <Link
                href="/access"
                className="inline-flex items-center gap-1 bg-[#C84B15] hover:bg-[#E05619] text-black font-mono text-[11px] font-medium tracking-[0.04em] uppercase py-3.5 px-7 rounded-sm transition-colors duration-200"
              >
                Request access&nbsp;→
              </Link>
            </div>
          </div>

          {/* Right Column - What we'll simulate */}
          <div className="flex flex-col">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B7A] uppercase mb-8 select-none">
              WHAT WE&apos;LL SIMULATE FOR YOU
            </p>
            <div className="space-y-6">
              {SIMULATE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-[15px] font-medium text-white mb-1.5"
                    style={{ fontFamily: "Geist, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B6B7A] leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative z-10"
          style={{
            background: "#0E1013",
            borderTop: "1px solid #262B33",
          }}
        />
      </section>
    </Reveal>
  );
}

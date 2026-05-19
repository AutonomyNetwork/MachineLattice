"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-36 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
        {/* Left: Text */}
        <div className="animate-fade-in">
          <p className="section-label mb-6">V0.4.2 — SIMULATION RUNTIME</p>

          <h1 className="hero-heading mb-2">
            Simulate capital{" "}
          </h1>
          <h1 className="hero-heading mb-6">
            <span className="hero-heading-italic">before</span>{" "}
            you deploy it.
          </h1>

          <p className="text-base text-ml-text-secondary leading-relaxed max-w-md mb-10">
            Machine Lattice is economic simulation infrastructure for blockchain
            ecosystems. Model how liquidity, incentives, and governance will
            behave — before the chain decides for you.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/product" className="btn-primary">
              Explore the platform →
            </Link>
            <Link href="/simulations" className="btn-outline">
              See a live simulation
            </Link>
          </div>
        </div>

        {/* Right: Simulation widget - imported at page level */}
        <div
          className="animate-fade-in animate-delay-200 h-full min-h-[380px]"
          id="sim-preview"
        />
      </div>
    </section>
  );
}

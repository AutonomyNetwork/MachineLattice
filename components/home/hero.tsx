"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pt-36 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="section-label mb-6">
            V0.4.2 — SIMULATION RUNTIME
          </motion.p>

          <motion.div variants={itemVariants}>
            <h1 className="hero-heading mb-2">
              Simulate capital{" "}
            </h1>
            <h1 className="hero-heading mb-6">
              <span className="hero-heading-italic">before</span>{" "}
              you deploy it.
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-base text-ml-text-secondary leading-relaxed max-w-md mb-10">
            Machine Lattice is economic simulation infrastructure for blockchain
            ecosystems. Model how liquidity, incentives, and governance will
            behave — before the chain decides for you.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <Link href="/product" className="btn-primary">
              Explore the platform →
            </Link>
            <Link href="/simulations" className="btn-outline">
              See a live simulation
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Simulation widget - imported at page level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full min-h-[380px]"
          id="sim-preview"
        />
      </div>
    </section>
  );
}

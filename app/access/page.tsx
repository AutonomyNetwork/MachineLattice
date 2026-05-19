"use client";

import { useState } from "react";

const ECOSYSTEM_TYPES = [
  "L1 / L2 Chain",
  "DAO / Protocol",
  "DeFi Application",
  "Launchpad",
  "Foundation / Grant Program",
  "Other",
];

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "Protocol founder",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24 overflow-visible">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div className="max-w-[480px] w-full">
          <p className="section-label mb-6">ACCESS</p>
          <h1
            className="text-3xl md:text-[56px] lg:text-[56px] font-light leading-[1.05] mb-6 text-white tracking-tight"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Machine Lattice is{" "}
            <span className="italic block text-[#6B6B7A] mt-1 font-light">
              in private deployment.
            </span>
          </h1>
          <p className="text-sm text-ml-text-secondary leading-relaxed mb-10 font-sans">
            We work directly with ecosystem teams, treasuries, and founders who treat economic design as infrastructure. Tell us a little about what you&apos;re building.
          </p>

          {/* System Status Table */}
          <div className="border border-[rgb(28,32,38)] rounded-sm bg-transparent p-5 w-full">
            <span className="mono-label text-[10px] text-ml-text-muted tracking-widest block mb-4 uppercase">
              SYSTEM STATUS
            </span>
            <div className="space-y-0">
              {/* Row 1 */}
              <div className="flex justify-between items-center py-2.5 border-t border-[rgb(28,32,38)] font-mono text-[10px] tracking-wider uppercase text-ml-text-muted">
                <span>RUNTIME</span>
                <span className="text-[#C84B15] flex items-center gap-1.5 font-medium lowercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15]" />
                  online
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex justify-between items-center py-2.5 border-t border-[rgb(28,32,38)] font-mono text-[10px] tracking-wider uppercase text-ml-text-muted">
                <span>PARTNER DEPLOYMENTS</span>
                <span className="text-ml-text-primary font-medium lowercase">11 active</span>
              </div>
              {/* Row 3 */}
              <div className="flex justify-between items-center py-2.5 border-t border-[rgb(28,32,38)] font-mono text-[10px] tracking-wider uppercase text-ml-text-muted">
                <span>RESEARCH PAPERS</span>
                <span className="text-ml-text-primary font-medium lowercase">14 published</span>
              </div>
              {/* Row 4 */}
              <div className="flex justify-between items-center py-2.5 border-t border-[rgb(28,32,38)] font-mono text-[10px] tracking-wider uppercase text-ml-text-muted">
                <span>RESPONSE TIME</span>
                <span className="text-ml-text-primary font-medium lowercase">&lt; 48h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="bg-[rgb(17,19,23)] border border-[rgb(28,32,38)] p-8 rounded-sm max-w-xl lg:w-full">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[360px] text-center">
              <div className="w-12 h-12 rounded-full bg-[#C84B15]/10 flex items-center justify-center mb-4">
                <span className="text-[#C84B15] text-xl">✓</span>
              </div>
              <h2 className="text-lg font-medium text-ml-text-primary mb-2">
                Request received
              </h2>
              <p className="text-sm text-ml-text-secondary">
                We review applications on a rolling basis. We&apos;ll be in touch
                within 3–5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[9.5px] font-semibold tracking-widest text-[#C84B15] uppercase">
                  REQUEST ACCESS · V0.4.2
                </span>
              </div>

              <div>
                <label className="font-mono text-[9.5px] tracking-wider text-ml-text-muted block mb-2 uppercase">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Chen"
                  className="w-full bg-[#07070A] border border-[rgb(28,32,38)] text-ml-text-primary text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C84B15] transition-colors placeholder:text-ml-text-muted/50 font-sans"
                />
              </div>

              <div>
                <label className="font-mono text-[9.5px] tracking-wider text-ml-text-muted block mb-2 uppercase">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@ecosystem.xyz"
                  className="w-full bg-[#07070A] border border-[rgb(28,32,38)] text-ml-text-primary text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C84B15] transition-colors placeholder:text-ml-text-muted/50 font-sans"
                />
              </div>

              <div>
                <label className="font-mono text-[9.5px] tracking-wider text-ml-text-muted block mb-2 uppercase">
                  ORGANIZATION
                </label>
                <input
                  type="text"
                  name="org"
                  value={form.org}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Arbitrum, Uniswap DAO"
                  className="w-full bg-[#07070A] border border-[rgb(28,32,38)] text-ml-text-primary text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C84B15] transition-colors placeholder:text-ml-text-muted/50 font-sans"
                />
              </div>

              <div>
                <label className="font-mono text-[9.5px] tracking-wider text-ml-text-muted block mb-2 uppercase">
                  ROLE
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#07070A] border border-[rgb(28,32,38)] text-ml-text-primary text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C84B15] transition-colors font-sans"
                >
                  <option value="Protocol founder">Protocol founder</option>
                  <option value="Core contributor">Core contributor</option>
                  <option value="Treasury manager">Treasury manager</option>
                  <option value="Incentive designer">Incentive designer</option>
                  <option value="Security researcher">Security researcher</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[9.5px] tracking-wider text-ml-text-muted block mb-2 uppercase">
                  WHAT DO YOU WANT TO SIMULATE?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="e.g. emission compression on our L2, treasury rebalance under stress, governance delegation modeling..."
                  className="w-full bg-[#07070A] border border-[rgb(28,32,38)] text-ml-text-primary text-xs px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C84B15] transition-colors placeholder:text-ml-text-muted/50 font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C84B15] hover:bg-[#E05A1F] text-white hover:text-white font-mono text-[10.5px] tracking-wider uppercase py-3 transition-all duration-200 rounded-sm flex items-center justify-center gap-2 font-medium"
              >
                Submit request →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

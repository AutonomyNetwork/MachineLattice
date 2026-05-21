"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(28,32,38)] bg-[rgb(14,16,19)] pt-16 pb-8 mt-[40px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Left Side Icon Placeholder */}
              <img 
                src="/images/logo-icon.svg" 
                alt="Machine Lattice" 
                className="w-8 h-8 object-contain" 
              />
              {/* Right Side Text */}
              <div className="flex flex-col justify-center">
                <span className="font-sans text-[13px] leading-[1.1] tracking-[0.06em] text-[#E6E8EB] uppercase font-light">
                  Machine
                </span>
                <span className="font-sans text-[13px] leading-[1.1] tracking-[0.06em] text-[#E6E8EB] uppercase font-light">
                  Lattice
                </span>
              </div>
            </Link>
            <p className="text-xs text-ml-text-secondary leading-relaxed max-w-[240px]">
              Economic simulation infrastructure for blockchain ecosystems.
            </p>
          </div>

          {/* Nav groups */}
          <div>
            <h4 className="font-mono text-[9.5px] tracking-widest text-[#C84B15] uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-ml-text-secondary font-sans">
              <li>
                <Link href="/product" className="hover:text-ml-text-primary transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/simulations" className="hover:text-ml-text-primary transition-colors">
                  Simulations
                </Link>
              </li>
              <li>
                <Link href="/product#runtime" className="hover:text-ml-text-primary transition-colors">
                  Runtime
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-ml-text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9.5px] tracking-widest text-[#C84B15] uppercase mb-4">
              Research
            </h4>
            <ul className="space-y-2.5 text-xs text-ml-text-secondary font-sans">
              <li>
                <Link href="/research" className="hover:text-ml-text-primary transition-colors">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-ml-text-primary transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/field-notes" className="hover:text-ml-text-primary transition-colors">
                  Field notes
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-ml-text-primary transition-colors">
                  Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[9.5px] tracking-widest text-[#C84B15] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-ml-text-secondary font-sans">
              <li>
                <Link href="/access" className="hover:text-ml-text-primary transition-colors">
                  Access
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-ml-text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-ml-text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ml-text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/brand" className="hover:text-ml-text-primary transition-colors">
                  Brand Assets
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ml-bg-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[9.5px] font-mono text-ml-text-muted">
          <span>© 2026 MACHINE LATTICE · ALL RIGHTS RESERVED</span>
          <div className="flex items-center gap-3">
            <span>V0.4.2</span>
            <span>·</span>
            <span>NL · NYC · LDN</span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15] inline-block" />
              RUNTIME ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

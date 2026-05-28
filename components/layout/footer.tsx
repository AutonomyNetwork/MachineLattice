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
              <img 
                src="/images/logo-full.png" 
                alt="Machine Lattice" 
                className="h-7 object-contain" 
              />
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
                <Link href="/field-notes" className="hover:text-ml-text-primary transition-colors">
                  Field notes
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-ml-text-primary transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/article" className="hover:text-ml-text-primary transition-colors">
                  Article
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

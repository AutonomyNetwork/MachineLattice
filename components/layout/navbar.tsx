"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Simulations", href: "/simulations" },
  { label: "Research", href: "/research" },
  { label: "Access", href: "/access" },
];

function UtcClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, "0");
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      const s = String(now.getUTCSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s} UTC`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-wider uppercase text-ml-text-muted/80 select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C84B15] inline-block" />
      {time}
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-ml-bg-border",
        scrolled
          ? "bg-ml-bg/95 backdrop-blur-md"
          : "bg-ml-bg/60 backdrop-blur-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn("nav-link py-1", isActive && "active")}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <UtcClock />
          <Link
            href="/access"
            className="btn-primary"
          >
            Request access →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ml-text-secondary hover:text-ml-text-primary p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-current mb-1.5 transition-all" />
          <span className="block w-3 h-px bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ml-bg-secondary border-t border-ml-bg-border px-6 py-4">
          {navLinks.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block py-2.5 text-sm border-b border-ml-bg-border last:border-0",
                  isActive
                    ? "text-ml-text-primary"
                    : "text-ml-text-secondary"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/access"
            className="btn-primary block text-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Request access →
          </Link>
        </div>
      )}
    </header>
  );
}

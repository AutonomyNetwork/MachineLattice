// Node 25.6.0 has globalThis.localStorage enabled by default but incomplete when --localstorage-file is not configured.
// This mock/deletion ensures standard SSR library checks do not crash on typeof localStorage !== 'undefined'.
if (typeof globalThis !== 'undefined' && globalThis.localStorage && !globalThis.localStorage.getItem) {
  try {
    delete (globalThis as any).localStorage;
  } catch (e) {
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        length: 0,
        key: () => null,
      },
      writable: true,
      configurable: true,
    });
  }
}

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Machine Lattice",
    template: "%s | Machine Lattice",
  },
  description: "Economic simulation infrastructure for blockchain ecosystems.",
  keywords: ['blockchain simulation', 'economic modeling', 'DeFi', 'governance simulation', 'liquidity modeling', 'tokenomics', 'incentive design', 'treasury management', 'L2 economics', 'protocol design', 'wallet behavior', 'capital simulation'],
  openGraph: {
    siteName: "Machine Lattice",
    title: "Machine Lattice",
    description: "Economic simulation infrastructure for blockchain ecosystems.",
    type: "website",
  },
  twitter: {
    site: "@machinelattice",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-ml-bg flex flex-col justify-between relative overflow-x-hidden">
        {/* Figma reference viewport background with exact radial spotlights (top-left orange & bottom-right green-slate) */}
        <div 
          className="fixed inset-0 pointer-events-none select-none" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
              radial-gradient(at 20% 0%, rgba(58, 24, 8, 0.133) 0%, transparent 45%),
              radial-gradient(at 80% 100%, rgb(10, 26, 34) 0%, transparent 50%)
            `,
            backgroundColor: "rgb(10, 11, 13)",
            backgroundSize: "86px 86px, 86px 86px, 100% 100%, 100% 100%",
            zIndex: 0
          }}
        />
        
        <div className="relative z-10 flex flex-col justify-between min-h-screen">
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

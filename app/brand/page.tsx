import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets — Logos, Colors & Typography | Machine Lattice",
  description: "Official Machine Lattice brand identity: logos, color palette, typography, and usage guidelines.",
  openGraph: {
    title: "Machine Lattice — Brand Assets",
    description: "Official logos, colors, fonts, and usage guidelines for the Machine Lattice brand.",
    images: [
      {
        url: "/images/og-brand.png",
        width: 1200,
        height: 630,
        alt: "Machine Lattice — Brand Assets",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Machine Lattice — Brand Assets",
    description: "Official logos, colors, fonts, and usage guidelines for the Machine Lattice brand.",
    images: ["/images/og-brand.png"],
  },
};

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#0D0D13] text-[#F0F0F5]">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 border-b border-[rgb(28,32,38)] bg-[#0A0A0F]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#C84B15] uppercase mb-6 flex items-center gap-2 select-none">
            — RESOURCES · V0.4.2
          </p>
          <h1
            className="text-5xl md:text-6xl font-light mb-6 text-white tracking-tight"
            style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
          >
            Brand Assets
          </h1>
          <p className="text-[#8B9098] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-geist, sans-serif)" }}>
            Welcome to the Machine Lattice brand identity. Here you can find our official logos, color palettes, typography, and usage guidelines for creating materials within our ecosystem.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Logos & Symbols */}
        <section className="space-y-8">
          <div className="border-b border-[rgb(28,32,38)] pb-4">
            <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Logo & Symbol
            </h2>
            <p className="text-[#8B9098] mt-2">
              The Machine Lattice symbol represents a structural node network, used across all our products and communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Logo */}
            <div className="border border-[rgb(28,32,38)] rounded-sm bg-[#09090D] overflow-hidden group">
              <div className="h-48 flex items-center justify-center p-8 relative">
                {/* Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(rgb(28,32,38) 1px, transparent 1px), linear-gradient(90deg, rgb(28,32,38) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                
                <img src="/images/logo-icon.svg" alt="Machine Lattice Icon" className="w-16 h-16 relative z-10" />
              </div>
              <div className="border-t border-[rgb(28,32,38)] p-4 flex items-center justify-between bg-[#0A0A0F]">
                <div>
                  <h3 className="text-sm font-medium">Primary Icon</h3>
                  <p className="text-xs text-[#8B9098] mt-1">SVG format</p>
                </div>
                <a 
                  href="/images/logo-icon.svg" 
                  download="Machine_Lattice_Icon.svg"
                  className="px-4 py-2 bg-[#C84B15] hover:bg-[#E05619] text-black text-xs font-mono tracking-wider uppercase transition-colors rounded-sm"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Full Logo */}
            <div className="border border-[rgb(28,32,38)] rounded-sm bg-[#09090D] overflow-hidden group">
              <div className="h-48 flex items-center justify-center p-8 relative">
                {/* Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(rgb(28,32,38) 1px, transparent 1px), linear-gradient(90deg, rgb(28,32,38) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                
                <img src="/images/logo-full.png" alt="Machine Lattice Full Logo" className="h-10 relative z-10" />
              </div>
              <div className="border-t border-[rgb(28,32,38)] p-4 flex items-center justify-between bg-[#0A0A0F]">
                <div>
                  <h3 className="text-sm font-medium">Full Logo</h3>
                  <p className="text-xs text-[#8B9098] mt-1">PNG format</p>
                </div>
                <a 
                  href="/images/logo-full.png" 
                  download="Machine_Lattice_Logo.png"
                  className="px-4 py-2 bg-[#C84B15] hover:bg-[#E05619] text-black text-xs font-mono tracking-wider uppercase transition-colors rounded-sm"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Clear Space Guidelines */}
            <div className="border border-[rgb(28,32,38)] rounded-sm bg-[#09090D] overflow-hidden p-6 flex flex-col justify-center">
               <h3 className="font-mono text-[11px] tracking-widest text-[#C84B15] uppercase mb-4">Clear Space</h3>
               <div className="relative w-32 h-32 mb-6 mx-auto flex items-center justify-center border border-dashed border-[#8B9098]/30">
                 <img src="/images/logo-icon.svg" alt="Logo" className="w-16 h-16" />
                 <div className="absolute top-0 bottom-0 left-0 w-8 border-r border-dashed border-[#C84B15]/50 flex items-center justify-center bg-[#C84B15]/10">
                   <span className="text-[#C84B15] text-[10px] font-mono">1/3</span>
                 </div>
               </div>
               <p className="text-sm text-[#8B9098] leading-relaxed mb-4">
                 Make sure there is enough clear space when using the logo, such that there is enough room for everything to breathe. A good rule of thumb is at least 1/3 of the width of the symbol.
               </p>
               <p className="text-sm text-[#8B9098] leading-relaxed">
                 Do not modify, stretch, or alter the colors of the symbol outside of the provided guidelines.
               </p>
            </div>
          </div>
        </section>

        
        {/* Logo Misuse Grid */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-[rgb(28,32,38)] pb-4">
            <div>
              <p className="text-[#8B9098] text-sm mb-2 uppercase tracking-wider font-mono text-[10px]">Guidelines</p>
              <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
                Logo Misuse
              </h2>
            </div>
          </div>
          
          <div className="space-y-12">
            {/* Correct Usage Row */}
            <div>
              <h3 className="text-[#34C759] font-mono text-xs tracking-wider flex items-center gap-2 mb-6">
                <span className="text-lg">✓</span> CORRECT USAGE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-[#0A0A0F] border border-transparent">
                    {/* Transparent/light background effect */}
                    <div className="absolute inset-0 bg-white opacity-5"></div>
                    <img src="/images/logo-full.png" alt="Logo" className="h-8 relative z-10 brightness-[0.2]" />
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#34C759] flex items-center justify-center text-[#34C759] text-xs">✓</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-white mb-1">No Background</h4>
                    <p className="text-xs text-[#8B9098]">Dark logo version on transparent or light backgrounds</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-black">
                    <img src="/images/logo-full.png" alt="Logo" className="h-8 relative z-10" />
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#34C759] flex items-center justify-center text-[#34C759] text-xs">✓</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-white mb-1">Black Background</h4>
                    <p className="text-xs text-[#8B9098]">White logo with orange accent on pure black</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-[#1C1C24]">
                    <img src="/images/logo-full.png" alt="Logo" className="h-8 relative z-10" />
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#34C759] flex items-center justify-center text-[#34C759] text-xs">✓</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-white mb-1">Dark Background</h4>
                    <p className="text-xs text-[#8B9098]">White logo on brand-approved dark tones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incorrect Usage Row */}
            <div>
              <h3 className="text-[#FF3B30] font-mono text-xs tracking-wider flex items-center gap-2 mb-6">
                <span className="text-lg">×</span> INCORRECT USAGE
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 4 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-[#0A0A0F]">
                    <img src="/images/logo-full.png" alt="Logo" className="h-8 relative z-10" style={{ filter: "hue-rotate(270deg) saturate(2)" }} />
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#FF3B30] flex items-center justify-center text-[#FF3B30] text-xs">×</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-[#FF3B30] mb-1">Don&apos;t change the color</h4>
                    <p className="text-xs text-[#8B9098]">Never recolor the logo or replace the signature Runtime Orange with other hues. The orange is a core brand element.</p>
                  </div>
                </div>
                {/* 5 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-[#0A0A0F]">
                    <img src="/images/logo-full.png" alt="Logo" className="h-8 relative z-10" style={{ transform: "scaleX(1.5)" }} />
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#FF3B30] flex items-center justify-center text-[#FF3B30] text-xs">×</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-[#FF3B30] mb-1">Don&apos;t stretch or skew</h4>
                    <p className="text-xs text-[#8B9098]">Always lock aspect ratio and maintain proportions when resizing. Never distort the logo in any direction.</p>
                  </div>
                </div>
                {/* 6 */}
                <div className="space-y-4">
                  <div className="h-40 rounded-sm flex items-center justify-center relative overflow-hidden bg-[#0A0A0F]">
                    <div className="relative z-10 flex items-center">
                       <img src="/images/logo-full.png" alt="Logo" className="h-8" style={{ filter: "grayscale(1) contrast(2) brightness(1.2)" }} />
                    </div>
                    <div className="absolute top-3 right-3 w-5 h-5 rounded-full border border-[#FF3B30] flex items-center justify-center text-[#FF3B30] text-xs">×</div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-[#FF3B30] mb-1">Don&apos;t add gradients</h4>
                    <p className="text-xs text-[#8B9098]">Never apply gradient effects to the logo. The logo should remain flat with solid brand colors at all times.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Palette */}
        <section className="space-y-8">
          <div className="border-b border-[rgb(28,32,38)] pb-4">
            <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Brand Palette
            </h2>
            <p className="text-[#8B9098] mt-2">
              The primary and extended color palette. We emphasize high contrast, technical dark tones, and our signature runtime orange.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ColorCard name="Runtime Orange" hex="#C84B15" rgb="200, 75, 21" textColor="text-black" />
              <ColorCard name="System White" hex="#F0F0F5" rgb="240, 240, 245" textColor="text-black" />
              <ColorCard name="Secondary Gray" hex="#8B9098" rgb="139, 144, 152" textColor="text-white" border />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorCard name="Void Black" hex="#0D0D13" rgb="13, 13, 19" textColor="text-white" border />
              <ColorCard name="Border Dark" hex="#161622" rgb="22, 22, 34" textColor="text-white" border />
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div className="border-b border-[rgb(28,32,38)] pb-4">
            <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Typography
            </h2>
            <p className="text-[#8B9098] mt-2">
              Our typography mixes editorial elegance with technical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-4xl" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>Aa</div>
              <h3 className="font-medium text-lg">Fraunces</h3>
              <p className="text-xs text-[#8B9098] uppercase tracking-wider font-mono">Headings / Editorial</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl" style={{ fontFamily: "var(--font-geist, sans-serif)" }}>Aa</div>
              <h3 className="font-medium text-lg">Geist</h3>
              <p className="text-xs text-[#8B9098] uppercase tracking-wider font-mono">Body / UI Text</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-mono">Aa</div>
              <h3 className="font-medium text-lg">JetBrains Mono</h3>
              <p className="text-xs text-[#8B9098] uppercase tracking-wider font-mono">Code / Labels / Data</p>
            </div>
          </div>
        </section>

        {/* Guidelines & Terms */}
        <section className="space-y-8 pt-8">
          <div className="border-t border-[rgb(28,32,38)] pt-8">
            <h2 className="text-2xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Usage Guidelines
            </h2>
            <div className="prose prose-invert max-w-none text-[#8B9098] text-sm leading-relaxed space-y-6">
              <p>
                You&apos;re free to use the Machine Lattice brand in the ecosystem, provided you adhere to these guidelines. 
                By using any Machine Lattice trademarks, you agree to follow our instructions. Do not use the marks to impersonate Machine Lattice, 
                our team, or to imply sponsorship, endorsement, or a partnership that doesn&apos;t exist.
              </p>
              
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#C84B15] uppercase mb-1 block">ECOSYSTEM BUILDERS</span>
                <h4 className="text-white font-medium mb-2">Ecosystem Builders</h4>
                <p>
                  If you’re building on Machine Lattice without an official partnership, you’re an Ecosystem builder. This might include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Integration of Machine Lattice into your protocol or product.</li>
                  <li>A creative project designed by and for Machine Lattice users.</li>
                </ul>
                <p className="mt-2">
                  Modification of the logo is discouraged, but not forbidden if it is for creative purposes within the community. 
                  However, the brand cannot be used to imply an official partnership.
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#C84B15] uppercase mb-1 block">OFFICIAL PARTNERSHIPS</span>
                <h4 className="text-white font-medium mb-2">Official Partnerships</h4>
                <p>
                  An official partnership with us means joining forces to create impactful solutions. This might include:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Integration of your product into the Simulation Runtime.</li>
                  <li>Co-Marketing efforts with the Machine Lattice team.</li>
                  <li>R&D collaboration.</li>
                </ul>
                <p className="mt-2">
                  Partnerships may use the Machine Lattice Brand where needed, but they must not modify or change the logo.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function ColorCard({ name, hex, rgb, textColor, border = false }: { name: string, hex: string, rgb: string, textColor: string, border?: boolean }) {
  return (
    <div className={`rounded-sm overflow-hidden ${border ? 'border border-[rgb(28,32,38)]' : ''}`}>
      <div className="h-[120px] w-full" style={{ backgroundColor: hex }} />
      <div className="bg-[#0A0A0F] border-t border-[rgb(28,32,38)] p-4 flex flex-col gap-1">
        <span className="font-medium text-sm text-white">{name}</span>
        <span className="font-mono text-xs text-[#8B9098] uppercase">{hex}</span>
        <span className="font-mono text-[10px] text-[#6B6B7A]">RGB {rgb}</span>
      </div>
    </div>
  );
}

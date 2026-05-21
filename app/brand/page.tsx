import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets — Machine Lattice",
  description: "Official brand assets, guidelines, and logos for Machine Lattice.",
};

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#0D0D13] text-[#F0F0F5]">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 border-b border-[#161622] bg-[#0A0A0F]">
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
          <div className="border-b border-[#161622] pb-4">
            <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Logo & Symbol
            </h2>
            <p className="text-[#8B9098] mt-2">
              The Machine Lattice symbol represents a structural node network, used across all our products and communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Logo */}
            <div className="border border-[#161622] rounded-sm bg-[#09090D] overflow-hidden group">
              <div className="h-48 flex items-center justify-center p-8 relative">
                {/* Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#161622 1px, transparent 1px), linear-gradient(90deg, #161622 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                
                <img src="/images/logo-icon.svg" alt="Machine Lattice Icon" className="w-16 h-16 relative z-10" />
              </div>
              <div className="border-t border-[#161622] p-4 flex items-center justify-between bg-[#0A0A0F]">
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
            <div className="border border-[#161622] rounded-sm bg-[#09090D] overflow-hidden group">
              <div className="h-48 flex items-center justify-center p-8 relative">
                {/* Grid Background */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#161622 1px, transparent 1px), linear-gradient(90deg, #161622 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                
                <img src="/images/logo-full.png" alt="Machine Lattice Full Logo" className="h-10 relative z-10" />
              </div>
              <div className="border-t border-[#161622] p-4 flex items-center justify-between bg-[#0A0A0F]">
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
            <div className="border border-[#161622] rounded-sm bg-[#09090D] overflow-hidden p-6 flex flex-col justify-center">
               <h3 className="font-mono text-[11px] tracking-widest text-[#C84B15] uppercase mb-4">Clear Space</h3>
               <p className="text-sm text-[#8B9098] leading-relaxed mb-4">
                 Make sure there is enough clear space when using the logo, such that there is enough room for everything to breathe. A good rule of thumb is at least 1/3 of the width of the symbol.
               </p>
               <p className="text-sm text-[#8B9098] leading-relaxed">
                 Do not modify, stretch, or alter the colors of the symbol outside of the provided guidelines.
               </p>
            </div>
          </div>
        </section>

        {/* Brand Palette */}
        <section className="space-y-8">
          <div className="border-b border-[#161622] pb-4">
            <h2 className="text-2xl font-light tracking-tight" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Brand Palette
            </h2>
            <p className="text-[#8B9098] mt-2">
              The primary and extended color palette. We emphasize high contrast, technical dark tones, and our signature runtime orange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Palette Cards */}
            <ColorCard name="Runtime Orange" hex="#C84B15" rgb="200, 75, 21" textColor="text-black" />
            <ColorCard name="System White" hex="#F0F0F5" rgb="240, 240, 245" textColor="text-black" />
            <ColorCard name="Secondary Gray" hex="#8B9098" rgb="139, 144, 152" textColor="text-white" border />
            <ColorCard name="Void Black" hex="#0D0D13" rgb="13, 13, 19" textColor="text-white" border />
            <ColorCard name="Border Dark" hex="#161622" rgb="22, 22, 34" textColor="text-white" border />
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div className="border-b border-[#161622] pb-4">
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
          <div className="border-t border-[#161622] pt-8">
            <h2 className="text-2xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
              Usage Guidelines
            </h2>
            <div className="prose prose-invert max-w-none text-[#8B9098] text-sm leading-relaxed space-y-6">
              <p>
                You're free to use the Machine Lattice brand in the ecosystem, provided you adhere to these guidelines. 
                By using any Machine Lattice trademarks, you agree to follow our instructions. Do not use the marks to impersonate Machine Lattice, 
                our team, or to imply sponsorship, endorsement, or a partnership that doesn't exist.
              </p>
              
              <div>
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
    <div className={`rounded-sm overflow-hidden ${border ? 'border border-[#161622]' : ''}`}>
      <div className="h-32 w-full" style={{ backgroundColor: hex }} />
      <div className="bg-[#0A0A0F] border-t border-[#161622] p-4 flex flex-col gap-1">
        <span className="font-medium text-sm text-white">{name}</span>
        <span className="font-mono text-xs text-[#8B9098] uppercase">{hex}</span>
        <span className="font-mono text-[10px] text-[#6B6B7A]">RGB {rgb}</span>
      </div>
    </div>
  );
}

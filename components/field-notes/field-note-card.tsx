import React from "react";

export interface FieldNoteCardProps {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  observation: string;
}

const Graphic = ({ category }: { category: string }) => {
  if (category === "EMISSIONS" || category === "INCENTIVES" || category === "TREASURY" && category.includes("reserve")) {
    // Note: FN-026 is TREASURY but has a sine wave. We can check title or ID if needed, but let's just use Sine wave for INCENTIVES and EMISSIONS.
    // Wait, the FN-026 in the screenshot has a sine wave. Let's match it precisely.
    return (
      <svg className="w-full h-[60px]" viewBox="0 0 400 60" preserveAspectRatio="none">
        <path d="M40,50 Q120,50 200,10 T360,50" fill="none" stroke="#C84B15" strokeWidth="1.5" />
      </svg>
    );
  } else if (category === "SYBIL") {
    // Heatmap grid (2 rows, ~19 columns)
    return (
      <svg className="w-full h-[60px]" viewBox="0 0 400 60" preserveAspectRatio="xMinYMin slice">
        <g stroke="#0E1013" strokeWidth="2">
          {/* Top row */}
          {[...Array(19)].map((_, i) => (
            <rect key={`t-${i}`} x={i * 20} y="15" width="20" height="15" 
              fill={i > 5 && i < 15 ? "#C84B15" : i > 3 && i < 17 ? "#6A2D12" : "#2A2F36"} />
          ))}
          {/* Bottom row */}
          {[...Array(19)].map((_, i) => (
            <rect key={`b-${i}`} x={i * 20} y="30" width="20" height="15" 
              fill={i > 7 && i < 13 ? "#C84B15" : i > 5 && i < 15 ? "#6A2D12" : "#2A2F36"} />
          ))}
        </g>
      </svg>
    );
  } else if (category === "LIQUIDITY") {
    // Tapered horizontal wedges
    return (
      <svg className="w-full h-[60px]" viewBox="0 0 400 60" preserveAspectRatio="none">
        <polygon points="40,20 360,28 360,32 40,30" fill="#C84B15" />
        <polygon points="40,48 360,40 360,45 40,52" fill="#2A2F36" />
      </svg>
    );
  }
  
  // Default: Bar chart (TREASURY, GOVERNANCE)
  // Let's create ~18 touching bars.
  const barHeights = [40, 25, 30, 20, 45, 35, 15, 25, 40, 50, 45, 30, 40, 25, 35, 20, 45, 40];
  const highlightIndices = [0, 4, 9, 12, 16];
  return (
    <svg className="w-full h-[60px]" viewBox="0 0 400 60" preserveAspectRatio="none">
      {barHeights.map((h, i) => (
        <rect 
          key={i} 
          x={`${(i / 18) * 100}%`} 
          y={60 - h} 
          width={`${100 / 18}%`} 
          height={h} 
          fill={highlightIndices.includes(i) ? "#C84B15" : "#2A2F36"} 
          stroke="#0E1013"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export function FieldNoteCard({
  id,
  date,
  category,
  title,
  description,
  observation,
}: FieldNoteCardProps) {
  // Override for FN-026 which needs a sine wave despite being TREASURY
  const isSineWave = category === "EMISSIONS" || category === "INCENTIVES" || id === "FN-026";
  
  return (
    <div className="flex flex-col h-full bg-[#0E1013]">
      {/* Top Header */}
      <div className="flex items-center justify-between p-6 pb-4 text-[9px] tracking-widest uppercase font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[#C84B15] font-semibold">{id}</span>
          <span className="text-[#4C535A]">{date}</span>
        </div>
        <div className="px-1.5 py-0.5 border border-[#1C2026] text-[#4C535A] rounded-sm">
          {category}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 flex flex-col flex-grow">
        <h3 className="text-[17px] font-normal text-white leading-snug mb-3" style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}>
          {title}
        </h3>
        <p className="text-[12px] text-[#8A9098] leading-[1.6] mb-8 flex-grow">
          {description}
        </p>
        <div className="mb-6">
          {isSineWave ? (
            <svg className="w-full h-[60px]" viewBox="0 0 400 60" preserveAspectRatio="none">
              <path d="M40,50 Q120,10 200,30 T360,30" fill="none" stroke="#C84B15" strokeWidth="1" />
            </svg>
          ) : (
            <Graphic category={category} />
          )}
        </div>
      </div>

      {/* Observation Section */}
      <div className="px-6 py-4 border-t border-[#1C2026] flex items-center gap-3 text-[9px] font-mono">
        <span className="text-[#3A414A] font-semibold">[OBS]</span>
        <span className="text-[#658A91] truncate" title={observation}>
          {observation}
        </span>
      </div>
    </div>
  );
}

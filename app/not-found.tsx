import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col items-center justify-center text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-[#C84B15] uppercase mb-4">
        404 — PAGE NOT FOUND
      </p>
      <h1 
        className="text-4xl md:text-5xl font-light leading-[1.05] text-white mb-6"
        style={{ fontFamily: "var(--font-fraunces, Georgia, serif)" }}
      >
        Route does not{" "}
        <span className="italic text-[#6B6B7A]">
          exist.
        </span>
      </h1>
      <p className="text-sm text-[#8A8A9A] max-w-md leading-relaxed mb-10">
        The economic coordinate or module simulation path you are trying to resolve cannot be found in the current runtime context.
      </p>
      <Link
        href="/"
        className="bg-[#C84B15] hover:bg-[#E05A1F] text-white text-xs font-mono tracking-wider uppercase px-6 py-3.5 transition-all duration-200 rounded-sm"
      >
        Return to Home →
      </Link>
    </div>
  );
}

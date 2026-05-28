import type { Metadata } from "next";
import { AccessForm } from "@/components/access/access-form";

export const metadata: Metadata = {
  title: "Request Access",
  description: "Machine Lattice is in private deployment. Request access to run operational simulations for your blockchain ecosystem.",
  openGraph: {
    title: "Request Access — Machine Lattice",
    description: "Connect your economic surface, configure simulations, and run them against wallet-level behavior models.",
    images: [
      {
        url: "/images/og-access.png",
        width: 1200,
        height: 630,
        alt: "Request Access — Machine Lattice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Access — Machine Lattice",
    description: "Connect your economic surface, configure simulations, and run them against wallet-level behavior models.",
    images: ["/images/og-access.png"],
  },
};

export default function AccessPage() {
  return <AccessForm />;
}

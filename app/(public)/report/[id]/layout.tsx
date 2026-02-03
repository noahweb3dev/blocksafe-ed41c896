import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scam Report Details",
  description: "View detailed information about a reported scam including wallet address, blockchain network, scam type, verification status, and safety warnings.",
  keywords: ["scam report details", "wallet address report", "crypto scam verification", "blockchain fraud details"],
  openGraph: {
    title: "Scam Report Details - Blocksafespace",
    description: "View detailed information about a reported scam including wallet address, verification status, and safety warnings.",
  },
  twitter: {
    title: "Scam Report Details - Blocksafespace",
    description: "View detailed information about a reported scam including wallet address, verification status, and safety warnings.",
  },
};

export default function ReportDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

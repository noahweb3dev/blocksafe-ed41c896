import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report a Scam",
  description: "Help protect others by reporting fraudulent wallet addresses, fake projects, or any scam activity you've encountered in the Web3 space. Submit detailed scam reports with evidence.",
  keywords: ["report scam", "report crypto scam", "report blockchain fraud", "submit scam report", "Web3 scam reporting", "crypto fraud report"],
  openGraph: {
    title: "Report a Scam - Blocksafespace",
    description: "Help protect others by reporting fraudulent wallet addresses, fake projects, or any scam activity you've encountered in the Web3 space.",
    url: "/report",
  },
  twitter: {
    title: "Report a Scam - Blocksafespace",
    description: "Help protect others by reporting fraudulent wallet addresses, fake projects, or any scam activity you've encountered in the Web3 space.",
  },
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

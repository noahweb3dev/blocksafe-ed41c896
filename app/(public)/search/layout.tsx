import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Scam Reports",
  description: "Search through thousands of verified scam reports across all major blockchains. Check wallet addresses, contract addresses, and transaction hashes before engaging.",
  keywords: ["search scams", "wallet address checker", "scam database search", "crypto address verification", "blockchain scam lookup", "verify wallet address"],
  openGraph: {
    title: "Search Scam Reports - Blocksafespace",
    description: "Search through thousands of verified scam reports across all major blockchains. Check wallet addresses before engaging.",
    url: "/search",
  },
  twitter: {
    title: "Search Scam Reports - Blocksafespace",
    description: "Search through thousands of verified scam reports across all major blockchains. Check wallet addresses before engaging.",
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

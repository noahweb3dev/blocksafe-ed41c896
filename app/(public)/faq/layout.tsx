import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Everything you need to know about using Blocksafespace to protect yourself in the Web3 ecosystem. Learn about reporting scams, verification processes, and account management.",
  keywords: ["blocksafespace FAQ", "crypto scam FAQ", "Web3 security questions", "blockchain scam prevention FAQ", "crypto safety guide"],
  openGraph: {
    title: "FAQ - Blocksafespace",
    description: "Everything you need to know about using Blocksafespace to protect yourself in the Web3 ecosystem.",
    url: "/faq",
  },
  twitter: {
    title: "FAQ - Blocksafespace",
    description: "Everything you need to know about using Blocksafespace to protect yourself in the Web3 ecosystem.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

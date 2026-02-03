import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blocksafespace - Report & Expose Blockchain Scams",
    template: "%s | Blocksafespace",
  },
  description: "Search for malicious wallet addresses, report scams, and protect yourself from crypto fraud across all major blockchains.",
  keywords: ["blockchain scams", "crypto fraud", "wallet address checker", "scam database", "Web3 security", "cryptocurrency safety"],
  authors: [{ name: "Blocksafespace" }],
  creator: "Blocksafespace",
  publisher: "Blocksafespace",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://blocksafespace.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Blocksafespace",
    title: "Blocksafespace - Report & Expose Blockchain Scams",
    description: "Search for malicious wallet addresses, report scams, and protect yourself from crypto fraud across all major blockchains.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blocksafespace - Report & Expose Blockchain Scams",
    description: "Search for malicious wallet addresses, report scams, and protect yourself from crypto fraud across all major blockchains.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recovery Dashboard",
  description: "Access your recovery dashboard to track fund recovery cases, manage documents, request withdrawals, and update your profile. Secure access to your recovery account.",
  keywords: ["recovery dashboard", "fund recovery", "crypto recovery", "scam recovery", "withdrawal dashboard"],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Recovery Dashboard - Blocksafespace",
    description: "Access your recovery dashboard to track fund recovery cases and manage your account.",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

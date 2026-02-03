import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Blocksafespace recovery dashboard to access your fund recovery cases, documents, and account settings.",
  keywords: ["login", "sign in", "recovery account", "dashboard login"],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Login - Blocksafespace",
    description: "Sign in to your Blocksafespace recovery dashboard to access your account.",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

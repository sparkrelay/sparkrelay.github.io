import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SparkRelay",
    template: "%s | SparkRelay",
  },
  description:
    "SparkRelay is an independent open-source organization building practical software, experiments, and modular tools for the open web.",
  metadataBase: new URL("https://sparkrelay.github.io"),
  openGraph: {
    title: "SparkRelay",
    description: "Small sparks, connected into useful software.",
    url: "https://sparkrelay.github.io",
    siteName: "SparkRelay",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

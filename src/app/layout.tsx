import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "200 800",
});
const dmSans = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Rldcoin — Building payments for humanity’s interstellar future",
    template: "%s | Rldcoin",
  },
  description:
    "Rldcoin’s goal is peer-to-peer payments between future human communities across star systems. The permanent Earth network is the first step; interstellar routes are not live.",
  openGraph: {
    siteName: "Rldcoin",
    type: "website",
    locale: "en_US",
    url: SITE,
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  themeColor: "#102d3b",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

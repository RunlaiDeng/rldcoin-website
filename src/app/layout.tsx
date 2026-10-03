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
    default:
      "Rldcoin — An interstellar peer-to-peer payment system for humanity’s future",
    template: "%s | Rldcoin",
  },
  description:
    "Rldcoin is building an interstellar peer-to-peer payment system for the future of humanity. Development uses a value-free Earth testnet; a new mainnet and physical interstellar routes remain unqualified.",
  openGraph: {
    siteName: "Rldcoin",
    type: "website",
    locale: "en_US",
    url: SITE,
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image.png"] },
  icons: {
    icon: "/brand/rldcoin-coin-logo.png",
    apple: "/brand/rldcoin-coin-logo.png",
  },
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${dmSans.variable}`}
    >
      <body>
        <Header />
        <main id="main">
          <aside
            className="network-development"
            aria-label="Network release status"
          >
            <strong>Testnet only. No active mainnet.</strong> Testnet currency
            has no monetary value. <a href="/network">View current status</a>
          </aside>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

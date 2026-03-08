import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { NoiseOverlay } from "@/components/noise-overlay";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ryan Cadby",
  description: "Portfolio of Ryan Cadby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-MVEGYJ3FYK"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MVEGYJ3FYK');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${playfairDisplay.variable} ${spaceMono.variable} antialiased`}
      >
        <NoiseOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}

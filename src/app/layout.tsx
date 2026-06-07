import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ALIMUF - Alamatul Istijabah Muslim International Foundation",
  description:
    "Official website of Alamatul Istijabah Muslim International Foundation. Islamic education, community service, and spiritual development.",
  keywords:
    "Islamic education, Muslim community, Islamic organization, Lagos Nigeria",
  openGraph: {
    title: "ALIMUF - Islamic Organization",
    description: "Alamatul Istijabah Muslim International Foundation",
    type: "website",
    url: "https://alimuf.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F6B43" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

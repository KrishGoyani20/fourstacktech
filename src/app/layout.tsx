import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FourStackTech — Premium Software Development Company",
  description:
    "FourStackTech is a world-class software development company specializing in mobile apps, web applications, AI solutions, SaaS, and enterprise software. Partner with us to build your next big product.",
  keywords: [
    "software development company",
    "mobile app development",
    "flutter development",
    "web application development",
    "AI solutions",
    "SaaS development",
    "enterprise software",
    "FourStackTech",
  ],
  openGraph: {
    title: "FourStackTech — Premium Software Development Company",
    description:
      "World-class software agency specializing in mobile apps, web applications, AI & SaaS solutions.",
    type: "website",
    siteName: "FourStackTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "FourStackTech — Premium Software Development Company",
    description:
      "World-class software agency specializing in mobile apps, web applications, AI & SaaS solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

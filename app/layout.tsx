import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "AAU CoTBE | 2017–2025 Graduate Students Directory",
  description:
    "Explore the 2017–2025 graduate students of Addis Ababa University's College of Technology and Built Environment. Browse profiles, departments, and academic details.",
  keywords: [
    "Addis Ababa University",
    "College of Technology and Built Environment",
    "Graduate Students",
    "2017",
    "2025",
    "Student Directory",
    "AAU",
    "Ethiopia",
  ],
  authors: [{ name: "Addis Ababa University", url: "https://aau.edu.et" }],
  creator: "AAU CoTBE",
  generator: "Next.js",
  applicationName: "Graduate Students Directory",
  robots: "index, follow",
  metadataBase: new URL("https://your-deployment-url.com"),
  openGraph: {
    title: "AAU CoTBE | Graduate Students 2017–2025",
    description:
      "Meet the 2017–2025 graduates from AAU's College of Technology and Built Environment.",
    type: "website",
    url: "https://your-deployment-url.com",
    siteName: "AAU CoTBE Graduate Directory",
   
    images: [
      {
        url: "https://your-deployment-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AAU CoTBE Graduate Students",
      },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

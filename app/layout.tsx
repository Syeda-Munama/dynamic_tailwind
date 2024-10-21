import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { EB_Garamond } from "next/font/google"; // Import EB Garamond from Google Fonts
import Navbar from "./components/Navbar";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "700"], // Add weights you plan to use
});




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: ebGaramond.style.fontFamily, backgroundColor: "white" , color: "black" }}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

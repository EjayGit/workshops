import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--bold",
  subsets: ["latin"],
  weight: "700",
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//global metadata
export const metadata = {
  title: "Rollercoasters Website",
  description:
    "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
  openGraph: {
    title: "Rollercoasters Website",
    description:
      "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
    type: "website",
    url: "http://localhost:3000",
    images: ["imgurl"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Link href={'/'}>Home</Link> | <Link href={'/posts/new'}>New Post</Link>
        {children}
      </body>
    </html>
  );
}

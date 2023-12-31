import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import { Providers } from "./providers";

const sunday = localFont({
  src: "./fonts/sunday.ttf",
  variable: "--font-title",
});
const veles = localFont({
  src: "./fonts/veles.woff2",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Hanami Sushi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="max-w-7xl mx-auto h-screen py-10 px-4 scrollbar-thin scrollbar-thumb-neutral-200 scrollbar-track-neutral-400 bg-[#f1f1f1]"
    >
      <body
        className={`${veles.variable} ${sunday.variable} font-primary overflow-x-hidden`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

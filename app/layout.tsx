import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/header/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Studio 36",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className="layout-grid relative px-4 lg:px-0">
        <SmoothScroll>
          <div className="layout-grid absolute top-0 left-0 w-full h-full pointer-events-none px-4 lg:px-0">
            {[...Array(7)].map((_, index) => (
            <div key={index} className={`-z-10 pointer-events-none relative w-full before:w-full before:absolute ${index > 2 ? "hidden lg:block" : "lg:block"} ${index === 0 ? "before:border-l lg:before:border-l-0" : "before:border-l"} before:border-black before:border-opacity-15 before:h-full ${index === 6 ? "before:border-r" : ""} ${index === 2 ? "before:border-r lg:before:border-r-0" : ""}`} ></div>
            ))}
          </div>
          <Header />
          {children}
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}

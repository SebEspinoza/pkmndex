import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokéDex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="dark" lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-400">
          <div>
            <h1 className="text-4xl font-bold text-black">PokéDex</h1>
          </div>
          {children}
        </main >
      </body >
    </html >
  );
}

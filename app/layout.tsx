import { Inter } from "next/font/google";
import "./globals.css";

import { ToggleProvider } from "@/context";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ToggleProvider>
        <body className={`${inter.className}`}>{children}</body>
      </ToggleProvider>
    </html>
  );
}

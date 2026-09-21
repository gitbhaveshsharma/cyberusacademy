import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberus Academy | Security Education",
  description: "Practical cybersecurity education for the next generation of security professionals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

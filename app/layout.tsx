import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberusacademy.com"),
  title: {
    default: "Cyberus Academy | Practical Cybersecurity Education",
    template: "%s | Cyberus Academy",
  },
  description: "Practical cybersecurity education for the next generation of security professionals.",
  applicationName: "Cyberus Academy",
  openGraph: {
    type: "website",
    siteName: "Cyberus Academy",
    title: "Cyberus Academy | Practical Cybersecurity Education",
    description: "Build practical cybersecurity skills through focused courses and hands-on labs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberus Academy | Practical Cybersecurity Education",
    description: "Build practical cybersecurity skills through focused courses and hands-on labs.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

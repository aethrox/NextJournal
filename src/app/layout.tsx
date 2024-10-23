import type { Metadata } from "next";

import "@/styles/global.css"
import "@/styles/reset.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextJournal",
  description: "NextJournal is a modern blog platform developed using technologies such as Next.js, React, TailwindCSS, Prisma, PostgreSQL, NextAuth.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

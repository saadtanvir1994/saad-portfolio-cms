import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";
import { getMenuContent } from "@/lib/actions";
import Footer from "@/components/layout/footer";
import NavigationMenu from "@/components/layout/navigation-menu";
import HrefLangTag from "@/components/shared/href-lang-tag";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saadtanvir.com"),
  title: "Web Designer, Front End Developer, SEO Expert | Saad Tanvir",
  description:
    "Crafting seamless user experiences, stunning designs, and powerful SEO solutions to help your brand shine. Your all-in-one expert for digital success.",
  alternates: {
    canonical: "/",
  },
  other: {
    seobility: "a266dca5342da97d7f48374d8961496e",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuContent = await getMenuContent();

  return (
    <html lang="en">
      <head>
        <HrefLangTag />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ClientLayoutWrapper>
          <div>
            {/* <MainMenu menuContent={menuContent} /> */}
            <NavigationMenu menuContent={menuContent} />
            {children}
            <Footer />
          </div>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
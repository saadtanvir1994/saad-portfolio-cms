import type { Metadata } from "next";
import localFont from 'next/font/local'

import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";
import { getMenuContent } from "@/lib/actions";
import Footer from "@/components/layout/footer";
import NavigationMenu from "@/components/layout/navigation-menu";
import HrefLangTag from "@/components/shared/href-lang-tag";
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';


const fkGroteskNeue = localFont({
  variable: '--font-main',
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  src: [
    {
      path: './fonts/FKGroteskNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-BlackItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-BlackItalic.woff',
      weight: '800',
      style: 'italic',
    },
    {
      path: './fonts/FKGroteskNeue-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/FKGroteskNeue-Black.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  
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
    "google-site-verification": "JTnZeSi6O3eRqw0FLoHOPIsiTmwdfs6cErpYwowstDA"
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rfx92t1jwg");
            `,
          }}
        />
      </head>
      <body className={`${fkGroteskNeue.variable} antialiased`}>
        <ClientLayoutWrapper>
          <div>
            {/* <MainMenu menuContent={menuContent} /> */}
            <NavigationMenu menuContent={menuContent} />
            {children}
            <Footer />
          </div>
        </ClientLayoutWrapper>
      </body>
      <GoogleAnalytics gaId="G-79XY3RYXR5" />
    </html>
  );
}


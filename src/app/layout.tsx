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
         {/* Meta Pixel Code */}
         <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '805871228634009');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=805871228634009&ev=
            PageView&noscript=1"/>
        </noscript>
        {/* End Meta Pixel Code */}
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


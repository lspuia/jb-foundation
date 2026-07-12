import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import "./globals.css";
import "./jb-foundation.css";

export const metadata: Metadata = {
  title: "JB Foundation | A Cause for Paws",
  description: "Animal Rescue in Aizawl, Mizoram : Rescue, Rehabilitate & Educate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-18VZ4SQ4LB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-18VZ4SQ4LB');
          `}
        </Script>
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}

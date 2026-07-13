import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import "./globals.css";
import "./jb-foundation.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jbfoundation.co.in'),
  title: {
    default: "JB Foundation | A Cause for Paws",
    template: "%s | JB Foundation"
  },
  description: "Animal Rescue in Aizawl, Mizoram : Rescue, Rehabilitate & Educate",
  keywords: ['JB Foundation', 'animal rescue', 'Mizoram', 'Aizawl', 'pet rescue', 'animal welfare', 'NGO'],
  authors: [{ name: 'JB Foundation' }],
  creator: 'JB Foundation',
  publisher: 'JB Foundation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-18VZ4SQ4LB',
  },
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
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'JB Foundation',
              alternateName: 'JBF - A Cause for Paws',
              url: 'https://www.jbfoundation.co.in',
              logo: 'https://www.jbfoundation.co.in/jb-foundation.png',
              description: 'Animal rescue and welfare organization in Aizawl, Mizoram. We rescue, rehabilitate, and rehome abused and abandoned animals.',
              foundingDate: '2016-08-15',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Zemabawk Kawn Veng',
                addressLocality: 'Aizawl',
                addressRegion: 'Mizoram',
                postalCode: '796017',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-8259-989-871',
                contactType: 'Customer Service',
                email: 'jbfoundation20@gmail.com',
              },
              sameAs: [
                'https://www.facebook.com/JBfoundationMizoram/',
              ],
            }),
          }}
        />
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}

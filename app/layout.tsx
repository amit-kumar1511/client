import type { Metadata, Viewport } from "next";
import { Marcellus, Karla, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-devanagari",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#332219",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wellnesswavespa.com"),
  title: "Amazing Wellness Spa | Premier Massage & Wellness Spa in Lajpat Nagar 2, New Delhi",
  description:
    "Discover luxury massage & spa treatments at Amazing Wellness Spa, 72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2, New Delhi, Delhi - 110024. Open 24 hours. Online booking hours: 11:00 AM – 11:00 PM. Contact Sunny on WhatsApp or call +91 8797191340.",
  keywords: [
    "Amazing Wellness Spa",
    "Spa in Lajpat Nagar 2",
    "Massage Spa New Delhi",
    "Full Body Massage",
    "Deep Tissue Massage",
    "Thai Balm Massage",
    "Aroma Massage",
    "24 Hours Spa Lajpat Nagar",
    "Sunny Amazing Wellness Spa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amazing Wellness Spa | Luxury Spa in Lajpat Nagar 2, New Delhi",
    description:
      "Premium massage and wellness spa in Lajpat Nagar 2. Open 24 hours (Online hours: 11:00 AM – 11:00 PM). Contact Sunny on WhatsApp or call +91 8797191340.",
    type: "website",
    url: "/",
    siteName: "Amazing Wellness Spa",
    images: [
      {
        url: "/images/massage2.jpg",
        width: 1200,
        height: 800,
        alt: "Amazing Wellness Spa Treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Wellness Spa | Luxury Spa in Lajpat Nagar 2, New Delhi",
    description:
      "Premium massage and wellness spa in Lajpat Nagar 2. Open 24 hours. Contact Sunny on WhatsApp or call +91 8797191340.",
    images: ["/images/massage2.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Amazing Wellness Spa",
  image: "/images/logo.png",
  telephone: "+91 8797191340",
  address: {
    "@type": "PostalAddress",
    streetAddress: "72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110024",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5694,
    longitude: 77.2435,
  },
  openingHours: "Mo-Su 00:00-23:59",
  url: "https://wellnesswavespa.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${karla.variable} ${devanagari.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

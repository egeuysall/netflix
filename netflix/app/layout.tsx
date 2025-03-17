import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define base URL for consistency
const BASE_URL = "https://www.netflix.egeuysal.com";

// Define metadata with proper types
export const metadata: Metadata = {
  title: {
    default: "Netflix – Watch Movies & TV Shows Online",
    template: "%s | Netflix",
  },
  description:
    "Stream unlimited movies, TV shows, and exclusive originals anytime, anywhere. No ads, no commitments. Sign up and start watching today!",
  metadataBase: new URL(BASE_URL),
  authors: [{ name: "Netflix" }],
  keywords: [
    "Netflix", "streaming service", "watch movies online", "TV shows", 
    "original series", "binge-watch", "unlimited streaming", "on-demand content", 
    "Netflix originals", "blockbuster films", "trending series", 
    "award-winning content", "HD streaming", "4K streaming", "no ads", 
    "watch anytime", "online entertainment", "best streaming platform", 
    "movie streaming", "TV streaming", "sign up for Netflix"
  ],
  openGraph: {
    title: "Netflix",
    description:
      "Stream unlimited movies, TV shows, and exclusive originals anytime, anywhere. No ads, no commitments. Sign up and start watching today!",
    url: BASE_URL,
    siteName: "Netflix by Ege Uysal",
    images: [
      {
        url: "/seo/og-netflix.png",
        width: 1200,
        height: 630,
        alt: "Netflix Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@netflix",
    title: "Netflix",
    description:
      "Stream unlimited movies, TV shows, and exclusive originals anytime, anywhere. No ads, no commitments. Sign up and start watching today!",
    images: ["/seo/og-netflix.png"],
    creator: "@netflix",
  },
  icons: {
    icon: "/icon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/icon.ico",
  },
  manifest: "/manifest.json",
  robots: "index, follow",
  alternates: {
    canonical: BASE_URL,
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Netflix",
  },
};

// Define interfaces for data structure
interface ProductData {
  name: string;
  image: string;
  description: string;
}

interface CreatorData {
  "@type": string;
  name: string;
  jobTitle: string;
  worksFor: {
    "@type": string;
    name: string;
  };
}

interface JsonLdData {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  url: string;
  creator: CreatorData;
  sameAs: string[];
}

// Typed data fetching function
async function getProduct(): Promise<ProductData> {
  return {
    name: "Netflix",
    image: "/seo/og-netflix.png",
    description:
      "Stream unlimited movies, TV shows, and exclusive originals anytime, anywhere. No ads, no commitments. Sign up and start watching today!",
  };
}

// Generate JSON-LD with proper typing
async function generateJsonLd(): Promise<JsonLdData> {
  const product = await getProduct();
  
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: product.name,
    image: product.image,
    description: product.description,
    url: BASE_URL,
    creator: {
      "@type": "Person",
      name: "Ege Uysal",
      jobTitle: "Creative Professional",
      worksFor: {
        "@type": "Organization",
        name: "Self-employed",
      },
    },
    sameAs: [
      "https://twitter.com/egecreates",
      "https://www.linkedin.com/in/egeuysal",
      "https://www.instagram.com/egeuysalo",
    ],
  };
}

// Layout component with proper typing
export default async function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const jsonLd = await generateJsonLd();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <LayoutWrapper jsonLdData={jsonLd}>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

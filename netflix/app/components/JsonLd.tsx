"use client";

import { useEffect } from "react";

// Base type for common JSON-LD properties
interface JsonLdBase {
  "@context": string;
  "@type": string;
  "@id"?: string;
}

// Type definitions for different schema types
interface Organization extends JsonLdBase {
  "@type": "Organization";
  name: string;
  logo?: string;
  url?: string;
  sameAs?: string[];
  description?: string;
}

interface Product extends JsonLdBase {
  "@type": "Product";
  name: string;
  image?: string | string[];
  description?: string;
  brand?: {
    "@type": "Brand" | "Organization";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    price?: number;
    priceCurrency?: string;
    availability?: string;
  };
}

interface Article extends JsonLdBase {
  "@type": "Article" | "BlogPosting" | "NewsArticle";
  headline: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  author?: {
    "@type": "Person" | "Organization";
    name: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
    logo?: {
      "@type": "ImageObject";
      url: string;
    };
  };
  description?: string;
}

interface Person extends JsonLdBase {
  "@type": "Person";
  name: string;
  image?: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}

interface LocalBusiness extends JsonLdBase {
  "@type": "LocalBusiness";
  name: string;
  image?: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
  openingHours?: string | string[];
  geo?: {
    "@type": "GeoCoordinates";
    latitude?: number;
    longitude?: number;
  };
}

// Generic schema type that could be any of the defined types or a custom one
type JsonLdSchema = Organization | Product | Article | Person | LocalBusiness | Record<string, any>;

// Props interface for the component
interface JsonLdProps {
  jsonLdData: JsonLdSchema | JsonLdSchema[];
}

/**
 * JsonLd component for adding structured data to the document head
 * @param jsonLdData - The JSON-LD structured data to be injected
 * @returns null - This component doesn't render anything visible
 */
const JsonLd = ({ jsonLdData }: JsonLdProps): null => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(jsonLdData, null, 2);
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return (): void => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [jsonLdData]);

  // This component doesn't render anything visible
  return null;
};

export default JsonLd;
export type { 
  JsonLdProps, 
  JsonLdSchema,
  Organization,
  Product,
  Article,
  Person,
  LocalBusiness
};

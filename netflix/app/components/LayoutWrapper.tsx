import React from 'react';
import JsonLd from './JsonLd';

/**
 * Type definition for JSON-LD data with common schema.org properties
 */
export type JsonLdSchema = {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  // Additional optional properties that might be used in various schemas
  url?: string;
  author?: {
    "@type": string;
    name: string;
  };
  datePublished?: string;
  publisher?: {
    "@type": string;
    name: string;
    logo?: {
      "@type": string;
      url: string;
    };
  };
  [key: string]: any; // Allow for additional properties
};

/**
 * Props interface for the LayoutWrapper component
 */
interface LayoutWrapperProps {
  /**
   * JSON-LD structured data to be included in the page
   */
  jsonLdData: JsonLdSchema;
  
  /**
   * Child elements to be wrapped by the layout
   */
  children: React.ReactNode;
  
  /**
   * Optional className for additional styling
   */
  className?: string;
}

/**
 * Layout wrapper component that includes JSON-LD structured data
 * and renders child components
 */
export default function LayoutWrapper({
  jsonLdData,
  children,
  className = '',
}: LayoutWrapperProps): React.ReactElement {
  return (
    <div className={className}>
      <JsonLd jsonLdData={jsonLdData} />
      {children}
    </div>
  );
}

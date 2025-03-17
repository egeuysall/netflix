"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import seasons from "../seasons";

// Define comprehensive interfaces for all data types
interface Episode {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
}

interface Season {
  id: number;
  episodes: Episode[];
}

interface MovieMetadata {
  title: string;
  matchPercentage?: number;
  releaseYear?: number;
  ageRating?: string;
  seasonCount?: number;
  description: string;
  cast: string[];
  genres: string[];
  traits: string[];
  coverImage: string;
}

interface MovieProps {
  name: string;
  bgColor: string;
  textColor: string;
  children?: React.ReactNode;
  triggerType?: 'button' | 'custom';
  movieData?: MovieMetadata; // Optional movie data for dynamic content
}

const Movie: React.FC<MovieProps> = ({ 
  name, 
  bgColor, 
  textColor, 
  children,
  triggerType = 'button',
  movieData
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set default movie data if not provided
  const defaultMovieData: MovieMetadata = {
    title: "Revuelta",
    matchPercentage: 98,
    releaseYear: 1810,
    ageRating: "18+",
    seasonCount: 1,
    description: "The Latin American Revolution was a series of uprisings in the early 19th century, where leaders like Simón Bolívar and José de San Martín fought for independence from Spanish and Portuguese rule.",
    cast: ["Ege Uysal"],
    genres: ["Drama", "Political", "War"],
    traits: ["Gripping", "Authentic"],
    coverImage: "/cover.png"
  };

  const movieInfo: MovieMetadata = movieData || defaultMovieData;
  
  // Client-side only code
  useEffect(() => {
    setIsMounted(true);
    
    // Cleanup function
    return () => {
      if (isOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  // Handle body scroll when modal is open
  useEffect(() => {
    if (!isMounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, isMounted]);

  const openMovie = (): void => setIsOpen(true);
  const closeMovie = (): void => setIsOpen(false);
  
  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedSeason(parseInt(e.target.value, 10));
  };

  const currentSeason = seasons.find(season => season.id === selectedSeason);

  return (
    <>
      {triggerType === 'button' ? (
        <button
          onClick={openMovie}
          className={`px-6 py-2 ${bgColor} ${textColor} font-semibold rounded-sm text-lg`}
        >
          {name}
        </button>
      ) : (
        <div onClick={openMovie} className="cursor-pointer">
          {children}
        </div>
      )}

      {isMounted && isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeMovie}
        >
          <div
            className="bg-neutral-900 rounded-lg w-[90%] max-w-5xl h-[90vh] overflow-hidden"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div
              className="relative h-full overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                onClick={closeMovie}
                className="absolute top-4 right-4 text-white bg-black/40 w-8 h-8 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1=" ▋

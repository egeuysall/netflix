"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { seasons } from "../seasons";

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
  seasons?: Season[]; // Optional seasons data
}

const Movie: React.FC<MovieProps> = ({ 
  name, 
  bgColor, 
  textColor, 
  children,
  triggerType = 'button',
  movieData,
  seasons: seasonsProp
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Use provided seasons data or default imported seasons
  const availableSeasons: Season[] = seasonsProp || seasons;

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

  const currentSeason = availableSeasons.find(season => season.id === selectedSeason);

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
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <main>
                <section className="relative">
                  <div className="relative w-full h-[56.25vw] max-h-[70vh]">
                    <Image
                      src={movieInfo.coverImage}
                      alt={`${movieInfo.title} Cover`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                      {movieInfo.title}
                    </h1>
                    <div className="flex gap-3 mb-4 items-center">
                      <button 
                        className="bg-white text-black py-2 px-6 rounded-md flex items-center font-semibold hover:bg-opacity-80 transition"
                        aria-label="Play"
                      >
                        <Image
                          src="/icons/play.svg"
                          alt="Play"
                          width={18}
                          height={18}
                          className="mr-2"
                        />
                        Play
                      </button>
                      <button 
                        className="bg-gray-500/40 text-white p-2 rounded-full flex items-center justify-center hover:bg-gray-500/60 transition backdrop-blur-sm w-8 h-8 outline-2 outline-neutral-400"
                        aria-label="Add to My List"
                      >
                        <Image
                          src="/icons/plus.svg"
                          alt="Add to My List"
                          width={18}
                          height={18}
                        />
                      </button>
                      <button 
                        className="bg-gray-500/40 text-white p-2 rounded-full flex items-center justify-center hover:bg-gray-500/60 transition backdrop-blur-sm w-8 h-8 outline-2 outline-neutral-400"
                        aria-label="Like"
                      >
                        <Image
                          src="/icons/up.svg"
                          alt="Like"
                          width={18}
                          height={18}
                        />
                      </button>
                    </div>
                  </div>
                </section>

                <div className="p-6 md:p-12 pt-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        {movieInfo.matchPercentage && (
                          <span className="text-green-500 font-bold">
                            {movieInfo.matchPercentage}% Match
                          </span>
                        )}
                        {movieInfo.releaseYear && (
                          <span className="text-neutral-500 text-md">{movieInfo.releaseYear}</span>
                        )}
                        {movieInfo.ageRating && (
                          <span className="text-neutral-500 text-md">{movieInfo.ageRating}</span>
                        )}
                        {movieInfo.seasonCount && (
                          <span className="text-neutral-500 text-md">
                            {movieInfo.seasonCount} {movieInfo.seasonCount === 1 ? 'Season' : 'Seasons'}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300">{movieInfo.description}</p>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {movieInfo.cast.length > 0 && (
                          <p>
                            <span className="text-gray-500">Cast:</span> {movieInfo.cast.join(', ')}
                          </p>
                        )}
                        {movieInfo.genres.length > 0 && (
                          <p className="mt-2">
                            <span className="text-gray-500">Genres:</span> {movieInfo.genres.join(', ')}
                          </p>
                        )}
                        {movieInfo.traits.length > 0 && (
                          <p className="mt-2">
                            <span className="text-gray-500">This show is:</span>{" "}
                            {movieInfo.traits.join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-12 pb-12">
                  <div className="flex items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Episodes</h2>
                    {availableSeasons.length > 1 && (
                      <div className="ml-4 relative">
                        <select 
                          value={selectedSeason}
                          onChange={handleSeasonChange}
                          className="bg-neutral-800 text-white p-2 rounded"
                          aria-label="Select season"
                        >
                          {availableSeasons.map((season) => (
                            <option key={season.id} value={season.id}>
                              Season {season.id}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {currentSeason?.episodes.map((episode: Episode) => (
                      <div
                        key={episode.id}
                        className="block md:flex text-white gap-4 pb-4 group cursor-pointer rounded p-2 hover:bg-neutral-800/50 transition-colors"
                      >
                        <div className="relative w-32 h-20 flex-shrink-0 mb-4 md:mb-0">
                          <Image
                            src={episode.thumbnail}
                            alt={`Episode ${episode.id}: ${episode.title}`}
                            fill
                            className="object-cover rounded"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-black/50 rounded-full p-2">
                              <Image 
                                src="/icons/play.svg"
                                alt="Play"
                                width={16}
                                height={16}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">
                              <span className="text-neutral-400">{episode.id}.</span> {episode.title}
                            </h3>
                            <span className="text-gray-400 text-sm">
                              {episode.duration}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            {episode.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;

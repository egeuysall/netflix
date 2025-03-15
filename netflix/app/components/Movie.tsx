"use client";
import React, { useState } from "react";
import Image from "next/image";
import seasons from "../seasons";

interface ModalProps {
  name: string;
  bgColor: string;
  textColor: string;
}

interface Episode {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ name, bgColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(1);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={`px-6 py-2 ${bgColor} ${textColor} font-semibold rounded-sm text-lg`}
      >
        {name}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-neutral-900 rounded-lg w-[90%] max-w-5xl h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative h-full overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/40 w-8 h-8 rounded-full flex items-center justify-center z-10 hover:bg-black/60 transition-colors"
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
                      src="/cover.png"
                      alt="Featured Movie"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                      Revuelta
                    </h1>
                    <div className="flex gap-3 mb-4 items-center">
                      <button className="bg-white text-black py-2 px-6 rounded-md flex items-center font-semibold hover:bg-opacity-80 transition">
                        <Image
                          src="/icons/play.svg"
                          alt="Play"
                          width={18}
                          height={18}
                          className="mr-2"
                        />
                        Play
                      </button>
                      <button className="bg-gray-500/40 text-white p-2 rounded-full flex items-center justify-center hover:bg-gray-500/60 transition backdrop-blur-sm w-8 h-8 outline-2 outline-neutral-400">
                        <Image
                          src="/icons/plus.svg"
                          alt="Add to My List"
                          width={18}
                          height={18}
                        />
                      </button>
                      <button className="bg-gray-500/40 text-white p-2 rounded-full flex items-center justify-center hover:bg-gray-500/60 transition backdrop-blur-sm w-8 h-8 outline-2 outline-neutral-400">
                        <Image
                          src="/icons/up.svg"
                          alt="Add to My List"
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
                        <span className="text-green-500 font-bold">
                          98% Match
                        </span>
                        <span className="text-neutral-500 text-md">2023</span>
                        <span className="text-neutral-500 text-md">16+</span>
                        <span className="text-neutral-500 text-md">
                          1 Season
                        </span>
                      </div>
                      <p className="text-gray-300">
                      The Latin American Revolution was a series of uprisings in the early 19th century, where leaders like Simón Bolívar and José de San Martín fought for independence from Spanish and Portuguese rule.
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        <p>
                          <span className="text-gray-500">Cast:</span> Actor
                          Name, Actor Name, Actor Name
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">Genres:</span> Action,
                          Drama, Thriller
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">This show is:</span>{" "}
                          Ominous, Dark
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 md:px-12 pb-12">
                  <div className="flex items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Episodes</h2>
                    <div className="ml-4 relative">
                      {seasons.map((season) => (
                        <option key={season.id} value={season.id}>
                          Season {season.id}
                        </option>
                      ))}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Image
                          src="/icons/chevron-down.svg"
                          alt="Select season"
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {seasons
                      .find((season) => season.id === selectedSeason)
                      ?.episodes.map((episode: Episode) => (
                        <div
                          key={episode.id}
                          className="flex gap-4 border-b border-gray-800 pb-4 group cursor-pointer hover:bg-gray-800/30 rounded p-2"
                        >
                          <div className="relative w-32 h-20 flex-shrink-0">
                            <Image
                              src={episode.thumbnail}
                              alt={`Episode ${episode.id}`}
                              fill
                              className="object-cover rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-black/50 rounded-full p-2">
                                <Image
                                  src="/icons/play-icon.svg"
                                  alt="Play"
                                  width={16}
                                  height={16}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{episode.title}</h3>
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

export default Modal;

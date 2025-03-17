import { Montserrat } from "next/font/google";
import Image from "next/image";
import Header from "../components/Header";
import Movie from "../components/Movie";
import React from "react";

// Define font with proper typing
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Define movie data interface
interface MovieData {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  progress?: number; // Optional progress percentage
}

const featuredMovie: MovieData = {
  id: "featured-001",
  title: "Revuelta",
  description: "The Latin American Revolution was a series of uprisings in the early 19th century, where leaders like Simón Bolívar and José de San Martín fought for independence from Spanish and Portuguese rule.",
  coverImage: "/cover.png",
};

const myListMovies: MovieData[] = [
  {
    id: "movie-001",
    title: "Revuelta",
    description: "A historical drama about the Latin American Revolution",
    coverImage: "/revuelta.png",
    progress: 65,
  },
  // Additional movies could be added here
];

export default function Home(): React.ReactNode {
  return (
    <div
      className={`${montserrat.className} min-h-screen bg-neutral-900 overflow-x-hidden`}
    >
      <div className="w-full fixed top-0 z-50 px-4 py-6 mb-8 md:px-8">
        <Header />
      </div>

      <main className="relative w-5/6 md:w-11/12 mx-auto pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          <div className="absolute inset-0 mt-8">
            <Movie
              name="Featured Movie"
              bgColor="bg-transparent"
              textColor="text-white"
              triggerType="custom"
            >
              <div className="relative w-full h-full">
                <Image
                  src={featuredMovie.coverImage}
                  alt={featuredMovie.title}
                  fill
                  className="object-cover rounded-md"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-md" />
              </div>
            </Movie>
          </div>
          <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {featuredMovie.title}
            </h1>
            <p className="text-lg mb-6 line-clamp-3 text-white">
              {featuredMovie.description}
            </p>
            <div className="flex gap-3">
              <Movie 
                name="Play" 
                bgColor="bg-white" 
                textColor="text-black" 
                onClick={() => console.log(`Playing ${featuredMovie.title}`)}
              />
              <Movie
                name="More Info"
                bgColor="bg-gray-500/70"
                textColor="text-white"
                onClick={() => console.log(`More info about ${featuredMovie.title}`)}
              />
            </div>
          </div>
        </section>

        {/* My List Section */}
        <section className="mt-8 mb-16">
          <h2 className="text-xl font-semibold mb-4 text-white">My List</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
            {myListMovies.map((movie) => (
              <div 
                key={movie.id}
                className="group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10"
              >
                <Movie
                  name="More Info"
                  bgColor="bg-gray-500/70"
                  textColor="text-white"
                  triggerType="custom"
                  onClick={() => console.log(`Selected movie: ${movie.title}`)}
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={movie.coverImage}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                    {movie.progress !== undefined && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                        <div 
                          className="h-full bg-red-600"
                          style={{ width: `${movie.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </Movie>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

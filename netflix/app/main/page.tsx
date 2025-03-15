import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Movie from "../components/Movie";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${montserrat.className} min-h-screen bg-neutral-900 overflow-x-hidden`}>
      <div className="w-full fixed top-0 z-50 px-4 py-6 mb-8 md:px-8">
        <Header />
      </div>

      <main className="relative w-5/6 md:w-11/12 mx-auto pt-20 pb-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          <div className="absolute inset-0 mt-8">
            <Image
              src="/cover.png"
              alt="Featured Movie"
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-md" />
          </div>
          <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Revuelta
            </h1>
            <p className="text-lg mb-6 line-clamp-3 text-white">
              The Latin American Revolution was a series of uprisings in the early
              19th century, where leaders like Simón Bolívar and José de San
              Martín fought for independence from Spanish and Portuguese rule.
            </p>
            <div className="flex gap-3">
              <Movie name="Play" bgColor="bg-white" textColor="text-black" />
              <Movie
                name="More Info"
                bgColor="bg-gray-500/70"
                textColor="text-white"
              />
            </div>
          </div>
        </section>

        {/* My List Section */}
        <section className="mt-8 mb-16">
          <h2 className="text-xl font-semibold mb-4 text-white">My List</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
            {/* Single Card */}
            <div className="group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10">
              <Link href="/movie" className="block">
                <Image
                  src="/revuelta.png"
                  alt="Movie"
                  width={600}
                  height={400}
                  className="object-cover aspect-video"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                  <div className="h-full bg-red-600 w-[65%]" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
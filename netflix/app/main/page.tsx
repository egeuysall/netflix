import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${montserrat.className} bg-neutral-900 flex h-screen w-screen items-center justify-center`}
    >
      <div className="h-screen bg-neutral-900 w-5/6 md:w-11/12 mt-4 overflow-y-auto">
        <header className="pt-4">
          <nav>
            <Header />
          </nav>
        </header>

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
              Latin American Revolution
            </h1>
            <p className="text-lg mb-6 line-clamp-3 text-white">
            Brave leaders and ordinary people rise up against Spanish and Portuguese rule, fighting for freedom and independence in a dramatic struggle that shapes Latin America’s future.
            </p>
            <div className="flex gap-3">
              <button className="bg-white text-black hover:bg-white/90 font-semibold px-6 py-2 text-lg rounded-sm">
                Play
              </button>
              <button className="bg-gray-500/70 text-white hover:bg-gray-500/50 font-semibold px-6 py-2 text-lg rounded-sm">
                More Info
              </button>
            </div>
          </div>
        </section>

        {/* My List */}
        <section className="mb-8 mt-8 h-1/4">
          <h2 className="text-xl font-semibold mb-4 text-white">My List</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4">
            {/* Single Manual Card */}
            <div className="group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10">
              <Link href="#" className="block">
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-medium truncate">Movie Title</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

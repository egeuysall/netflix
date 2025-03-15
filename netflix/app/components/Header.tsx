import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between bg-neutral-900/25 p-3 backdrop-blur-sm border border-neutral-800/50 rounded-lg">
      <nav className="flex items-center gap-8">
        <Link href="/main" className="flex-shrink-0">
          <Image
            src="/logo/netflix.svg"
            width={86}
            height={86}
            alt="Netflix Logo"
            className="object-contain"
          />
        </Link>
        <ul className="flex text-white text-sm gap-6 items-center">
          <li>
            <Link href="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tv-shows" className="hover:text-gray-400">
              TV Shows
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-gray-400">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/new-and-popular" className="hover:text-gray-400">
              New & Popular
            </Link>
          </li>
          <li>
            <Link href="/my-list" className="hover:text-gray-400">
              My List
            </Link>
          </li>
          <li>
            <Link href="/my-list" className="hover:text-gray-400">
              Browse by Languages
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/main" className="flex items-center justify-center hover:opacity-80">
          <Image
            src="/search.svg"
            width={24}
            height={24}
            alt="Search Icon"
            className="object-contain"
          />
        </Link>
        <Link href="/main" className="flex items-center justify-center hover:opacity-80">
          <Image
            src="/bell.svg"
            width={24}
            height={24}
            alt="Bell Icon"
            className="object-contain"
          />
        </Link>
        <Link href="/main" className="flex items-center justify-center hover:opacity-80">
          <Image
            src="/profile1.png"
            width={32}
            height={32}
            alt="Profile Icon"
            className="rounded-sm object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
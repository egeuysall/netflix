import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" mx-auto flex items-center justify-between">
      <nav className="flex gap-12">
        <Link href="/main">
          <Image
            src="/logo/netflix.svg"
            width={96}
            height={96}
            alt="Netflix Logo"
          />
        </Link>
        <ul className="flex text-white text-sm gap-6">
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
      <div className="flex items-center gap-6">
        <Link href="/main">
          <Image
            src="/search.svg"
            width={28}
            height={28}
            alt="Search Icon"
          />
        </Link>
        <Link href="/main">
          <Image
            src="/bell.svg"
            width={28}
            height={28}
            alt="Bell Icon"
          />
        </Link>
        <Link href="/main">
          <Image
            src="/profile1.png"
            width={36}
            height={36}
            alt="Profile Icon"
            className="rounded-sm"
          />
        </Link>
      </div>
    </div>
  );
}

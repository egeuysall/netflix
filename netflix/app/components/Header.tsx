import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

/**
 * Navigation item structure
 */
interface NavItem {
  href: string;
  label: string;
}

/**
 * Icon link structure
 */
interface IconLink {
  href: string;
  iconSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Header component displaying navigation and user actions
 */
const Header: FC = () => {
  // Define navigation items
  const navItems: NavItem[] = [
    { href: "/browse", label: "Home" },
    { href: "/tv-shows", label: "TV Shows" },
    { href: "/movies", label: "Movies" },
    { href: "/new-and-popular", label: "New & Popular" },
    { href: "/my-list", label: "My List" },
    { href: "/my-list", label: "Browse by Languages" },
  ];

  // Define icon links
  const iconLinks: IconLink[] = [
    { 
      href: "/main", 
      iconSrc: "/search.svg", 
      alt: "Search Icon", 
      width: 24, 
      height: 24, 
      className: "object-contain" 
    },
    { 
      href: "/main", 
      iconSrc: "/bell.svg", 
      alt: "Bell Icon", 
      width: 24, 
      height: 24, 
      className: "object-contain" 
    },
    { 
      href: "/main", 
      iconSrc: "/profile1.png", 
      alt: "Profile Icon", 
      width: 32, 
      height: 32, 
      className: "rounded-sm object-contain" 
    },
  ];

  return (
    <div className="w-full flex items-center justify-between bg-neutral-900/40 p-3 backdrop-blur-md border border-neutral-800/50 rounded-md">
      <nav className="flex items-center gap-8">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo/netflix.svg"
            width={86}
            height={86}
            alt="Netflix Logo"
            className="object-contain"
            priority
          />
        </Link>
        <ul className="text-white text-sm gap-6 items-center hidden lg:flex">
          {navItems.map((item, index) => (
            <li key={`nav-item-${index}`}>
              <Link href={item.href} className="hover:text-gray-400">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        {iconLinks.map((icon, index) => (
          <Link 
            key={`icon-link-${index}`} 
            href={icon.href} 
            className="flex items-center justify-center hover:opacity-80"
          >
            <Image
              src={icon.iconSrc}
              width={icon.width}
              height={icon.height}
              alt={icon.alt}
              className={icon.className || ""}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-40 px-8 pt-8 pb-6 md:px-16 lg:px-20">
      <div className="flex items-center justify-between border-b border-text/20 pb-6">
        <Link
          href="/"
          className="font-display text-2xl font-normal italic uppercase tracking-tight text-text transition-colors duration-300 hover:text-accent"
        >
          Ryan Cadby
        </Link>
        <nav className="flex gap-8 md:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[0.7rem] font-normal uppercase tracking-widest transition-colors duration-300 ${
                pathname === item.href
                  ? "text-accent"
                  : "text-text hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

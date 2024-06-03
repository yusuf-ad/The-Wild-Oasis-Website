"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/cabins", label: "Cabins" },
  { href: "/about", label: "About" },
  { href: "/account", label: "Guest area" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`${pathname === link.href ? "text-accent-400" : ""} transition-colors hover:text-accent-400`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

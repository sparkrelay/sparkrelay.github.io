"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navItems, siteMeta } from "../lib/site-content";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="nav glass shell">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Sparkles size={16} />
          </span>
          <span>{siteMeta.name}</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <a className="nav-link" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
            <Github size={15} />
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#now", label: "now" },
  { href: "#projects", label: "projects" },
  { href: "#posts", label: "posts" },
  { href: "#connect", label: "contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-(--border) bg-(--header-bg) px-[clamp(18px,5vw,56px)] py-4 font-mono backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-5">
          <a
            href="#top"
            className="text-[13px] tracking-[0.02em] text-(--text) transition-colors active:text-(--accent)"
          >
            <span className="text-(--accent)">@carvalhocaio</span>:~$
          </a>
          <nav
            aria-label="Section navigation"
            className="flex items-center gap-[clamp(10px,2.4vw,22px)]"
          >
            <div className="hidden items-center gap-[clamp(10px,2.4vw,22px)] md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-(--dim) transition-colors hover:text-(--accent) active:text-(--accent)"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="text-xs text-(--dim) transition-colors hover:text-(--accent) active:text-(--accent) md:hidden"
            >
              [{menuOpen ? "close" : "menu"}]
            </button>
            <ThemeToggle />
          </nav>
        </div>
        {menuOpen && (
          <div id="mobile-nav" className="md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-t border-dashed border-(--border) px-1.5 py-3.5 text-sm text-(--dim) transition-colors hover:text-(--accent) active:text-(--accent)"
              >
                [{link.label}]
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}

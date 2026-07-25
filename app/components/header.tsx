import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "#journey", label: "jornada" },
  { href: "#now", label: "agora" },
  { href: "#projects", label: "projetos" },
  { href: "#posts", label: "posts" },
  { href: "#connect", label: "contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--header-bg)] px-[clamp(18px,5vw,56px)] py-4 font-mono backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-5">
          <a
            href="#top"
            className="text-[13px] tracking-[0.02em] text-[var(--text)]"
          >
            <span className="text-[var(--accent)]">caio@carvalho</span>:~$
          </a>
          <nav className="flex items-center gap-[clamp(10px,2.4vw,22px)]">
            <div className="hidden items-center gap-[clamp(10px,2.4vw,22px)] [@media(min-width:720px)]:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[var(--dim)] transition-colors hover:text-[var(--accent)]"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}

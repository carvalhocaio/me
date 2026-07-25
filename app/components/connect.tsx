import { Container } from "./container";
import { CopyEmailButton } from "./copy-email-button";

const LINKS = [
  {
    id: "in",
    label: "linkedin",
    desc: "veja minha carreira",
    url: "https://www.linkedin.com/in/1caiocarvalho/",
  },
  {
    id: "gh",
    label: "github",
    desc: "veja meus projetos",
    url: "https://github.com/carvalhocaio",
  },
  {
    id: "dt",
    label: "dev.to",
    desc: "veja meus posts",
    url: "https://dev.to/carvalhocaio",
  },
];

export function Connect() {
  return (
    <section
      id="connect"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]"
        >
          <span className="text-[var(--accent)]">[ 05 ]</span> contato
          <span className="text-[var(--dim)]"> — curl</span>
        </div>
        <div>
          {LINKS.map((link) => (
            <a
              key={link.id}
              data-reveal
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-t border-dashed border-[var(--border)] px-1.5 py-[18px] font-mono text-[var(--text)] transition-colors hover:bg-[var(--panel)]"
            >
              <span className="flex min-w-0 items-center gap-3.5">
                <span className="text-[var(--accent)]">{link.id}</span>
                <span className="text-base">{link.label}</span>
                <span className="text-[13px] text-[var(--dim)]">
                  {link.desc}
                </span>
              </span>
              <span className="shrink-0 text-sm text-[var(--dim)]">→</span>
            </a>
          ))}
          <CopyEmailButton />
        </div>
      </Container>
    </section>
  );
}

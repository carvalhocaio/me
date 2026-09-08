import { Container } from "./container";
import { CopyEmailButton } from "./copy-email-button";

const LINKS = [
  {
    id: "in",
    label: "linkedin",
    desc: "see my career",
    url: "https://www.linkedin.com/in/1caiocarvalho/",
  },
  {
    id: "gh",
    label: "github",
    desc: "see my projects",
    url: "https://github.com/carvalhocaio",
  },
  {
    id: "dt",
    label: "dev.to",
    desc: "check out my posts.",
    url: "https://dev.to/carvalhocaio",
  },
];

export function Connect() {
  return (
    <section
      id="connect"
      className="border-t border-(--border) px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 font-mono text-[clamp(15px,2.4vw,20px)] text-(--text)"
        >
          <span className="text-(--accent)">[ 04 ]</span> contact
          <span className="text-(--dim)"> — curl</span>
        </div>
        <div>
          {LINKS.map((link) => (
            <a
              key={link.id}
              data-reveal
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-t border-dashed border-(--border) px-1.5 py-4.5 font-mono text-(--text) transition-colors hover:bg-(--panel) active:bg-(--panel)"
            >
              <span className="flex min-w-0 items-center gap-3.5">
                <span className="text-(--accent)">{link.id}</span>
                <span className="text-base">{link.label}</span>
                <span className="text-[13px] text-(--dim)">
                  {link.desc}
                </span>
              </span>
              <span className="shrink-0 text-sm text-(--dim)">→</span>
            </a>
          ))}
          <CopyEmailButton />
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[clamp(18px,5vw,56px)] py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-(--dim)">
          <span>@ {year} carvalhocaio</span>
          <a
            href="#top"
            className="transition-colors hover:text-(--accent)"
          >
            back_to_top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}

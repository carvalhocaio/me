import { Container } from "./container";

const PROJECTS = [
  {
    n: "01",
    name: "trespass",
    desc: "Scanner de segurança para repositórios GitHub — encontra segredos expostos, dependências vulneráveis, problemas de SAST e vetores de prompt injection em LLMs.",
    url: "https://github.com/carvalhocaio/trespass",
  },
  {
    n: "02",
    name: "cotton-claims-agent",
    desc: "Agente de triagem de correspondência para uma trading de algodão, construído com LangGraph.",
    url: "https://github.com/carvalhocaio/cotton-claims-agent",
  },
  {
    n: "03",
    name: "cotton-desk-tasks",
    desc: "Painel operacional de uma trading de algodão, construído sobre o Task Framework nativo do Django 6.",
    url: "https://github.com/carvalhocaio/cotton-desk-tasks",
  },
  {
    n: "04",
    name: "copa-challenger",
    desc: "Mesa de inteligência sobre as Copas de 2018 e 2022, com um modelo preditivo para a Copa de 2026 — desafio Copa Challenger no Kaggle.",
    url: "https://github.com/carvalhocaio/copa-challenger",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5"
        >
          <span className="font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]">
            <span className="text-[var(--accent)]">[ 03 ]</span> projetos
            <span className="text-[var(--dim)]"> — ls ./repos</span>
          </span>
          <a
            href="https://github.com/carvalhocaio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--dim)] transition-colors hover:text-[var(--accent)]"
          >
            git remote -v →
          </a>
        </div>
        <div>
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              data-reveal
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between gap-4.5 border-t border-dashed border-[var(--border)] px-1.5 py-[22px] text-[var(--text)] transition-colors hover:bg-[var(--panel)]"
            >
              <span className="flex min-w-0 items-baseline gap-4">
                <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                  {project.n}
                </span>
                <span className="flex min-w-0 flex-col gap-1.5">
                  <span className="font-mono text-[17px] font-semibold text-[var(--accent)]">
                    ./{project.name}
                  </span>
                  <span className="max-w-[62ch] text-sm leading-[1.55] text-[var(--dim)]">
                    {project.desc}
                  </span>
                </span>
              </span>
              <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                abrir →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

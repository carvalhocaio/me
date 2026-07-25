import { Container } from "./container";
import { SpotlightCard } from "./spotlight-card";

const FOCUS = [
  {
    n: "01",
    title: "pipelines_de_dados",
    desc: "Orquestração e transformações que mantêm os dados confiáveis, atualizados e prontos pra uso — Oracle → BigQuery, Airflow, dbt e CDC via LogMiner.",
  },
  {
    n: "02",
    title: "agentes_de_ia",
    desc: "Agentes em produção sobre LLMs que raciocinam, chamam ferramentas e agem — Google ADK, Vertex AI, RAG e um servidor MCP para Qlik Cloud.",
  },
  {
    n: "03",
    title: "arquitetura_backend",
    desc: "Sistemas construídos pra escalar e durar, onde dados e inteligência se encontram — APIs em Python (FastAPI) e integrações REST.",
  },
];

export function Now() {
  return (
    <section
      id="now"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]"
        >
          <span className="text-[var(--accent)]">[ 02 ]</span> agora
          <span className="text-[var(--dim)]"> — ps aux</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
          {FOCUS.map((item) => (
            <SpotlightCard
              key={item.n}
              data-reveal
              className="flex flex-col gap-3 border border-[var(--border)] bg-[var(--panel)] px-5 py-[22px]"
            >
              <span className="font-mono text-xs text-[var(--accent)]">
                {item.n}
              </span>
              <h3 className="font-mono text-base font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--dim)]">
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

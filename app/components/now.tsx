import { Container } from "./container";
import { SpotlightCard } from "./spotlight-card";

const FOCUS = [
  {
    n: "01",
    title: "pipelines_de_dados",
    desc: "Ingestão, CDC e modelagem analítica em escala — Oracle LogMiner → BigQuery, Airflow, dltHub, dbt + MetricFlow e governança no OpenMetadata.",
  },
  {
    n: "02",
    title: "agentes_de_ia",
    desc: "Sistemas multi-agentes em produção — Google ADK no Vertex AI, servidores MCP, RAG, guardrails de execução e avaliação automatizada (evals).",
  },
  {
    n: "03",
    title: "arquitetura_backend",
    desc: "APIs e plataformas onde dados e inteligência se encontram — serviços em Python (FastAPI), produtos de dados fullstack (Next.js) e integrações corporativas.",
  },
];

export function Now() {
  return (
    <section
      id="now"
      className="border-t border-(--border) px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 font-mono text-[clamp(15px,2.4vw,20px)] text-(--text)"
        >
          <span className="text-(--accent)">[ 01 ]</span> agora
          <span className="text-(--dim)"> — ps aux</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
          {FOCUS.map((item) => (
            <SpotlightCard
              key={item.n}
              data-reveal
              className="flex flex-col gap-3 border border-(--border) bg-(--panel) px-5 py-5.5"
            >
              <span className="font-mono text-xs text-(--accent)">
                {item.n}
              </span>
              <h3 className="font-mono text-base font-semibold text-(--text)">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--dim)">
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

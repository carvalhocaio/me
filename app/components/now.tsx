import { Container } from "./container";
import { SpotlightCard } from "./spotlight-card";

const FOCUS = [
  {
    n: "01",
    title: "data_pipelines",
    desc: "Orchestration and transformations that keep data reliable, fresh, and ready to use — Oracle → BigQuery, Airflow, dbt, and CDC via LogMiner.",
  },
  {
    n: "02",
    title: "ai_agents",
    desc: "Production agents on top of LLMs that reason, call tools, and act — agentic workflows, RAG, and tool orchestration.",
  },
  {
    n: "03",
    title: "backend_architecture",
    desc: "Systems built to scale and last, where data and intelligence meet — Python APIs (FastAPI) and REST integrations.",
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
          <span className="text-[var(--accent)]">[ 01 ]</span> now
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

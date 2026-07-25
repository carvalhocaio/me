import { Container } from "./container";

const JOURNEY = [
  {
    year: "2018",
    title: "fundação full-stack",
    desc: "Entrei na Scheffer como Analista de Sistemas Jr., integrando o ERP corporativo via REST e SOAP em Python e construindo produtos web e mobile para o agronegócio.",
  },
  {
    year: "2021",
    title: "sistemas críticos",
    desc: "Na Trusted Brasil (via Magrathea Labs), mantive sistemas de gestão pecuária em Django e Go, e depois integrei software de saúde via APIs REST em Ruby on Rails.",
  },
  {
    year: "2022",
    title: "outro setor, mesma disciplina",
    desc: "No Instituto Atlântico, desenvolvi funcionalidades para impressoras 3D com o time da HP — backend em Go, frontend em React, do design técnico à produção.",
  },
  {
    year: "2024",
    title: "engenharia de dados",
    desc: "De volta à Scheffer como Analista de BI Pleno, atuando como engenheiro de dados: pipelines Oracle → BigQuery, CDC via LogMiner, orquestração com Airflow e dbt.",
  },
  {
    year: "agora",
    title: "dados & ia",
    desc: "Também construindo agentes em produção com Google ADK e Vertex AI, um chatbot interno (Next.js + AI SDK) e um servidor MCP para Qlik Cloud.",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]"
        >
          <span className="text-[var(--accent)]">[ 01 ]</span> jornada
          <span className="text-[var(--dim)]"> — cat career.log</span>
        </div>
        <div>
          {JOURNEY.map((item) => (
            <div
              key={item.year}
              data-reveal
              className="grid grid-cols-[96px_1fr] gap-5 border-t border-dashed border-[var(--border)] py-[22px]"
            >
              <span className="pt-[3px] font-mono text-[13px] text-[var(--accent)]">
                {item.year}
              </span>
              <div className="flex max-w-[66ch] flex-col gap-1.5">
                <h3 className="font-mono text-[17px] font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-[var(--dim)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

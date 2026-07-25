import { Container } from "./container";

type JourneyEntry = {
  year: string;
  company: string;
  title: string;
  desc: string;
};

const JOURNEY: JourneyEntry[] = [
  {
    year: "2024–agora",
    company: "Scheffer",
    title: "Analista de BI Pleno (Engenharia de Dados & IA)",
    desc: "Atuo como engenheiro de dados: projeto pipelines Oracle → BigQuery com mais de 1TB de dados corporativos, orquestradas com Airflow, incluindo um serviço de CDC via Oracle LogMiner e a migração de Meltano para dltHub. Desde 2026, também construo agentes de IA em produção com Google ADK e Vertex AI, um chatbot interno (Next.js + AI SDK) e um servidor MCP para Qlik Cloud.",
  },
  {
    year: "2022–2023",
    company: "Instituto Atlântico",
    title: "Analista de Sistemas Jr. Step 12 (Desenvolvedor de Software)",
    desc: "Desenvolvi funcionalidades para impressoras 3D junto ao time da HP, com backend em Go e frontend em React, em ambiente ágil com entregas previsíveis por sprint.",
  },
  {
    year: "2021–2022",
    company: "Magrathea Labs (adquirida pela Trusted)",
    title: "Software Engineering L 4.1 (Desenvolvedor de Software)",
    desc: "Mantive sistemas críticos de gestão pecuária em Django e Go para clientes do agronegócio, participei da migração do BigQuery para APIs proprietárias e, após a aquisição, integrei softwares de saúde via APIs REST em Ruby on Rails.",
  },
  {
    year: "2018–2021",
    company: "Scheffer",
    title: "Analista de Sistemas Jr. (Desenvolvedor Full-Stack)",
    desc: "Integrei o ERP corporativo com sistemas externos via REST e SOAP em Python, construí aplicações mobile para produção agrícola e desenvolvi produtos web internos em Django, Flask, Vue.js e React.",
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
          {JOURNEY.map((entry) => (
            <div
              key={entry.year}
              data-reveal
              className="grid grid-cols-[96px_1fr] gap-5 border-t border-dashed border-[var(--border)] py-[22px]"
            >
              <span className="pt-[3px] font-mono text-[13px] text-[var(--accent)]">
                {entry.year}
              </span>
              <div className="flex max-w-[66ch] flex-col gap-1.5">
                <h3 className="font-mono text-[17px] font-semibold text-[var(--text)]">
                  {entry.title}
                </h3>
                <p className="font-mono text-xs text-[var(--dim)]">
                  {entry.company}
                </p>
                <p className="text-[14.5px] leading-[1.65] text-[var(--dim)]">
                  {entry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./container";

type JourneyGroup = {
  label?: string;
  items: string[];
};

type JourneyEntry = {
  year: string;
  company: string;
  title: string;
  groups: JourneyGroup[];
};

const JOURNEY: JourneyEntry[] = [
  {
    year: "2024–agora",
    company: "Scheffer",
    title: "Analista de BI Pleno (Engenharia de Dados & IA)",
    groups: [
      {
        label: "engenharia de dados",
        items: [
          "Projetei e mantenho pipelines Oracle → BigQuery que disponibilizaram mais de 1TB de dados corporativos para análise, orquestrados com Apache Airflow.",
          "Desenvolvi um serviço de CDC (Change Data Capture) com Oracle LogMiner que captura mudanças em produção e as persiste em Parquet no Cloud Storage, consultáveis no BigQuery.",
          "Liderei a migração das pipelines de Meltano para dltHub, ganhando observabilidade e reduzindo tempo de troubleshooting em produção.",
          "Padronizei os projetos dbt do time com templates e regras de formatação reutilizáveis, reduzindo o tempo de desenvolvimento de novos modelos.",
        ],
      },
      {
        label: "engenharia de ia (2026)",
        items: [
          "Construí agentes conversacionais em produção com Google ADK no Vertex AI Agent Engine, para análises agronômicas integradas aos dados do negócio.",
          "Desenvolvi o chatbot interno da empresa (Next.js, AI SDK, BigQuery, Cloud Storage), com autenticação corporativa e persistência de conversas.",
          "Implementei um servidor MCP para Qlik Cloud, conectando LLMs (Gemini/Vertex AI) aos painéis analíticos da empresa.",
          "Construí APIs em Python (FastAPI) para painéis executivos e extrações como serviço, além de API de RAG para consulta de documentos internos.",
        ],
      },
    ],
  },
  {
    year: "2022–2023",
    company: "Instituto Atlântico",
    title: "Analista de Sistemas Jr. Step 12 (Desenvolvedor de Software)",
    groups: [
      {
        items: [
          "Desenvolvi funcionalidades para impressoras 3D junto ao time da HP, com backend em Go e frontend em React, do design técnico à entrega em produção.",
          "Trabalhei em ambiente ágil (Scrum/Jira), com entregas previsíveis por sprint.",
        ],
      },
    ],
  },
  {
    year: "2021–2022",
    company: "Magrathea Labs (adquirida pela Trusted)",
    title: "Software Engineering L 4.1 (Desenvolvedor de Software)",
    groups: [
      {
        items: [
          "Desenvolvi e mantive sistemas críticos de gestão pecuária em Django e Go, atendendo clientes do agronegócio com requisitos de disponibilidade.",
          "Participei da migração do BigQuery para APIs proprietárias, dando ao produto autonomia sobre seus próprios dados.",
          "Após a aquisição, integrei softwares de saúde via APIs REST em Ruby on Rails.",
        ],
      },
    ],
  },
  {
    year: "2018–2021",
    company: "Scheffer",
    title: "Analista de Sistemas Jr. (Desenvolvedor Full-Stack)",
    groups: [
      {
        items: [
          "Desenvolvi integrações do ERP corporativo com sistemas externos via APIs REST e SOAP em Python, eliminando reconciliações manuais de dados.",
          "Construí aplicações mobile para fluxos de produção agrícola, substituindo papel por captura de dados em tempo real no campo.",
          "Desenvolvi e mantive produtos web internos em Python (Django, Flask) e JavaScript (Vue.js, React).",
        ],
      },
    ],
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
              <div className="flex max-w-[66ch] flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-mono text-[17px] font-semibold text-[var(--text)]">
                    {entry.title}
                  </h3>
                  <p className="font-mono text-xs text-[var(--dim)]">
                    {entry.company}
                  </p>
                </div>
                {entry.groups.map((group) => (
                  <div
                    key={group.label ?? entry.year}
                    className="flex flex-col gap-1.5"
                  >
                    {group.label ? (
                      <p className="font-mono text-xs text-[var(--accent)]">
                        {group.label}
                      </p>
                    ) : null}
                    <ul className="flex flex-col gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-[14.5px] leading-[1.65] text-[var(--dim)]"
                        >
                          <span className="text-[var(--accent)]">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

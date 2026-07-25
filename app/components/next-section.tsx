import { Container } from "./container";

export function NextSection() {
  return (
    <section
      id="next"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-6 font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]"
        >
          <span className="text-[var(--accent)]">[ 04 ]</span> próximo
          <span className="text-[var(--dim)]"> — # roadmap</span>
        </div>
        <p
          data-reveal
          className="max-w-[40ch] text-[clamp(19px,2.6vw,28px)] leading-snug text-[var(--text)]"
        >
          <span className="font-mono text-[var(--accent)]">/* </span>
          Aprofundando em arquiteturas agênticas — sistemas que não só
          respondem, mas decidem e agem — sem perder a disciplina de backend
          que os mantém confiáveis em produção.
          <span className="font-mono text-[var(--accent)]"> */</span>
        </p>
      </Container>
    </section>
  );
}

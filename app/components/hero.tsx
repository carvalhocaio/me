import { Container } from "./container";
import { DecryptedText } from "./decrypted-text";

const RESUME_URL = "/Caio-Carvalho-PT.pdf";

export function Hero() {
  return (
    <section
      id="top"
      className="px-[clamp(18px,5vw,56px)] pt-[clamp(56px,10vw,120px)] pb-[clamp(48px,7vw,88px)]"
    >
      <Container>
        <div
          data-reveal
          className="flex flex-col gap-5 border border-[var(--border)] bg-[var(--panel)] p-[clamp(20px,3vw,36px)]"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--dim)]">
            <span className="h-[9px] w-[9px] rounded-full bg-[var(--accent)]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[var(--border)]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[var(--border)]" />
            <span className="ml-2">~/carvalhocaio</span>
          </div>

          <p className="font-mono text-[13px] text-[var(--dim)]">
            <span className="text-[var(--accent)]">$</span> whoami
          </p>

          <h1 className="font-sans text-[clamp(40px,8vw,92px)] leading-[0.98] font-bold tracking-[-0.02em] text-[var(--text)]">
            <DecryptedText
              text="Caio"
              encryptedClassName="text-[var(--accent)]"
              speed={35}
            />
            <br />
            <DecryptedText
              text="Carvalho"
              encryptedClassName="text-[var(--accent)]"
              speed={35}
            />
          </h1>

          <p className="font-mono text-[13px] tracking-[0.02em] text-[var(--accent)]">
            // dados · ia · engenharia de software
          </p>

          <p className="max-w-[52ch] font-sans text-[clamp(16px,1.8vw,19px)] leading-relaxed text-[var(--text)]">
            Construo os sistemas onde dados e inteligência artificial se
            encontram — de pipelines a agentes de IA em produção.
            <span className="ml-[3px] inline-block h-[1.1em] w-[9px] translate-y-[2px] animate-[blink_1.1s_step-end_infinite] bg-[var(--accent)]" />
          </p>

          <div className="flex items-center gap-[9px] font-mono text-xs text-[var(--dim)]">
            <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[var(--accent)]" />
            status: trabalhando na{" "}
            <a
              href="https://www.scheffer.agr.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] underline decoration-[var(--border)] underline-offset-2 transition-colors hover:text-[var(--accent)]"
            >
              Scheffer
            </a>
          </div>

          <div className="mt-0.5 flex flex-wrap gap-3 font-mono">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] px-[18px] py-[11px] text-[13px] text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              [ ver_currículo ]
            </a>
            <a
              href="mailto:caiocarvalho.py@gmail.com"
              className="border border-[var(--border)] px-[18px] py-[10px] text-[13px] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              [ email ]
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

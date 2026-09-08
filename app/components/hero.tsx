import { Container } from "./container";
import { DecryptedText } from "./decrypted-text";

const BASE_PATH = process.env.GITHUB_ACTIONS === "true" ? "/me" : "";
const RESUME_URL = `${BASE_PATH}/resumee.pdf`;

export function Hero() {
  return (
    <section
      id="top"
      className="px-[clamp(18px,5vw,56px)] pt-[clamp(56px,10vw,120px)] pb-[clamp(48px,7vw,88px)]"
    >
      <Container>
        <div
          data-reveal
          className="flex flex-col gap-5 border border-(--border) bg-(--panel) p-[clamp(20px,3vw,36px)]"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-(--dim)">
            <span className="h-2.25 w-2.25 rounded-full bg-(--accent)" />
            <span className="h-2.25 w-2.25 rounded-full bg-(--border)" />
            <span className="h-2.25 w-2.25 rounded-full bg-(--border)" />
            <span className="ml-2">~/carvalhocaio</span>
          </div>

          <p className="font-mono text-[13px] text-(--dim)">
            <span className="text-(--accent)">$</span> whoami
          </p>

          <h1 className="font-sans text-[clamp(40px,8vw,92px)] leading-[0.98] font-bold tracking-[-0.02em] text-(--text)">
            <DecryptedText
              text="Caio"
              encryptedClassName="text-[var(--accent)]"
              speed={35}
            />
            <DecryptedText
              text=" Carvalho"
              encryptedClassName="text-[var(--accent)]"
              speed={35}
            />
          </h1>

          <p className="font-mono text-[13px] tracking-[0.02em] text-(--accent)">
            software · data · ai
          </p>

          <div className="flex items-center gap-2.25 font-mono text-xs text-(--dim)">
            <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-(--accent)" />
            status: working at the{" "}
            <a
              href="https://www.scheffer.agr.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--text) underline decoration-(--border) underline-offset-2 transition-colors hover:text-(--accent)"
            >
              Scheffer
            </a>
          </div>

          <div className="mt-0.5 flex flex-wrap gap-3 font-mono">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--accent) px-4.5 py-2.75 text-[13px] text-(--bg) transition-opacity hover:opacity-90"
            >
              [ view_resume ]
            </a>
            <a
              href="mailto:caiocarvalho.py@gmail.com"
              className="border border-(--border) px-4.5 py-2.5 text-[13px] text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent)"
            >
              [ email ]
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs" style={{ color: "var(--dim)" }}>
        // scaffold ok — header e seções entram nas próximas etapas
      </p>
      <h1 className="font-sans text-3xl font-bold" style={{ color: "var(--text)" }}>
        Caio Carvalho
      </h1>
      <div data-reveal>
        <p className="font-mono text-xs" style={{ color: "var(--dim)" }}>
          [ reveal-on-scroll ok ]
        </p>
      </div>
      <ThemeToggle />
    </main>
  );
}

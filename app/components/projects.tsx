import { Container } from "./container";

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  archived: boolean;
};

async function getLatestProjects(): Promise<GitHubRepo[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GH_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
    }
    const res = await fetch(
      "https://api.github.com/users/carvalhocaio/repos?type=owner&sort=pushed&direction=desc&per_page=10",
      { headers },
    );
    if (!res.ok) return [];
    const repos = (await res.json()) as GitHubRepo[];
    return repos
      .filter((repo) => !repo.fork && !repo.archived && repo.name !== "me")
      .slice(0, 4);
  } catch {
    return [];
  }
}

export async function Projects() {
  const projects = await getLatestProjects();

  return (
    <section
      id="projects"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5"
        >
          <span className="font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]">
            <span className="text-[var(--accent)]">[ 02 ]</span> projects
            <span className="text-[var(--dim)]"> — ls ./repos</span>
          </span>
          <a
            href="https://github.com/carvalhocaio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--dim)] transition-colors hover:text-[var(--accent)]"
          >
            git remote -v →
          </a>
        </div>
        {projects.length === 0 ? (
          <p data-reveal className="text-sm text-[var(--dim)]">
            Couldn&apos;t load the projects right now — check them directly
            on{" "}
            <a
              href="https://github.com/carvalhocaio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline"
            >
              GitHub
            </a>
            .
          </p>
        ) : (
          <div>
            {projects.map((project, index) => (
              <a
                key={project.name}
                data-reveal
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4.5 border-t border-dashed border-[var(--border)] px-1.5 py-[22px] text-[var(--text)] transition-colors hover:bg-[var(--panel)]"
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="font-mono text-[17px] font-semibold text-[var(--accent)]">
                      ./{project.name}
                    </span>
                    <span className="max-w-[62ch] text-sm leading-[1.55] text-[var(--dim)]">
                      {project.description ?? "No description yet."}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                  open →
                </span>
              </a>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

import { Container } from "./container";
import { FeedList } from "./feed-list";

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
      className="border-t border-(--border) px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5"
        >
          <span className="font-mono text-[clamp(15px,2.4vw,20px)] text-(--text)">
            <span className="text-(--accent)">[ 02 ]</span> projects
            <span className="text-(--dim)"> — ls ./repos</span>
          </span>
          <a
            href="https://github.com/carvalhocaio?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-(--dim) transition-colors hover:text-(--accent) active:text-(--accent)"
          >
            git remote -v →
          </a>
        </div>
        <FeedList
          items={projects.map((project) => ({
            key: project.name,
            href: project.html_url,
            primary: `./${project.name}`,
            secondary: project.description ?? "No description yet.",
          }))}
          actionLabel="open →"
          primaryClassName="font-mono text-[17px] font-semibold text-(--accent)"
          secondaryClassName="max-w-[62ch] break-words text-sm leading-[1.55] text-(--dim)"
          emptyMessage="Couldn't load the projects right now — check them directly on"
          emptyLinkHref="https://github.com/carvalhocaio"
          emptyLinkLabel="GitHub"
        />
      </Container>
    </section>
  );
}

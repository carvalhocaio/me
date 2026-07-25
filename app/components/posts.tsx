import { Container } from "./container";

type DevToArticle = {
  id: number;
  title: string;
  url: string;
  published_at: string;
};

async function getLatestPosts(): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=carvalhocaio&per_page=3",
    );
    if (!res.ok) return [];
    const articles = (await res.json()) as DevToArticle[];
    return articles
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime(),
      )
      .slice(0, 3);
  } catch {
    return [];
  }
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export async function Posts() {
  const posts = await getLatestPosts();

  return (
    <section
      id="posts"
      className="border-t border-[var(--border)] px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5"
        >
          <span className="font-mono text-[clamp(15px,2.4vw,20px)] text-[var(--text)]">
            <span className="text-[var(--accent)]">[ 04 ]</span> posts
            <span className="text-[var(--dim)]"> — curl dev.to/api</span>
          </span>
          <a
            href="https://dev.to/carvalhocaio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--dim)] transition-colors hover:text-[var(--accent)]"
          >
            ver perfil →
          </a>
        </div>
        {posts.length === 0 ? (
          <p data-reveal className="text-sm text-[var(--dim)]">
            Não consegui carregar os posts agora — veja direto no{" "}
            <a
              href="https://dev.to/carvalhocaio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline"
            >
              dev.to
            </a>
            .
          </p>
        ) : (
          <div>
            {posts.map((post, index) => (
              <a
                key={post.id}
                data-reveal
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4.5 border-t border-dashed border-[var(--border)] px-1.5 py-[22px] text-[var(--text)] transition-colors hover:bg-[var(--panel)]"
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="font-mono text-[15px] font-semibold text-[var(--accent)]">
                      {post.title}
                    </span>
                    <span className="text-xs text-[var(--dim)]">
                      {dateFormatter.format(new Date(post.published_at))}
                    </span>
                  </span>
                </span>
                <span className="shrink-0 font-mono text-[13px] text-[var(--dim)]">
                  ler →
                </span>
              </a>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

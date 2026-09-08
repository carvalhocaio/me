import { Container } from "./container";
import { FeedList } from "./feed-list";

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

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export async function Posts() {
  const posts = await getLatestPosts();

  return (
    <section
      id="posts"
      className="border-t border-(--border) px-[clamp(18px,5vw,56px)] py-[clamp(44px,7vw,84px)]"
    >
      <Container>
        <div
          data-reveal
          className="mb-8 flex flex-wrap items-baseline justify-between gap-3.5"
        >
          <span className="font-mono text-[clamp(15px,2.4vw,20px)] text-(--text)">
            <span className="text-(--accent)">[ 03 ]</span> posts
            <span className="text-(--dim)"> — curl dev.to/api</span>
          </span>
          <a
            href="https://dev.to/carvalhocaio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-(--dim) transition-colors hover:text-(--accent) active:text-(--accent)"
          >
            view profile →
          </a>
        </div>
        <FeedList
          items={posts.map((post) => ({
            key: post.id,
            href: post.url,
            primary: post.title,
            secondary: dateFormatter.format(new Date(post.published_at)),
          }))}
          actionLabel="read →"
          primaryClassName="break-words font-mono text-[15px] font-semibold text-(--accent)"
          secondaryClassName="text-xs text-(--dim)"
          emptyMessage="Couldn't load the posts right now — check them directly on"
          emptyLinkHref="https://dev.to/carvalhocaio"
          emptyLinkLabel="dev.to"
        />
      </Container>
    </section>
  );
}

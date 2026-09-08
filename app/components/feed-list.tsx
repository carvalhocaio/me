type FeedItem = {
  key: string | number;
  href: string;
  primary: string;
  secondary: string;
};

type FeedListProps = {
  items: FeedItem[];
  actionLabel: string;
  primaryClassName: string;
  secondaryClassName: string;
  emptyMessage: string;
  emptyLinkHref: string;
  emptyLinkLabel: string;
};

export function FeedList({
  items,
  actionLabel,
  primaryClassName,
  secondaryClassName,
  emptyMessage,
  emptyLinkHref,
  emptyLinkLabel,
}: FeedListProps) {
  if (items.length === 0) {
    return (
      <p data-reveal className="text-sm text-(--dim)">
        {emptyMessage}{" "}
        <a
          href={emptyLinkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--accent) underline"
        >
          {emptyLinkLabel}
        </a>
        .
      </p>
    );
  }

  return (
    <div>
      {items.map((item, index) => (
        <a
          key={item.key}
          data-reveal
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-baseline justify-between gap-4.5 border-t border-dashed border-(--border) px-1.5 py-5.5 text-(--text) transition-colors hover:bg-(--panel) active:bg-(--panel)"
        >
          <span className="flex min-w-0 items-baseline gap-4">
            <span className="shrink-0 font-mono text-[13px] text-(--dim)">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex min-w-0 flex-col gap-1.5">
              <span className={primaryClassName}>{item.primary}</span>
              <span className={secondaryClassName}>{item.secondary}</span>
            </span>
          </span>
          <span className="shrink-0 font-mono text-[13px] text-(--dim)">
            {actionLabel}
          </span>
        </a>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

const EMAIL = "caiocarvalho.py@gmail.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing to do
    }
  };

  return (
    <div
      data-reveal
      className="flex flex-col items-stretch gap-3 border-t border-b border-dashed border-(--border) px-1.5 py-4.5 font-mono sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span className="text-(--accent)">@</span>
        <span className="select-all text-base text-(--text)">
          {EMAIL}
        </span>
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className={
          copied
            ? "w-full shrink-0 border border-(--accent) px-3.5 py-1.5 text-xs text-(--accent) transition-colors sm:w-auto"
            : "w-full shrink-0 border border-(--border) px-3.5 py-1.5 text-xs text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent) active:border-(--accent) active:text-(--accent) sm:w-auto"
        }
      >
        {copied ? "[ copied ✓ ]" : "[ copy ]"}
      </button>
    </div>
  );
}

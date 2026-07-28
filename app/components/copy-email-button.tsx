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
      className="flex flex-col items-stretch gap-3 border-t border-b border-dashed border-[var(--border)] px-1.5 py-[18px] font-mono sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span className="text-[var(--accent)]">@</span>
        <span className="select-all text-base text-[var(--text)]">
          {EMAIL}
        </span>
        <span className="hidden text-[13px] text-[var(--dim)] sm:inline">
          {copied ? "copiado ✓" : "principal"}
        </span>
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className={
          copied
            ? "w-full shrink-0 border border-[var(--accent)] px-3.5 py-1.5 text-xs text-[var(--accent)] transition-colors sm:w-auto"
            : "w-full shrink-0 border border-[var(--border)] px-3.5 py-1.5 text-xs text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto"
        }
      >
        [ copiar ]
      </button>
    </div>
  );
}

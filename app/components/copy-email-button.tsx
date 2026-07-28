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
      className="flex items-center justify-between gap-4 border-t border-b border-dashed border-[var(--border)] px-1.5 py-[18px] font-mono"
    >
      <span className="flex min-w-0 items-center gap-3.5">
        <span className="text-[var(--accent)]">@</span>
        <span className="select-all text-base text-[var(--text)]">
          {EMAIL}
        </span>
        <span className="text-[13px] text-[var(--dim)]">
          {copied ? "copiado ✓" : "principal"}
        </span>
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar email"
        title="Copiar email"
        className="shrink-0 border border-[var(--border)] p-2 text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </button>
    </div>
  );
}

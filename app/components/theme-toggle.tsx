"use client";

import { useTheme } from "@/app/lib/use-theme";

const THEME_LABELS = { dark: "escuro", light: "claro" } as const;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-[var(--border)] px-2.5 py-[5px] font-mono text-xs text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      [{THEME_LABELS[theme]}]
    </button>
  );
}

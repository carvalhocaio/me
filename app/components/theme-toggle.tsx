"use client";

import { useTheme } from "@/app/lib/use-theme";

const THEME_LABELS = { dark: "dark", light: "light" } as const;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-(--border) px-2.5 py-1.25 font-mono text-xs text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent)"
    >
      [{THEME_LABELS[theme]}]
    </button>
  );
}

"use client";

import { useTheme } from "@/app/lib/use-theme";

const THEME_LABELS = { dark: "dark", light: "light" } as const;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className="border border-(--border) px-3.5 py-2 font-mono text-xs text-(--text) transition-colors hover:border-(--accent) hover:text-(--accent) active:border-(--accent) active:text-(--accent)"
    >
      [{THEME_LABELS[theme]}]
    </button>
  );
}

"use client";

import { useTheme } from "@/app/lib/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border px-3 py-1 font-mono text-xs"
      style={{ borderColor: "var(--border)", color: "var(--text)" }}
    >
      [{theme}]
    </button>
  );
}

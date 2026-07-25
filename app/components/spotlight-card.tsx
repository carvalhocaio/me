"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import styles from "./spotlight-card.module.css";

type SpotlightCardProps = {
  spotlightColor?: string;
} & ComponentPropsWithoutRef<"div">;

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(74, 222, 128, 0.15)",
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`${styles.spotlight} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

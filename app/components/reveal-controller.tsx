"use client";

import { useEffect } from "react";

export function RevealController() {
  useEffect(() => {
    const els = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      requestAnimationFrame(() => {
        for (const el of els()) el.classList.add("in");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const observeAll = () => {
      for (const el of els()) {
        if (!el.classList.contains("in")) io.observe(el);
      }
    };

    const revealVisible = () => {
      const viewportHeight = window.innerHeight || 800;
      for (const el of els()) {
        if (
          !el.classList.contains("in") &&
          el.getBoundingClientRect().top < viewportHeight * 0.92
        ) {
          el.classList.add("in");
        }
      }
    };

    const raf1 = requestAnimationFrame(observeAll);
    const t1 = setTimeout(observeAll, 250);
    const onScroll = () => revealVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const raf2 = requestAnimationFrame(revealVisible);
    const t2 = setTimeout(revealVisible, 300);
    const t3 = setTimeout(() => {
      for (const el of els()) el.classList.add("in");
    }, 1600);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}

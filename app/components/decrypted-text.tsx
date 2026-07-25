"use client";

import { motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

type RevealDirection = "start" | "end" | "center";

type DecryptedTextProps = {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: RevealDirection;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
} & Omit<ComponentPropsWithoutRef<typeof motion.span>, "children">;

const styles = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
} as const;

export function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set(),
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ];
        })
        .join("");
    },
    [availableChars],
  );

  const getNextIndex = useCallback(
    (revealedSet: Set<number>) => {
      const textLength = text.length;
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex;
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    },
    [text, revealDirection],
  );

  const triggerDecrypt = useCallback(() => {
    setRevealedIndices(new Set());
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    let currentIteration = 0;

    intervalRef.current = setInterval(() => {
      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          if (prevRevealed.size < text.length) {
            const nextIndex = getNextIndex(prevRevealed);
            const newRevealed = new Set(prevRevealed);
            newRevealed.add(nextIndex);
            setDisplayText(shuffleText(text, newRevealed));
            return newRevealed;
          }
          clearInterval(intervalRef.current);
          setIsAnimating(false);
          setIsDecrypted(true);
          setDisplayText(text);
          return prevRevealed;
        }

        setDisplayText(shuffleText(text, prevRevealed));
        currentIteration++;
        if (currentIteration >= maxIterations) {
          clearInterval(intervalRef.current);
          setIsAnimating(false);
          setIsDecrypted(true);
          setDisplayText(text);
        }
        return prevRevealed;
      });
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, text, speed, maxIterations, sequential, shuffleText, getNextIndex]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasAnimated) {
            triggerDecrypt();
            setHasAnimated(true);
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [hasAnimated, triggerDecrypt]);

  return (
    <motion.span
      className={parentClassName}
      ref={containerRef}
      style={styles.wrapper}
      {...props}
    >
      <span style={styles.srOnly}>{text}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: characters reshuffle in place, index is the stable identity here
            <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}

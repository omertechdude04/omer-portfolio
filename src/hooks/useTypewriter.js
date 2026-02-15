import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Lightweight typewriter: cycles through phrases:
 * typing -> hold -> deleting -> next
 */
export default function useTypewriter(
  phrases = [],
  {
    typingSpeed = 55,
    deletingSpeed = 32,
    holdMs = 1000,
    startDelayMs = 250,
  } = {}
) {
  const list = useMemo(
    () => (Array.isArray(phrases) ? phrases.filter(Boolean) : []),
    [phrases]
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const mounted = useRef(false);

  useEffect(() => {
    if (!list.length) return;

    let t;

    // first mount delay
    if (!mounted.current) {
      mounted.current = true;
      t = setTimeout(() => setText(""), startDelayMs);
      return () => clearTimeout(t);
    }

    const full = list[index % list.length];

    if (!isDeleting) {
      // typing
      if (text.length < full.length) {
        t = setTimeout(() => {
          setText(full.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // hold then delete
        t = setTimeout(() => setIsDeleting(true), holdMs);
      }
    } else {
      // deleting
      if (text.length > 0) {
        t = setTimeout(() => {
          setText(full.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((v) => (v + 1) % list.length);
      }
    }

    return () => clearTimeout(t);
  }, [
    list,
    index,
    text,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    holdMs,
    startDelayMs,
  ]);

  return { text, index };
}

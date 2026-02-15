import { useEffect, useMemo, useState } from "react";

export default function Typewriter({
  words = ["UI Builder", "Front-End Developer", "React Developer"],
  speed = 48,
  pause = 1100,
}) {
  const list = useMemo(() => words.filter(Boolean), [words]);
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = list[i % list.length] ?? "";
    let t;

    if (!deleting) {
      t = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      }, speed);
    } else {
      t = setTimeout(() => {
        setText(current.slice(0, Math.max(0, text.length - 1)));
        if (text.length <= 1) {
          setDeleting(false);
          setI((v) => (v + 1) % list.length);
        }
      }, Math.max(26, speed * 0.6));
    }

    return () => clearTimeout(t);
  }, [text, deleting, i, list, speed, pause]);

  return (
    <span className="typewrap">
      <span style={{ color: "var(--ice)" }}>{text}</span>
      <span className="caret" />
    </span>
  );
}

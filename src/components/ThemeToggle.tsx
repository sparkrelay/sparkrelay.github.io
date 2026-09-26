"use client";

import { Moon, Sparkles, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "auto" | "light" | "dark";

const timed = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
};

const apply = (mode: Mode) => {
  const target = mode === "auto" ? timed() : mode;
  document.documentElement.classList.toggle("dark", target === "dark");
  document.documentElement.style.colorScheme = target;
};

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("auto");

  useEffect(() => {
    const stored = localStorage.getItem("sparkrelay-theme");
    const initialMode = stored === "light" || stored === "dark" || stored === "auto" ? stored : "auto";
    setMode(initialMode);
    apply(initialMode);
  }, []);

  const nextMode = mode === "auto" ? "light" : mode === "light" ? "dark" : "auto";
  const Icon = mode === "auto" ? Sparkles : mode === "light" ? Sun : Moon;

  return (
    <button
      type="button"
      className="button"
      aria-label={`Switch theme mode. Current mode: ${mode}`}
      onClick={() => {
        setMode(nextMode);
        localStorage.setItem("sparkrelay-theme", nextMode);
        apply(nextMode);
      }}
    >
      <Icon size={15} />
      <span className="theme-label">{mode}</span>
    </button>
  );
}

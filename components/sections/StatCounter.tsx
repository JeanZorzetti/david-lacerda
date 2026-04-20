"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: string;
  duration?: number;
}

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  icon,
  duration = 1800,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const count = useCountUp(value, duration, inView);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="w-14 h-14 rounded-full bg-[#eddcff] flex items-center justify-center mx-auto mb-4">
        <span
          className="material-symbols-outlined text-2xl text-[#28113e]"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <p
        className="text-4xl font-extrabold text-[#28113e] mb-1 tabular-nums"
        style={{ fontFamily: "var(--font-headline)" }}
        aria-label={`${prefix}${value}${suffix} ${label}`}
      >
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </p>
      <p className="text-sm font-bold text-[#28113e] mb-1" style={{ fontFamily: "var(--font-headline)" }}>
        {label}
      </p>
      <p className="text-xs text-[#7c757e] max-w-[160px] mx-auto leading-relaxed">{description}</p>
    </div>
  );
}

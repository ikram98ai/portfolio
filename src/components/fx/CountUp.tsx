import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '../../hooks/useInView';

interface CountUpProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Counts from 0 to `value` with an ease-out curve once scrolled into view. */
const CountUp: React.FC<CountUpProps> = ({
  value,
  decimals = 0,
  duration = 1600,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
      setDisplay(t >= 1 ? value : value * eased);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;

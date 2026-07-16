import React, { useCallback, useRef } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max rotation in degrees */
  maxTilt?: number;
  /** Scale applied while hovered */
  hoverScale?: number;
  /** Show the moving light reflection */
  glare?: boolean;
  /** Peak opacity of the glare highlight */
  glareOpacity?: number;
}

/**
 * Mouse-tracked 3D tilt card with a light "glare" reflection that follows
 * the cursor — the Apple TV / visionOS card effect. Transform-only and
 * rAF-throttled, so it never triggers layout.
 */
const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  hoverScale = 1.02,
  glare = true,
  glareOpacity = 0.22,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.transition = 'transform 0.12s ease-out';
        el.style.transform = `perspective(1000px) rotateX(${((0.5 - py) * maxTilt).toFixed(2)}deg) rotateY(${((px - 0.5) * maxTilt).toFixed(2)}deg) scale3d(${hoverScale}, ${hoverScale}, 1)`;
        el.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
        el.style.setProperty('--glare-o', '1');
      });
    },
    [maxTilt, hoverScale]
  );

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    el.style.setProperty('--glare-o', '0');
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={{ ['--glare-max' as string]: glareOpacity }}
      {...rest}
    >
      {children}
      {glare && <div aria-hidden className="tilt-glare" />}
    </div>
  );
};

export default TiltCard;

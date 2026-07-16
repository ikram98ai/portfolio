import React from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
  children: React.ReactNode;
  /** Delay in ms before the reveal starts once in view */
  delay?: number;
  className?: string;
  /** Direction the element travels from */
  from?: 'bottom' | 'left' | 'right' | 'scale';
}

/**
 * Scroll-triggered reveal: elements rise, de-blur and fade in as they
 * enter the viewport. Uses pure CSS transitions driven by one class toggle.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  from = 'bottom',
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-from-${from} ${inView ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;

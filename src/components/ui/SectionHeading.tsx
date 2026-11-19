import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <Reveal
      className={`flex flex-col gap-7 ${
        isCentered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <div className={isCentered ? 'max-w-3xl' : 'max-w-2xl'}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title mt-5">{title}</h2>
        {description && <p className="section-copy mt-4 max-w-xl">{description}</p>}
      </div>
      {action && <div className={isCentered ? 'mt-1' : 'shrink-0'}>{action}</div>}
    </Reveal>
  );
}

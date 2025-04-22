
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

const Section = ({ id, children, className, fullHeight = false }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        fullHeight && 'min-h-screen flex flex-col justify-center',
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;

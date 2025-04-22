
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;

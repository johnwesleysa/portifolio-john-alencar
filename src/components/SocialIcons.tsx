
import { Facebook, Instagram, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type SocialIconsProps = {
  className?: string;
  iconSize?: number;
};

const SocialIcons = ({ className, iconSize = 18 }: SocialIconsProps) => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/johnalencarr', label: 'Instagram' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/johnwesley47/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/johnwesleysa', label: 'Github' },
  ];

  return (
    <div className={cn('flex gap-2', className)}>
      {socialLinks.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-secondary/70 hover:text-primary"
          asChild
        >
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
            <social.icon size={iconSize} />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialIcons;

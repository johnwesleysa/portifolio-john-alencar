
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-300 border-secondary/50',
        isHovered && 'border-primary'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500',
            isHovered && 'scale-105'
          )}
        />
      </div>
      <CardContent className="pt-6">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          className={cn(
            'transition-all duration-300',
            isHovered ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'
          )}
          asChild
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

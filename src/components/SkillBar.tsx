import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Adicionando todas as skills ao tipo
export type Skill =
  | "Python"
  | "Django"
  | "React"
  | "C#"
  | ".NET"
  | "SQL"
  | "JavaScript"
  | "TypeScript"
  | "HTML"
  | "CSS"
  | "Next.js"
  | "Tailwind";

interface SkillBarProps {
  skill: Skill;
  level: number; // de 0 a 100
  className?: string;
}

// Adicionando ícones para as novas skills
const skillIcons: Record<Skill, JSX.Element> = {
  Python: <img src="/icons/python.svg" alt="Python" width={28} height={28} />,
  Django: <img src="/icons/django.svg" alt="Django" width={28} height={28} />,
  React: <img src="/icons/react.svg" alt="React" width={28} height={28} />,
  "C#": <img src="/icons/csharp.svg" alt="C#" width={28} height={28} />,
  ".NET": <img src="/icons/dotnet.svg" alt=".NET" width={28} height={28} />,
  SQL: <img src="/icons/sql.svg" alt="SQL" width={28} height={28} />,
  JavaScript: <img src="/icons/javascript.svg" alt="JavaScript" width={28} height={28} />,
  TypeScript: <img src="/icons/typescript.svg" alt="TypeScript" width={28} height={28} />,
  HTML: <img src="/icons/html.svg" alt="HTML" width={28} height={28} />,
  CSS: <img src="/icons/css.svg" alt="CSS" width={28} height={28} />,
  "Next.js": <img src="/icons/nextjs.svg" alt="Figma" width={28} height={28} />,
  Tailwind: <img src="/icons/tailwind.svg" alt="Tailwind" width={28} height={28} />,
};

export function SkillBar({ skill, level, className }: SkillBarProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-6", className)}>
      <div>{skillIcons[skill]}</div>
      <div className="w-full">
        <div className="flex justify-between items-end mb-1">
          <span className="font-semibold text-base">{skill}</span>
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
        <Progress value={level} className="h-3 bg-secondary" />
      </div>
    </div>
  );
}

export default SkillBar;

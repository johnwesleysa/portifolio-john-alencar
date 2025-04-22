
import { Progress } from "@/components/ui/progress";
import { Python, Django, React as ReactIcon, CSharp, Net, Sql } from "lucide-react";

import { cn } from "@/lib/utils";

type Skill =
  | "Python"
  | "Django"
  | "React"
  | "C#"
  | ".NET"
  | "SQL";

interface SkillBarProps {
  skill: Skill;
  level: number; // de 0 a 100
  className?: string;
}

const skillIcons: Record<Skill, JSX.Element> = {
  Python: <Python className="text-[#3572A5]" size={28} />,
  Django: <Django className="text-[#092E20]" size={28} />,
  React: <ReactIcon className="text-[#61dafb]" size={28} />,
  "C#": <CSharp className="text-[#178600]" size={28} />,
  ".NET": <Net className="text-[#512BD4]" size={28} />,
  SQL: <Sql className="text-[#e5953c]" size={28} />,
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

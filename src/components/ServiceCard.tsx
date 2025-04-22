
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border-secondary/50 hover:border-primary transition-all duration-300">
      <CardHeader className="flex items-center">
        <div className="p-3 rounded-lg bg-secondary text-primary mb-4">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

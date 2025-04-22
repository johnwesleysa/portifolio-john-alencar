
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-secondary border-secondary"
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-secondary border-secondary"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-secondary border-secondary min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;

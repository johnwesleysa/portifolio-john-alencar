
import React from "react";
import { Mail, Instagram, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mt-8">
      <div className="flex-1 bg-background rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-4 hover-scale transition-transform duration-300" style={{ perspective: 1000 }}>
        <Mail size={38} className="text-primary mb-2" />
        <span className="text-base text-muted-foreground">E-mail:</span>
        <a
          href="mailto:contato@johnwesley.com"
          className="text-lg font-bold text-primary transition-colors hover:underline"
        >
          johnnalencarr@gmail.com
        </a>
      </div>
      <div className="flex-1 bg-background rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 hover:rotate-y-6" style={{ perspective: 1000 }}>
        <MessageCircleIcon size={38} className="text-green-500 mb-2" />
        <span className="text-base text-muted-foreground">WhatsApp:</span>
        <Button
          asChild
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-xl shadow-lg hover-scale"
        >
          <a
            href="https://wa.me/5581996430199?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!%20Acabei%20de%20vim%20do%20seu%20site!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale comigo no WhatsApp
          </a>
        </Button>
      </div>
      <div className="flex-1 bg-background rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform duration-300 hover:-rotate-y-6" style={{ perspective: 1000 }}>
        <Instagram size={38} className="text-pink-500 mb-2" />
        <span className="text-base text-muted-foreground">Instagram:</span>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-pink-500 px-6 py-2 rounded-xl text-white shadow-lg hover-scale"
        >
          <a
            href="https://instagram.com/johnalencarr"
            target="_blank"
            rel="noopener noreferrer"
          >
            @johnalencarr
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ContactCards;

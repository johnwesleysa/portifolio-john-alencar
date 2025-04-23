
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 font-heading">
          <span className="text-primary font-bold text-2xl">&lt;/&gt;</span>
          <span className="font-bold text-xl">John alencar</span>
        </a>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>

        <nav className={cn(
          'fixed md:static top-16 left-0 w-full md:w-auto bg-background/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-[300px] p-4 shadow-lg md:shadow-none' : 'max-h-0 md:max-h-full p-0 md:p-0'
        )}>
          <ul className="flex flex-col md:flex-row gap-1 md:gap-2">
            {['Home', 'Sobre', 'Projetos', 'Serviços', 'Contato'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-secondary/50 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

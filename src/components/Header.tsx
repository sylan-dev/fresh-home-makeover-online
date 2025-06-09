
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contato@lavaesecaonline.com.br</span>
            </div>
          </div>
          <div className="text-xs">
            Atendimento: Segunda a Sábado, 8h às 18h
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-poppins text-primary">
              LavaEseca<span className="text-foreground">Online</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden md:inline-flex">
              Solicitar Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="mt-4 w-fit">
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

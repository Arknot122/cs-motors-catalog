import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle, Home, Car, Info, Mail } from "lucide-react";

interface MobileMenuProps {
  onWhatsAppClick?: (text: string) => void;
}

const MobileMenu = ({ onWhatsAppClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio', icon: Home },
    { label: 'Motos', href: '#motos', icon: Car },
    { label: 'Sobre', href: '#sobre', icon: Info },
    { label: 'Contato', href: '#contato', icon: Mail },
  ];

  const handleWhatsAppClick = () => {
    const text = "Olá! Vim do site da CS Motos e gostaria de mais informações.";
    if (onWhatsAppClick) {
      onWhatsAppClick(text);
    }
    setIsOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-gray-300 hover:text-white hover:bg-cs-dark-800"
          aria-label="Abrir menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-secondary text-secondary-foreground">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-semibold">
            Menu de Navegação
          </SheetTitle>
        </SheetHeader>
        
        <nav className="mt-8 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="flex items-center w-full p-3 text-left rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              <item.icon className="w-5 h-5 mr-3 text-primary" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          
          <div className="border-t border-border pt-4 mt-6">
            <div className="flex items-center p-3 text-muted-foreground">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm">(62) 9 8166-0042</span>
            </div>
            
            <Button
              onClick={handleWhatsAppClick}
              className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              CONSULTAR AGORA
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

import React from 'react';

interface NavigationMenuProps {
  onWhatsAppClick?: (text: string) => void;
}

const NavigationMenu = ({ onWhatsAppClick }: NavigationMenuProps) => {
  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Motos', href: '#motos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = () => {
    const text = "Olá! Vim do site da CS Motos e gostaria de mais informações.";
    if (onWhatsAppClick) {
      onWhatsAppClick(text);
    }
  };

  return (
    <nav className="flex items-center space-x-4 sm:space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-gray-300 hover:text-cs-red-500 transition-colors duration-300 text-sm font-medium relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cs-red-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
      <button
        onClick={handleWhatsAppClick}
        className="bg-cs-red-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-cs-red-600 transition-colors duration-300 text-sm font-medium"
      >
        WhatsApp
      </button>
    </nav>
  );
};

export default NavigationMenu;

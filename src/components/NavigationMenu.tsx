
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationMenuProps {
  onWhatsAppClick?: (text: string) => void;
}

const NavigationMenu = ({ onWhatsAppClick }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-300 hover:text-[#FF3333] transition-colors duration-300 text-sm font-medium relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3333] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#FF3333] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 text-sm font-medium"
        >
          WhatsApp
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-300 hover:text-[#FF3333] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-[#141414] shadow-xl transform transition-transform duration-300">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-[#FF3333] font-bold text-lg">CS MOTOS</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-300 hover:text-[#FF3333] transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="p-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-[#FF3333] transition-colors duration-300 py-2 text-base"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#FF3333] text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 text-base font-medium mt-6"
              >
                Falar no WhatsApp
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationMenu;

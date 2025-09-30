
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Motos', href: '/motos' },
    { label: 'Carros', href: '/carros' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <nav className="flex items-center space-x-4 sm:space-x-8">
      {menuItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="text-gray-300 hover:text-cs-red-500 transition-colors duration-300 text-sm font-medium relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cs-red-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;

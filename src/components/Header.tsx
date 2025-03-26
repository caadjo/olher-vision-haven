
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { title: 'Principal', href: '#home' },
    { title: 'Sobre Nós', href: '#about' },
    { title: 'Serviços', href: '#services' },
    { title: 'Contato', href: '#contact' },
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-olher-dark font-heading">
            Olher
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-olher-navy hover:text-olher-blue transition-colors duration-300 font-medium link-underline"
            >
              {item.title}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-olher-navy hover:text-olher-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-all duration-300 flex flex-col pt-24",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto px-6 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xl text-olher-navy hover:text-olher-blue transition-colors py-2 border-b border-olher-light"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

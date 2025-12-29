'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        hasScrolled ? 'bg-card/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="font-headline text-2xl font-bold text-primary transition-transform hover:scale-105">
          Shubham's Showcase
        </a>
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
            {/* Mobile menu could be implemented here */}
        </div>
      </div>
    </header>
  );
}

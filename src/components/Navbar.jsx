'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[#04060efc] border-b border-cyan-500/15 backdrop-blur-xl shadow-lg shadow-black/50'
          : 'bg-[#04060e90] backdrop-blur-md'
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="font-orbitron font-black text-xl text-gradient-cyan tracking-widest no-underline">
        A·S
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs font-bold tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:inline-block px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 no-underline"
      >
        Contact
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-4 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
        <span className={`block w-4 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block w-4 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#04060ef8] border-b border-cyan-500/20 backdrop-blur-2xl p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-widest text-slate-200 hover:text-cyan-400 transition-colors uppercase py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs tracking-wider"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

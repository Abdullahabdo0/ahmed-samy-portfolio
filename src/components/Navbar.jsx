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
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[#04060efc] border-b border-cyan-500/10 backdrop-blur-xl'
          : 'bg-[#04060e99] backdrop-blur-md'
      }`}
    >
      {/* Logo */}
      <span className="font-orbitron font-black text-xl text-gradient-cyan tracking-widest">A·S</span>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`text-sm font-semibold tracking-widest transition-colors duration-200 relative group ${
                active === l.href ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00f0ff]" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block px-5 py-2 rounded-full border border-cyan-500/40 text-cyan-300 text-sm font-bold tracking-wider hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}

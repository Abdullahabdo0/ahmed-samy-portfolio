'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Particles = dynamic(() => import('../components/Particles'), { ssr: false });

export default function Home() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    const move = (e) => { mx.current = e.clientX; my.current = e.clientY; };
    window.addEventListener('mousemove', move);

    let animId;
    const anim = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx.current - 7 + 'px';
        cursorRef.current.style.top = my.current - 7 + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current - 19 + 'px';
        ringRef.current.style.top = ry.current - 19 + 'px';
      }
      animId = requestAnimationFrame(anim);
    };
    anim();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(animId); };
  }, []);

  return (
    <>
      <Head>
        <title>Ahmed Samy El-Sanhory | Physical Therapy</title>
        <meta name="description" content="Ahmed Samy El-Sanhory — Physical Therapy Student at Galala University" />
      </Head>

      {/* Cursor */}
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />

      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 px-8 border-t border-cyan-500/[0.07] flex items-center justify-between relative z-10">
        <span className="font-orbitron font-black text-sm text-gradient-cyan">A·S</span>
        <span className="text-xs text-slate-500">© 2025 Ahmed Samy El-Sanhory. All Rights Reserved.</span>
      </footer>
    </>
  );
}

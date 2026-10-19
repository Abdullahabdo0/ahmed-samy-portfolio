'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 pt-24 pb-16 overflow-hidden relative"
    >
      {/* Background ambient glows */}
      <div className="absolute top-[-80px] right-[-60px] w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-cyan-500 opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-purple-600 opacity-[0.08] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-[2.5px] uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" />
            Physical Therapy Student
          </div>

          {/* Name */}
          <h1 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl leading-tight text-gradient mb-4">
            Ahmed Samy<br />
            <span className="text-cyan-400">El-Sanhory</span>
          </h1>

          {/* Sub / University */}
          <div className="mb-6 max-w-md w-full">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              4th-year Physical Therapy student at{' '}
              <span className="text-cyan-300 font-bold">Galala University</span>.
            </p>

            {/* University Logo Card */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-sm mx-auto md:mx-0">
              <img
                src="/galala-logo.jpg"
                alt="Galala University"
                className="w-10 h-7 rounded object-contain bg-black/60 p-0.5"
              />
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-100 tracking-wider">GALALA UNIVERSITY</span>
                <span className="block text-[10px] text-cyan-400 font-medium">Faculty of Physical Therapy</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-3">
              Passionate about helping people recover and live better lives through modern rehabilitation.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex gap-6 sm:gap-8 mb-8 justify-center md:justify-start">
            {[
              { num: '21', label: 'Years Old' },
              { num: '4th', label: 'Year' },
              { num: 'B+', label: 'Grade' },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-orbitron font-black text-2xl sm:text-3xl text-gradient-cyan">{s.num}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 tracking-widest mt-0.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start w-full">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 rounded-full font-bold text-sm text-white tracking-wider bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all duration-300 text-center"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 sm:px-8 py-3 rounded-full font-bold text-sm text-cyan-300 tracking-wider border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* PHOTO CONTAINER (Mobile & Desktop Optimized) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="order-1 md:order-2 flex flex-col items-center justify-center w-full"
        >
          {/* Main Photo Card */}
          <div className="relative w-[260px] h-[370px] sm:w-[300px] sm:h-[420px] md:w-[320px] md:h-[460px] max-w-full">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-500 via-violet-600 to-pink-500 opacity-25 blur-xl scale-105 pointer-events-none" />

            {/* Neon Border */}
            <div className="absolute inset-[-2px] rounded-[34px] bg-gradient-to-br from-cyan-400 via-violet-600 to-pink-500 p-[2px] opacity-85">
              <div className="w-full h-full rounded-[32px] bg-[#04060e]" />
            </div>

            {/* The Photo itself */}
            <div className="relative z-10 w-full h-full rounded-[32px] overflow-hidden border border-cyan-500/20 bg-[#080d1a]">
              <img
                src="/photo-full.jpg"
                alt="Ahmed Samy El-Sanhory"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060e]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge - University */}
            <div className="absolute -left-4 sm:-left-8 top-6 z-20 bg-[#04060e]/95 border border-cyan-500/40 rounded-xl px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold text-cyan-300 backdrop-blur-md shadow-xl whitespace-nowrap">
              🏛 Galala Uni
            </div>

            {/* Floating Badge - Grade */}
            <div className="absolute -right-3 sm:-right-6 bottom-8 z-20 bg-[#04060e]/95 border border-violet-500/40 rounded-xl px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold text-violet-300 backdrop-blur-md shadow-xl whitespace-nowrap">
              ⭐ Grade: B+
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator (hidden on small phones to save space) */}
      <div className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate-500 text-[10px] tracking-[3px] uppercase">
        <div className="w-4 h-7 border border-cyan-500/30 rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 pt-28 pb-16 overflow-hidden relative"
    >
      {/* Background glows */}
      <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full bg-cyan-500 opacity-[0.07] blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] rounded-full bg-purple-600 opacity-[0.07] blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-xs font-bold tracking-[3px] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-blink" />
            Physical Therapy Student
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-gradient mb-4"
          >
            Ahmed Samy<br />
            <span className="text-cyan-400">El-Sanhory</span>
          </motion.h1>

          {/* Sub */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 max-w-md"
          >
            <p className="text-slate-300 text-base leading-relaxed mb-3">
              4th-year Physical Therapy student at{' '}
              <span className="text-cyan-300 font-bold">Galala University</span>.
            </p>
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-sm">
              <Image
                src="/galala-logo.jpg"
                alt="Galala University Logo"
                width={36}
                height={22}
                className="rounded object-contain"
              />
              <div className="text-left">
                <span className="block text-xs font-bold text-slate-200 tracking-wider">GALALA UNIVERSITY</span>
                <span className="block text-[10px] text-cyan-400 font-medium">Faculty of Physical Therapy</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-3">
              Passionate about helping people recover and live better lives through modern rehabilitation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex gap-8 mb-10"
          >
            {[
              { num: '21', label: 'Years Old' },
              { num: '4th', label: 'Year' },
              { num: 'B+', label: 'Grade' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-orbitron font-black text-3xl text-gradient-cyan">{s.num}</div>
                <div className="text-xs text-slate-500 tracking-widest mt-1 uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#contact"
              className="px-7 py-3 rounded-full font-bold text-sm text-white tracking-wider bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-7 py-3 rounded-full font-bold text-sm text-cyan-300 tracking-wider border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="order-1 md:order-2 flex flex-col items-center gap-6"
        >
          <div className="relative w-72 h-[420px] md:w-80 md:h-[480px]">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-500 via-violet-600 to-pink-500 opacity-25 blur-2xl scale-105" />

            {/* Glowing border frame */}
            <div className="absolute inset-[-3px] rounded-[38px] bg-gradient-to-br from-cyan-400 via-violet-600 to-pink-500 animate-spin-slow opacity-80" style={{ padding: '2px' }}>
              <div className="w-full h-full rounded-[36px] bg-[#04060e]" />
            </div>

            {/* Ambient outer halo */}
            <div className="absolute inset-[-12px] rounded-[48px] border border-cyan-500/20" />

            {/* Photo — Full image with nice rounded frame and shadow */}
            <div className="relative z-10 w-full h-full rounded-[35px] overflow-hidden border border-cyan-500/30">
              <Image
                src="/photo-full.jpg"
                alt="Ahmed Samy El-Sanhory"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04060e]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge — university */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-12 top-1/4 z-20 bg-[#04060e]/95 border border-cyan-500/30 rounded-2xl px-3 py-2 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-2xl whitespace-nowrap"
            >
              🏛 Galala University
            </motion.div>

            {/* Floating badge — grade */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -right-8 bottom-1/5 z-20 bg-[#04060e]/95 border border-violet-500/30 rounded-2xl px-3 py-2 text-xs font-bold text-violet-300 backdrop-blur-md shadow-2xl whitespace-nowrap"
            >
              ⭐ Grade: B+
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-[10px] tracking-[3px] uppercase"
      >
        <div className="w-5 h-8 border border-cyan-500/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-400 rounded-full"
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

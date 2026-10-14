'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function SectionHeader({ tag, title }) {
  return (
    <div className="text-center mb-16">
      <p className="text-cyan-400 text-xs font-bold tracking-[4px] uppercase mb-3">{tag}</p>
      <h2 className="font-orbitron font-black text-3xl md:text-4xl text-gradient mb-4">{title}</h2>
      <div className="w-16 h-[3px] mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_12px_#00f0ff]" />
    </div>
  );
}

function SkillBar({ label, pct, color }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const barColor =
    color === 'cyan' ? 'from-cyan-500 to-violet-600' :
    color === 'purple' ? 'from-violet-500 to-pink-500' :
    'from-pink-500 to-orange-400';

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-slate-300">{label}</span>
        <span className="text-sm font-bold text-cyan-400 font-orbitron">{pct}%</span>
      </div>
      <div className="h-[5px] bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
          style={{ boxShadow: color === 'cyan' ? '0 0 10px #00f0ff66' : '0 0 10px #7b2fff66' }}
        />
      </div>
    </div>
  );
}

const infoItems = [
  { label: 'Full Name', value: 'Ahmed Samy El-Sanhory' },
  { label: 'Age', value: '21 Years' },
  { label: 'University', value: 'Galala University' },
  { label: 'Faculty', value: 'Physical Therapy' },
  { label: 'Year', value: '4th Year' },
  { label: 'Grade', value: 'B+ ⭐' },
];

const skills = [
  { label: 'Human Anatomy', pct: 90, color: 'cyan' },
  { label: 'Rehabilitation', pct: 88, color: 'cyan' },
  { label: 'Electrotherapy', pct: 85, color: 'purple' },
  { label: 'Manual Therapy', pct: 82, color: 'pink' },
  { label: 'Biomechanics', pct: 87, color: 'cyan' },
  { label: 'Respiratory PT', pct: 80, color: 'purple' },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#04060e] to-[#080d1a]">
      <SectionHeader tag="// Who Am I" title="About Me" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — bio + info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 leading-relaxed text-base mb-4">
            I'm a dedicated <span className="text-cyan-300 font-semibold">Physical Therapy student</span> at Galala University,
            consistently achieving a <span className="text-cyan-300 font-semibold">Very Good grade</span> across my first three years.
          </p>
          <p className="text-slate-400 leading-relaxed text-base mb-8">
            My goal is to help patients regain their full potential through evidence-based therapy,
            modern techniques, and genuine care.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {infoItems.map((item) => (
              <div key={item.label} className="card-dark rounded-2xl px-4 py-3">
                <p className="text-[10px] text-slate-500 tracking-[2px] uppercase mb-1">{item.label}</p>
                <p className="text-sm font-bold text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — skill bars */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {skills.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

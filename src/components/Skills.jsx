'use client';
import { motion } from 'framer-motion';

function SectionHeader({ tag, title }) {
  return (
    <div className="text-center mb-16">
      <p className="text-cyan-400 text-xs font-bold tracking-[4px] uppercase mb-3">{tag}</p>
      <h2 className="font-orbitron font-black text-3xl md:text-4xl text-gradient mb-4">{title}</h2>
      <div className="w-16 h-[3px] mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_12px_#00f0ff]" />
    </div>
  );
}

const cards = [
  { icon: '🦴', title: 'Musculoskeletal', desc: 'Assessment and treatment of bones, joints, and muscles for fast and effective recovery.' },
  { icon: '⚡', title: 'Electrotherapy', desc: 'TENS, Ultrasound, Laser, and Shockwave — modern technology for deep healing.' },
  { icon: '🏃', title: 'Sports Rehab', desc: 'Helping athletes recover from injuries and return to peak performance.' },
  { icon: '🤲', title: 'Manual Therapy', desc: 'Soft tissue mobilization, stretching, and joint manipulation for instant relief.' },
  { icon: '🫁', title: 'Respiratory PT', desc: 'Improving lung function and supporting recovery from breathing conditions.' },
  { icon: '🧠', title: 'Neuro Rehab', desc: 'Stroke recovery and nervous system rehabilitation with evidence-based techniques.' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#080d1a] to-[#0d1428]">
      <SectionHeader tag="// Competencies" title="Skills" />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="card-dark rounded-2xl p-7 text-center group cursor-default relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="text-4xl mb-5">{c.icon}</div>
            <h3 className="text-base font-black text-slate-100 mb-3">{c.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

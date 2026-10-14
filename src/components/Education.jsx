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

const items = [
  {
    year: '2024 — Present',
    title: 'Advanced Clinical Training',
    place: 'Galala University Hospital',
    desc: 'Hands-on clinical practice in orthopedic, neurological, and cardiopulmonary rehabilitation. Applying advanced manual therapy and electrotherapy techniques on real patients.',
    badge: '⚡ Clinical Year',
    color: 'cyan',
  },
  {
    year: '2021 — 2024',
    title: 'Bachelor of Physical Therapy',
    place: 'Faculty of Physical Therapy — Galala University',
    desc: 'Studying human anatomy, physiology, biomechanics, pathology, electrotherapy, and rehabilitation. Achieved Very Good grade for three consecutive years.',
    badge: '🏆 Grade: B+ (Very Good)',
    color: 'purple',
  },
  {
    year: '2020 — 2021',
    title: 'General Secondary Certificate',
    place: 'Egypt',
    desc: 'Graduated with strong results in science track, paving the way to medical specialization.',
    badge: '🎓 Science Track',
    color: 'pink',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 md:px-16 bg-[#04060e]">
      <SectionHeader tag="// Academic Journey" title="Education" />

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent" />

        {items.map((item, i) => {
          const borderColor =
            item.color === 'cyan' ? 'border-cyan-500/30' :
            item.color === 'purple' ? 'border-violet-500/30' : 'border-pink-500/30';

          const badgeColor =
            item.color === 'cyan' ? 'text-cyan-300 border-cyan-500/30 bg-cyan-500/5' :
            item.color === 'purple' ? 'text-violet-300 border-violet-500/30 bg-violet-500/5' :
            'text-pink-300 border-pink-500/30 bg-pink-500/5';

          const dotColor =
            item.color === 'cyan' ? 'bg-cyan-500 shadow-[0_0_12px_#00f0ff]' :
            item.color === 'purple' ? 'bg-violet-500 shadow-[0_0_12px_#7b2fff]' :
            'bg-pink-500 shadow-[0_0_12px_#ff2d78]';

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-12 mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className={`absolute left-0 top-5 w-3 h-3 rounded-full ${dotColor} -translate-x-[5px]`} />

              <div className={`card-dark border ${borderColor} rounded-2xl p-6`}>
                <p className="text-xs font-bold tracking-[2px] text-cyan-400 uppercase mb-2">{item.year}</p>
                <h3 className="text-lg font-black text-slate-100 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{item.place}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${badgeColor}`}>
                  {item.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/asamy7256@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `📩 New Portfolio Message from ${form.name}`,
          _template: 'table'
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16 bg-[#04060e]">
      <SectionHeader tag="// Get In Touch" title="Contact" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Whether for academic collaboration, questions, or a friendly message —
            I'm always happy to connect! 👋
          </p>

          <div className="flex flex-col gap-4">
            {/* Gmail */}
            <a
              href="mailto:asamy7256@gmail.com"
              className="card-dark flex items-center gap-4 rounded-2xl px-5 py-4 no-underline hover:-translate-x-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center text-xl flex-shrink-0">
                ✉️
              </div>
              <div>
                <p className="text-[10px] text-slate-500 tracking-[2px] uppercase mb-0.5">Gmail</p>
                <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">asamy7256@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201069139510"
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark flex items-center gap-4 rounded-2xl px-5 py-4 no-underline hover:-translate-x-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-xl flex-shrink-0">
                📱
              </div>
              <div>
                <p className="text-[10px] text-slate-500 tracking-[2px] uppercase mb-0.5">WhatsApp</p>
                <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">01069139510</p>
              </div>
            </a>

            {/* Snapchat */}
            <a
              href="https://snapchat.com/t/hJthykiC"
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark flex items-center gap-4 rounded-2xl px-5 py-4 no-underline hover:-translate-x-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-xl flex-shrink-0">
                👻
              </div>
              <div>
                <p className="text-[10px] text-slate-500 tracking-[2px] uppercase mb-0.5">Snapchat</p>
                <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">Ahmed Samy</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-cyan-500/[0.03] border border-cyan-500/10 rounded-xl px-5 py-4 text-slate-200 text-sm outline-none placeholder-slate-600 focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-cyan-500/[0.03] border border-cyan-500/10 rounded-xl px-5 py-4 text-slate-200 text-sm outline-none placeholder-slate-600 focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your Message..."
            required
            className="w-full bg-cyan-500/[0.03] border border-cyan-500/10 rounded-xl px-5 py-4 text-slate-200 text-sm outline-none placeholder-slate-600 focus:border-cyan-500/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 rounded-xl font-bold text-sm text-white tracking-wider bg-gradient-to-r from-cyan-500 to-violet-600 shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message'}
          </button>

          {status === 'success' && (
            <div className="text-center py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold">
              ✅ Message sent successfully to Ahmed's Gmail!
            </div>
          )}
          {status === 'error' && (
            <div className="text-center py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
              ❌ Failed to send. Please use WhatsApp or Gmail directly.
            </div>
          )}
        </motion.form>

      </div>
    </section>
  );
}

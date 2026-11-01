import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Mission() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="px-4 sm:p-8 max-w-3xl mx-auto pt-[80px] sm:pt-[120px] pb-24 min-h-screen">
      <header className="mb-16 border-b border-[#1A1A1A] pb-6">
        <h1 className="font-mono text-3xl text-[#FFFFFF] tracking-widest uppercase">Mission</h1>
        <p className="text-[#7A7A7A] mt-4 font-sans text-sm tracking-wide uppercase">Why Mrdn exists.</p>
      </header>

      <div className="space-y-12 text-[#7A7A7A] font-sans leading-relaxed">
        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">01. The objective</h2>
          <p className="text-lg text-[#FFFFFF] leading-loose">
            Most Indian businesses run on spreadsheets, Tally, WhatsApp groups and letters. The answers to everyday questions (which orders will slip, which supplier is late, which truck is idle) are already in those files, but scattered across them. Mrdn exists to put them into one linked picture that anyone in the business can question.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">02. The architecture</h2>
          <p className="leading-loose">
            Orion reads the files and proposes how they link, with its evidence. Nexus holds the linked picture of the business. Agents watch it for trouble and draft the fix. Aegis answers questions in plain words with the rows behind each answer. A person approves every action, and nothing is sent anywhere on its own.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">03. Where it stands</h2>
          <p className="leading-loose">
            Mrdn is a working preview on synthetic data for a fictional company. It runs on a laptop with no internet, and it has been tested at 50,000 rows in about seven seconds. Defence work (Helix) is discussed in closed-door meetings only. Mrdn is built by Zaio Private Limited, Bengaluru.
          </p>
        </section>

        <div className="border-l-4 border-[#C45E1A] pl-6 mt-16 py-4 bg-[#0A0A0A] flex flex-col gap-6">
          <p className="font-mono text-sm md:text-base text-[#FFFFFF] uppercase tracking-widest leading-loose">
            "Bring any data. See how it connects."
          </p>
          <Link to="/contact" className="self-start bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-6 py-3 hover:bg-[#FFFFFF] transition-colors">
            Book a demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'motion/react';

export default function Mission() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="p-8 max-w-3xl mx-auto pt-[120px] pb-24 min-h-screen">
      <header className="mb-16 border-b border-[#1A1A1A] pb-6">
        <h1 className="font-mono text-3xl text-[#FFFFFF] tracking-widest uppercase">Mission</h1>
        <p className="text-[#7A7A7A] mt-4 font-sans text-sm tracking-wide uppercase">Why Meridian exists.</p>
      </header>
      
      <div className="space-y-12 text-[#7A7A7A] font-sans leading-relaxed">
        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">01. The Objective</h2>
          <p className="text-lg text-[#FFFFFF] leading-loose">
            India generates petabytes of critical operational data daily across defence, government, and enterprise sectors. Yet, this data remains siloed, fundamentally limiting sovereign decision-making. Meridian exists to build the core infrastructure that fuses these fragmented streams into a unified intelligence graph.
          </p>
        </section>
        
        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">02. The Architecture</h2>
          <p className="leading-loose">
            We do not build dashboards. We build a living, multi-layered reasoning engine. Helix secures the ingestion. Nexus maps the relationships. Orion automates the reasoning. Aegis enables natural language interaction. We are collapsing the distance between raw data and decisive action.
          </p>
        </section>
        
        <section>
          <h2 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-4">03. The Outcome</h2>
          <p className="leading-loose">
            Palantir was built for the Pentagon. Meridian is built for India. Sovereign infrastructure. Indian data staying on Indian servers. Accessible to both the government defending the nation and the enterprises building its future.
          </p>
        </section>

        <div className="border-l border-[#C45E1A] pl-6 mt-16 py-2">
          <p className="font-mono text-xs text-[#FFFFFF] uppercase tracking-widest opacity-80">
            "India relies on foreign software for its most sensitive intelligence. That ends with Meridian."
          </p>
        </div>
      </div>
    </motion.div>
  );
}

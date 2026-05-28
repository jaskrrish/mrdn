import { useState } from 'react';
import { motion } from 'motion/react';

export default function Intelligence() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const insights = [
    { id: 1, title: 'Border Telemetry Alert', date: '2026.05.20', category: 'DEFENSE', content: 'Helix ingested 43 anomalous drone telemetry signals converging along the western grid in a 4-minute window. Orion correlated this with encrypted VHF chatter flagged by Aegis. Threat score pushed to 92. Border units notified.' },
    { id: 2, title: 'Commodity Import Anomaly', date: '2026.05.19', category: 'ENTERPRISE', content: 'Nexus identified a coordinated 14% drop in critical rare-earth imports across three major ports, mapped against a surge in foreign export tariffs. Orion projects a supply chain bottleneck for tier-1 manufacturers within 14 days.' },
    { id: 3, title: 'Syndicate Network Mapped', date: '2026.05.18', category: 'INTELLIGENCE', content: 'Helix successfully aligned 12 disparate police databases, resolving 300+ aliases into a singular organized crime entity. The graph reveals direct financial links to three shell companies operating in the logistics sector.' },
    { id: 4, title: 'Infrastructure Stress Event', date: '2026.05.17', category: 'OPERATIONS', content: 'Aegis parsed maintenance logs across 40 power grid substations, highlighting a subtle degradation pattern in cooling units. Nexus graph indicates a single faulty batch from a third-party vendor. Preemptive replacement order generated.' },
    { id: 5, title: 'Phishing Campaign Neutralised', date: '2026.05.16', category: 'CYBER', content: 'Orion detected an emergent phishing syntax targeting government endpoints. Within 12 seconds, Aegis extracted the threat vector, and Helix cross-referenced the signatures across 15 active ministry nodes, elevating threat scores to HIGH and triggering automated response protocols.' },
    { id: 6, title: 'Crop Yield Projection Update', date: '2026.05.15', category: 'ECONOMICS', content: 'Fusing geospatial satellite imagery with regional fertilizer procurement data, Nexus has revised the Q4 wheat yield projection down by 2.4%. Strategic reserves have been notified to prevent market speculation.' },
  ];

  const article = insights.find(i => i.id === selectedArticle);

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="p-8 max-w-4xl mx-auto pt-[80px] pb-24">
      <header className="mb-12 border-b border-[#1A1A1A] pb-4 flex justify-between items-end">
        <div>
          <h1 className="font-mono text-2xl text-[#FFFFFF] tracking-widest uppercase">Intelligence</h1>
          <p className="text-[#7A7A7A] mt-2 font-sans text-sm">Live platform outputs. All intel synthesized autonomously by Orion.</p>
        </div>
        {selectedArticle && (
          <button 
            onClick={() => setSelectedArticle(null)}
            className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase hover:text-[#FFFFFF] transition-colors border border-[#1A1A1A] px-3 py-1 cursor-pointer"
          >
            &larr; Back to List
          </button>
        )}
      </header>

      {!selectedArticle ? (
        <div className="flex flex-col gap-4">
          {insights.map((insight) => (
            <div 
              key={insight.id} 
              onClick={() => setSelectedArticle(insight.id)}
              className="border border-[#1A1A1A] bg-[#0A0A0A] p-6 hover:border-[#7A7A7A] transition-colors cursor-pointer flex justify-between items-center group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase">{insight.category}</span>
                  <span className="font-mono text-[10px] text-[#7A7A7A]">{insight.date}</span>
                </div>
                <h2 className="font-sans text-lg text-[#FFFFFF] group-hover:text-[#C45E1A] transition-colors">{insight.title}</h2>
              </div>
              <div className="text-[#7A7A7A] group-hover:text-[#FFFFFF] transition-colors">
                &rarr;
              </div>
            </div>
          ))}
        </div>
      ) : (
        <article className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6 border-b border-[#1A1A1A] pb-6">
            <span className="font-mono text-xs text-[#C45E1A] tracking-widest uppercase">{article?.category}</span>
            <span className="font-mono text-xs text-[#7A7A7A]">{article?.date}</span>
            <span className="font-mono text-xs text-[#7A7A7A] ml-auto">REF: INT-{article?.id.toString().padStart(4, '0')}</span>
          </div>
          <h1 className="font-sans text-3xl text-[#FFFFFF] mb-8 leading-tight">{article?.title}</h1>
          <div className="font-sans text-[#7A7A7A] text-lg leading-relaxed space-y-6">
            <p className="text-[#FFFFFF]">{article?.content}</p>
            <p>Source signals cryptographically verified by Helix. Graph integrity confirmed by Nexus. Autonomous analysis executed by Orion.</p>
            <div className="border-l-2 border-[#C45E1A] pl-6 mt-8 py-2">
              <p className="font-mono text-sm text-[#FFFFFF] uppercase tracking-widest">
                Status: Active Monitoring
              </p>
            </div>
          </div>
        </article>
      )}
    </motion.div>
  );
}

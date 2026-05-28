import { motion } from 'motion/react';
import { useState } from 'react';

export default function Helix() {
  const [helixVideoSrc] = useState<string>("https://drive.google.com/file/d/1rhTI5W8_iYmkedj6u-8DxP3PjdtrSMnI/preview");
  const heatmapColors = [
    'bg-[#5C2C0C]', 'bg-[#C45E1A]', 'bg-[#8A4212]', 'bg-[#1A1A1A]', 'bg-[#5C2C0C]', 'bg-[#C45E1A]', 'bg-[#5C2C0C]', 'bg-[#C45E1A]',
    'bg-[#C45E1A]', 'bg-[#1A1A1A]', 'bg-[#5C2C0C]', 'bg-[#5C2C0C]', 'bg-[#C45E1A]', 'bg-[#8A4212]', 'bg-[#1A1A1A]', 'bg-[#5C2C0C]',
    'bg-[#8A4212]', 'bg-[#C45E1A]', 'bg-[#5C2C0C]', 'bg-[#1A1A1A]', 'bg-[#C45E1A]', 'bg-[#C45E1A]', 'bg-[#1A1A1A]', 'bg-[#C45E1A]'
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-[120px] pb-32">
      {/* Header Section */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#C45E1A]"></div>
          <span className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase">SOVEREIGN INTELLIGENCE // HELIX v1.0</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-sans font-bold text-[#FFFFFF] tracking-tighter mb-8 leading-none">HELIX</h1>
        <div className="flex">
          <div className="w-1 bg-[#C45E1A] mr-6"></div>
          <p className="font-mono text-lg md:text-xl text-[#7A7A7A] uppercase tracking-widest max-w-2xl leading-relaxed">
            GOVERNMENT & DEFENCE INTELLIGENCE PLATFORM
          </p>
        </div>
      </div>

      {/* BLOCK_01 */}
      <div className="mb-24">
        <h2 className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase mb-8">BLOCK_01 // DATA_INGESTION_LAYER</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl font-sans text-[#FFFFFF] leading-snug mb-12">
              Helix connects to all major Government of India ministries and departments — an estimated 15 to 20 agencies — under a sovereign data contract. All data is ingested, processed, and stored exclusively on Indian infrastructure. Zero foreign data routing.
            </p>
            <table className="w-full text-left font-mono text-[10px] tracking-widest uppercase">
              <thead>
                <tr className="text-[#7A7A7A] border-b border-[#1A1A1A]">
                  <th className="pb-4 font-normal">ENDPOINT_ID</th>
                  <th className="pb-4 font-normal">LATENCY_MS</th>
                  <th className="pb-4 font-normal">TYPE</th>
                </tr>
              </thead>
              <tbody className="text-[#FFFFFF]">
                <tr className="border-b border-[#1A1A1A]">
                  <td className="py-4">MINISTRY_DB</td>
                  <td className="py-4 text-[#C45E1A]">0.04</td>
                  <td className="py-4">STRUCTURED</td>
                </tr>
                <tr className="border-b border-[#1A1A1A]">
                  <td className="py-4">OSINT_STREAM</td>
                  <td className="py-4 text-[#C45E1A]">0.12</td>
                  <td className="py-4">UNSTRUCTURED</td>
                </tr>
                <tr className="border-b border-[#1A1A1A]">
                  <td className="py-4">GEOSPATIAL</td>
                  <td className="py-4 text-[#C45E1A]">0.08</td>
                  <td className="py-4">VECTOR</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 flex flex-col">
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase mb-8">MATRIX_VISUALIZATION_M01</span>
            <div className="grid grid-cols-8 gap-1 mb-auto">
              {heatmapColors.map((color, i) => (
                <div key={i} className={`aspect-square ${color}`}></div>
              ))}
            </div>
            <div className="mt-12">
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-widest uppercase">SIGNAL_DENSITY</span>
                <span className="font-sans text-4xl font-bold text-[#FFFFFF]">98.4%</span>
              </div>
              <div className="w-full h-1 bg-[#1A1A1A]">
                <div className="h-full bg-[#C45E1A] w-[98.4%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="pb-24"></div>

      {/* BLOCK_02 */}
      <div className="mb-24">
        <h2 className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase mb-8">BLOCK_02 // ONTOLOGY_ENGINE</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-[#1A1A1A] mb-8">
          {/* Stage 1 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A]">
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-6">STAGE_L1</span>
            <h3 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase mb-8">RAW_SIGNAL</h3>
            <div className="text-[#C45E1A] font-sans text-xl font-bold mb-1">Multi-Agency Feeds</div>
          </div>
          {/* Stage 2 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A] flex flex-col justify-between min-h-[160px]">
            <div>
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-6">STAGE_L2</span>
              <h3 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase">ENTITY_MAPPING</h3>
            </div>
            <div className="w-4 h-4 rounded-full border-2 border-[#C45E1A] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#C45E1A] rounded-full"></div>
            </div>
          </div>
          {/* Stage 3 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A] flex flex-col justify-between min-h-[160px]">
            <div>
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-6">STAGE_L3</span>
              <h3 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase">GRAPH_CONSTRUCTION</h3>
            </div>
            <div className="text-[#C45E1A] text-lg">⇄</div>
          </div>
          {/* Stage 4 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#0A0A0A] flex flex-col justify-between min-h-[160px]">
            <div>
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-6">STAGE_L4</span>
              <h3 className="font-mono text-sm text-[#FFFFFF] tracking-widest uppercase">CROSS_VALIDATION</h3>
            </div>
            <div className="w-4 h-4 border-2 border-[#C45E1A] rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#C45E1A]"></div>
            </div>
          </div>
          {/* Stage 5 */}
          <div className="p-6 bg-[#C45E1A] flex flex-col justify-between min-h-[160px]">
            <div>
              <span className="font-mono text-[9px] text-[#000000] tracking-widest uppercase block mb-6">STAGE_L5</span>
              <h3 className="font-mono text-sm text-[#000000] tracking-widest uppercase font-bold">LIVE_GRAPH</h3>
            </div>
            <div className="w-4 h-4 bg-[#000000] rounded-full flex items-center justify-center">
              <span className="text-[#C45E1A] text-[10px] leading-none">✓</span>
            </div>
          </div>
        </div>
        <p className="text-[#FFFFFF] font-sans text-lg max-w-3xl leading-relaxed">
          Every entity — person, location, organisation, event, transaction — is mapped as a node. Relationships are edges. The result is a living knowledge graph where analysts trace connections across data that was previously siloed across agencies.
        </p>
      </div>

      {/* BLOCK_03 (Image Section) */}
      <div className="mb-24 relative border border-[#1A1A1A] bg-[#0A0A0A] h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
          alt="Server Rack" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent"></div>
        
        <div className="absolute top-8 right-8 border-l border-[#C45E1A] pl-4">
          <span className="font-mono text-[8px] text-[#7A7A7A] tracking-widest uppercase block mb-1">ONTOLOGY_NODES_ACTIVE</span>
          <span className="font-sans text-2xl font-bold text-[#FFFFFF]">1,402</span>
        </div>

        <div className="absolute bottom-8 left-8 max-w-xl pr-8">
          <span className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase block mb-4">SURFACE_SCAN // INTELLIGENCE_LAYER</span>
          <p className="font-sans text-lg md:text-xl text-[#FFFFFF] leading-snug">
            Cross-agency entity resolution running at sub-millisecond latency. Anomalous signal clusters are surfaced and scored automatically — no manual analyst query required.
          </p>
        </div>
      </div>

      {/* BLOCK_04 & 05 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Block 04 */}
        <div>
          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 h-full flex flex-col">
            <span className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase block mb-12">BLOCK_04 // THREAT_SCORING_MATRIX</span>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 bg-[#C45E1A]"></div>
              <div className="h-px bg-[#C45E1A] flex-1 relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-16 h-full bg-[#FFFFFF]" animate={{ x: ['-100%', '400%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} />
            </div>
              <span className="font-mono text-[9px] text-[#FFFFFF] tracking-widest uppercase">ENTRY</span>
            </div>
            
            <div className="pl-6 border-l border-[#1A1A1A] ml-1.5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-4 h-px bg-[#1A1A1A]"></div>
                <div className="border border-[#1A1A1A] px-4 py-2 flex items-center gap-4 min-w-[180px] justify-between">
                  <span className="font-mono text-[10px] text-[#FFFFFF] tracking-widest uppercase">MULTI_SIGNAL_CORRELATION</span>
                  <span className="text-[#C45E1A] text-xs">✓</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-px bg-[#1A1A1A]"></div>
                <div className="border border-[#1A1A1A] px-4 py-2 flex items-center gap-4 min-w-[180px] justify-between">
                  <span className="font-mono text-[10px] text-[#FFFFFF] tracking-widest uppercase">AGENCY_CROSS_REFERENCE</span>
                  <span className="text-[#C45E1A] text-xs">✓</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-px bg-[#1A1A1A]"></div>
                <div className="border border-[#1A1A1A] px-4 py-2 flex items-center gap-4 min-w-[180px] justify-between opacity-50">
                  <span className="font-mono text-[10px] text-[#7A7A7A] tracking-widest uppercase">FALSE_POSITIVE_FLAG</span>
                  <span className="text-[#7A7A7A] text-xs">×</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Block 04 Right Text */}
        <div className="flex flex-col justify-center">
          <p className="text-xl font-sans text-[#FFFFFF] leading-snug mb-12">
            Every converging signal cluster is evaluated against a multi-agency cross-reference. Composite threat scores are generated in real time. Low-confidence signals are quarantined and flagged for analyst review.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-[#1A1A1A] p-6">
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-2">THREAT_SCORE_LATENCY</span>
              <span className="font-sans text-2xl text-[#FFFFFF]">&lt;200MS</span>
            </div>
            <div className="border border-[#1A1A1A] p-6">
              <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-2">QUARANTINE</span>
              <span className="font-sans text-2xl text-[#FFFFFF]">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK_05 */}
      <div className="mb-32">
        <h2 className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase mb-8">BLOCK_05 // WORKFLOW_&_ACTION_SURFACE</h2>
        <p className="text-3xl md:text-4xl font-sans text-[#FFFFFF] leading-tight mb-16 max-w-4xl">
          Analysts build custom dashboards with no-code drag-and-drop. Automated workflows trigger real-world actions — alerting a security advisor when a suspect's financial profile changes, or flagging border anomalies when multiple signals converge simultaneously.
        </p>
        <div className="flex flex-wrap gap-16">
          <div>
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-2">OUTPUT_A</span>
            <span className="font-sans text-xl font-bold text-[#FFFFFF] uppercase">AEGIS.NLP_QUERY</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-2">OUTPUT_B</span>
            <span className="font-sans text-xl font-bold text-[#FFFFFF] uppercase">OPERATOR.DASHBOARD</span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase block mb-2">STATUS</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-[#C45E1A] rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] text-[#FFFFFF] tracking-widest uppercase">SYNCHRONIZED</span>
            </div>
          </div>
        </div>
      </div>

      {/* HELIX DEMO VIDEO — CHANGE 2A */}
      <section className="mb-32">
        <div className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase mb-8 block">PLATFORM_DEMO // HELIX</div>
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] w-full aspect-video relative flex items-center justify-center overflow-hidden mb-6">
          {helixVideoSrc ? (
            <iframe src={helixVideoSrc} allow="autoplay" allowFullScreen className="absolute inset-0 w-full h-full border-0" />
          ) : (
            <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-[#C45E1A] transition-colors text-[#7A7A7A]">
              <span className="text-4xl">▶</span>
              <span className="font-mono text-sm tracking-widest drop-shadow-md">[ DEMO VIDEO — HELIX PLATFORM ]</span>
            </div>
          )}
        </div>
        <p className="font-mono text-[10px] text-[#7A7A7A] tracking-widest uppercase">
          Live demonstration of Helix's cross-agency intelligence graph and threat detection workflow.
        </p>
      </section>

      {/* Footer Area */}
      <div className="border-t-4 border-[#C45E1A] pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="font-mono text-xl md:text-2xl text-[#FFFFFF] tracking-widest uppercase mb-2">
            HELIX IS INDIA'S SOVEREIGN THREAT INTELLIGENCE LAYER.
          </h2>
          <h3 className="font-mono text-xl md:text-2xl text-[#FFFFFF] tracking-widest uppercase mb-8">
            STATUS: <span className="text-[#C45E1A]">ALL 15–20 MINISTRY NODES: ONLINE</span>.
          </h3>
        </div>
        <button className="bg-[#FFFFFF] text-[#000000] px-6 py-3 font-mono text-[10px] tracking-widest uppercase hover:bg-[#C45E1A] hover:text-[#FFFFFF] transition-colors flex items-center gap-4 shrink-0">
          ACCESS LOGS <span>→</span>
        </button>
      </div>
    </div>
  );
}

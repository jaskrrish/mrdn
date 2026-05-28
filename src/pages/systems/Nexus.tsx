import { motion } from 'motion/react';
import { useState } from 'react';

export default function Nexus() {
  const [nexusVideoSrc] = useState<string>("https://drive.google.com/file/d/1JbJ1l0a2qUVTyI5KI8EiJePen02jjyIW/preview");
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="flex-1">
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              SYSTEM_PROTOCOL: NEXUS_V1.0
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tight leading-none mb-2">
              NEXUS
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tight leading-none text-[#C45E1A]">
              INTELLIGENCE
            </h1>
            <div className="border-l-2 border-[#C45E1A] pl-6 mt-12">
              <p className="text-xl md:text-2xl text-[#7A7A7A] max-w-2xl leading-relaxed">
                Enterprise-grade operational intelligence platform. Real-time entity resolution and cross-department graph mapping for India's largest commercial and industrial organisations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
              LATENCY: 14MS
            </div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
              CLUSTER: OMEGA-09
            </div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
              STATUS: ACTIVE_NOMINAL
            </div>
          </div>
        </div>

        {/* 01 / ENTITY RESOLUTION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
              01 / ENTITY RESOLUTION
            </div>
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed mb-12">
              Nexus maps every operational entity — supplier, raw material, production line, customer order, logistics route, compliance filing — into a live knowledge graph. A change in one node propagates as an immediate signal across all connected nodes.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">DEPARTMENTS_CONNECTED</span>
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">ALL</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">GRAPH_REFRESH</span>
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">REAL-TIME</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">EXTERNAL_SIGNALS</span>
                <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">ACTIVE</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="border border-[#1A1A1A] bg-[#0A0A0A] flex flex-col">
              <div className="h-[400px] relative overflow-hidden p-6">
                <div className="font-mono text-[8px] text-[#333333] tracking-[0.1em] uppercase absolute top-6 left-6">
                  TACTICAL_GRID_OVERLAY_V4.2
                </div>
                
                {/* Visual Graph */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    <line x1="30%" y1="60%" x2="40%" y2="40%" stroke="#333333" strokeWidth="1" />
                    <line x1="40%" y1="40%" x2="60%" y2="50%" stroke="#C45E1A" strokeWidth="1" />
                    <line x1="60%" y1="50%" x2="75%" y2="45%" stroke="#333333" strokeWidth="1" />
                  </svg>
                  
                  <motion.div className="absolute left-[40%] top-[40%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#C45E1A]" animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}></motion.div>
                  
                  <div className="absolute left-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
                    <div className="w-4 h-4 bg-[#C45E1A] border border-[#FFFFFF] flex-shrink-0"></div>
                    <div className="font-mono text-[8px] text-[#FFFFFF] tracking-[0.1em] uppercase leading-relaxed">
                      CORE_HUB: NEXUS_GRAPH<br/>
                      GRAPH_INTEGRITY: 100%<br/>
                      ACTIVE_ENTITIES: 1,442
                    </div>
                  </div>
                  
                  <div className="absolute left-[75%] top-[45%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#333333]"></div>
                </div>
              </div>
              
              <div className="bg-[#000000] border-t border-[#1A1A1A] p-4 flex justify-between items-center">
                <div className="flex gap-6 font-mono text-[8px] text-[#FFFFFF] tracking-[0.1em] uppercase">
                  <span>SYSTEM_STATUS</span>
                  <span className="text-[#7A7A7A]">ENCRYPTION_LOGS</span>
                  <span className="text-[#7A7A7A]">LEGAL_PROVISIONS</span>
                </div>
                <div className="font-mono text-[8px] text-[#333333] tracking-[0.1em] uppercase">
                  © 2026 MRDN
                </div>
              </div>
            </div>
            <div className="font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase text-right mt-4">
              LAYER_01: COMMERCIAL_INTELLIGENCE_GRAPH
            </div>
          </div>
        </div>

        {/* GRAPH_STRUCTURE & RELATIONSHIP_VECTORS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] p-12 flex flex-col justify-between min-h-[320px]">
            <div>
              <h2 className="text-3xl font-bold text-[#FFFFFF] mb-6 uppercase tracking-tight">
                GRAPH_STRUCTURE
              </h2>
              <p className="text-[15px] text-[#7A7A7A] leading-relaxed max-w-md">
                The architecture utilises a formal ontology graph connecting every operational entity across departments, systems, and external signals in real time.
              </p>
            </div>
            
            <div className="flex gap-16 mt-12">
              <div className="flex flex-col gap-2">
                <div className="font-mono text-4xl text-[#C45E1A]">12.4M</div>
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">ACTIVE_NODES</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-mono text-4xl text-[#C45E1A]">0.03ms</div>
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">QUERY_RESPONSE</div>
              </div>
            </div>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-12 flex flex-col justify-center min-h-[320px]">
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-12">
              RELATIONSHIP_VECTORS
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">OPERATIONAL_BOND</span>
                  <span className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">STRENGTH: HIGH</span>
                </div>
                <div className="h-1 bg-[#1A1A1A] w-full">
                  <div className="h-full bg-[#C45E1A] w-full"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">DATA_SYNERGY</span>
                  <span className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">STRENGTH: NOMINAL</span>
                </div>
                <div className="h-1 bg-[#1A1A1A] w-full">
                  <div className="h-full bg-[#333333] w-[70%]"></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">CRYPTOGRAPHIC_LINK</span>
                  <span className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">STRENGTH: CRITICAL</span>
                </div>
                <div className="h-1 bg-[#1A1A1A] w-full">
                  <div className="h-full bg-[#C45E1A] w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEXT_LAYER_EXPANSION Section */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-bold text-[#FFFFFF] uppercase tracking-tight">
              CONTEXT_LAYER_EXPANSION
            </h2>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
              REF_ID: 992-KINETIC-Z
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border border-[#1A1A1A] bg-[#0A0A0A] h-[400px] relative flex items-center justify-center overflow-hidden">
              {/* Abstract background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                <motion.div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:1rem_1rem]" animate={{ backgroundPosition: ['0px 0px', '16px 16px'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}></motion.div>
              </div>
              
              {/* Corner brackets */}
              <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-[#C45E1A]"></div>
              <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#C45E1A]"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#C45E1A]"></div>
              <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#C45E1A]"></div>
              
              {/* Center label */}
              <div className="border border-[#C45E1A] bg-[#000000] px-6 py-3 font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase relative z-10">
                SCANNING_GLOBAL_NODES... [44%]
              </div>
            </div>
            
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex-1">
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
                  INTELLIGENCE READOUT
                </div>
                <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase leading-loose flex flex-col gap-2">
                  <div>&gt; ANALYZING_CLUSTER_A</div>
                  <div>&gt; NO_ANOMALIES_DETECTED</div>
                  <div>&gt; ENCRYPTION_LEVEL: 4096-BIT</div>
                  <div>&gt; GEOSPATIAL_SYNC: TRUE</div>
                </div>
              </div>
              
              <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-8 flex-1">
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
                  ACTIVE OPERATIONS
                </div>
                <div className="flex flex-col gap-8">
                  <div className="border-l-2 border-[#C45E1A] pl-4">
                    <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-1">PROJECT_01</div>
                    <div className="font-sans text-lg font-bold text-[#FFFFFF] uppercase tracking-tight">SUPPLY_CHAIN_MAPPING</div>
                  </div>
                  <div className="border-l-2 border-[#333333] pl-4">
                    <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase mb-1">PROJECT_02</div>
                    <div className="font-sans text-lg font-bold text-[#FFFFFF] uppercase tracking-tight">TARIFF_IMPACT_ANALYSIS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM_INTEGRATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight border-t-2 border-[#C45E1A] pt-6 mb-6">
              EXTERNAL_SIGNAL_ENRICHMENT
            </h2>
            <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
              Nexus is natively integrated with the BhAi News Platform. Macro events — import duty changes, US tariff announcements, commodity price movements — are automatically ingested and mapped to the affected graph nodes in real time.
            </p>
          </div>
          
          <div className="lg:col-span-2 bg-[#C45E1A] text-[#000000] p-8 sm:p-16 md:p-24 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">
              LIVE INTELLIGENCE. ZERO MANUAL CONFIGURATION.
            </h2>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase max-w-lg">
              "A SPIKE IN STEEL IMPORT DUTIES IS NOT A NEWS ITEM — IT IS A GRAPH EVENT THAT PROPAGATES ACROSS PROCUREMENT, PRODUCTION, AND CLIENT TIMELINES SIMULTANEOUSLY."
            </div>
          </div>
        </div>

        {/* NEXUS DEMO VIDEO — CHANGE 2B */}
        <section className="mb-32">
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase mb-8 block">PLATFORM_DEMO // NEXUS</div>
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] w-full aspect-video relative flex items-center justify-center overflow-hidden mb-6">
            {nexusVideoSrc ? (
              <iframe src={nexusVideoSrc} allow="autoplay" allowFullScreen className="absolute inset-0 w-full h-full border-0" />
            ) : (
              <div className="flex flex-col items-center gap-4 cursor-pointer hover:text-[#C45E1A] transition-colors text-[#7A7A7A]">
                <span className="text-4xl">▶</span>
                <span className="font-mono text-sm tracking-widest drop-shadow-md">[ DEMO VIDEO — NEXUS PLATFORM ]</span>
              </div>
            )}
          </div>
          <p className="font-mono text-[10px] text-[#7A7A7A] tracking-widest uppercase">
            Live demonstration of Nexus's enterprise intelligence graph, external signal enrichment, and automated workflow engine.
          </p>
        </section>

      </div>
    </div>
  );
}


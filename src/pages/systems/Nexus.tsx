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

        </div>

        {/* 01 / CONNECTED OPERATIONAL INTELLIGENCE Section */}
        <div className="max-w-3xl">
          <div className="font-mono text-sm text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            01 / CONNECTED OPERATIONAL INTELLIGENCE
          </div>
          <p className="text-lg text-[#7A7A7A] leading-relaxed mb-12">
            Nexus eliminates the blind spots in enterprise operations by unifying your entire business into a single, living data model. Instead of letting critical data sit trapped inside isolated department silos — procurement, logistics, production, and finance — Nexus continuously maps the relationships between every supplier, raw material, assembly line, and customer order. When something changes in one corner of your operation, the ripple effects are automatically calculated and visible across your entire organisation, giving you a crystal-clear view of your business dynamics.
          </p>

          <div className="flex flex-col gap-4 border-t border-[#1A1A1A] pt-6">
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">DEPARTMENTS_CONNECTED</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase">ALL</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">GRAPH_REFRESH</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase">REAL-TIME</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#1A1A1A]">
              <span className="font-mono text-sm text-[#7A7A7A] tracking-[0.1em] uppercase">EXTERNAL_SIGNALS</span>
              <span className="font-mono text-sm text-[#FFFFFF] tracking-[0.1em] uppercase">ACTIVE</span>
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
              PROACTIVE_MACRO_EVENT_RESPONSE
            </h2>
            <p className="text-[15px] text-[#7A7A7A] leading-relaxed">
              Nexus features an intelligent, automated signal engine that constantly monitors real-time global events — shifting import duties, geopolitical tariff updates, and sudden commodity price spikes. Because these external signals are directly linked to your operational data graph, disruptions are instantly translated into actionable internal updates, showing you exactly which production lines, client timelines, and profit margins will be impacted before it happens.
            </p>
          </div>

          <div className="lg:col-span-2 bg-[#C45E1A] text-[#000000] p-8 sm:p-16 md:p-24 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 uppercase">
              DYNAMIC, CONFIGURATION-FREE AGILITY.
            </h2>
            <div className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase max-w-lg">
              "NEXUS AUTOMATICALLY RESOLVES, UPDATES, AND SCALES YOUR OPERATIONAL GRAPH WITH ZERO MANUAL UPKEEP — MOVING YOUR ORGANISATION FROM REACTIVE FIREFIGHTING TO PREDICTIVE, HIGHLY AGILE DECISION-MAKING."
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


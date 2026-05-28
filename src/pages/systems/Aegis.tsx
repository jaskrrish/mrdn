import { motion } from 'motion/react';

export default function Aegis() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans selection:bg-[#C45E1A] selection:text-white pt-[56px]">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 md:gap-32">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
              SYSTEM IDENTIFICATION: AEGIS-01
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Aegis.
            </h1>
            <p className="text-[#7A7A7A] text-sm md:text-base max-w-md leading-relaxed">
              Multilingual AI and language intelligence layer. Powered by BhAi's proprietary large language models — trained on Indian data, in Indian languages, for Indian operational contexts.
            </p>
          </div>

          <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                LIVE_MODEL_TELEMETRY
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C45E1A]"></div>
                <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                  INFERENCE_ACTIVE
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">LANGUAGES_SUPPORTED</span>
                <span className="font-mono text-[8px] text-[#FFFFFF] tracking-[0.1em] uppercase">22 (all scheduled Indian languages)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">MODEL_REFRESH</span>
                <span className="font-mono text-[8px] text-[#FFFFFF] tracking-[0.1em] uppercase">CONTINUOUS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">QUERY_LATENCY</span>
                <span className="font-mono text-[8px] text-[#FFFFFF] tracking-[0.1em] uppercase">&lt;100MS</span>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              WHAT AEGIS DOES
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-2xl">
              Aegis is the natural-language interface that sits on top of the entire MRDN stack. Any operator — a government analyst in Tamil Nadu, a plant supervisor in Rajasthan, a logistics manager in Punjab — can query their intelligence graph in their native language and receive structured, contextualised responses. No SQL. No technical training required.
            </p>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] h-48 relative overflow-hidden flex flex-col justify-end p-4">
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"></div>
            
            {/* Line chart */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <polyline 
                points="0,50 20,50 40,48 50,45 60,55 70,65 85,40 100,40" 
                fill="none" 
                stroke="#C45E1A" 
                strokeWidth="1" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            
            <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase relative z-10">
              MULTILINGUAL_INFERENCE_LAYER // BhAi_LLM_v1.0
            </div>
          </div>
        </div>

        {/* SIGNAL PROCESSING LAYERS Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            AEGIS CAPABILITY LAYERS
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[60%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L1: MULTILINGUAL_QUERY_INGEST
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[45%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L2: INTENT_CLASSIFICATION
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 w-[85%]">
              <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                © 2026 MRDN
              </div>
            </div>
            
            <div className="bg-[#C45E1A]/10 border border-[#C45E1A] p-3 w-[85%] relative">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                L3: GRAPH_RETRIEVAL // HELIX + NEXUS
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#C45E1A]"></div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[70%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L4: CONTEXTUAL_REASONING
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-full">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L5: RESPONSE_SYNTHESIS
              </div>
            </div>
            
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-3 w-[55%]">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                L6: OUTPUT — NATIVE LANGUAGE DELIVERY
              </div>
            </div>
          </div>
        </div>

        {/* DEVIATION PROTOCOL Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              DEVIATION PROTOCOL
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-2xl">
              Aegis isolates deviations by establishing a high-fidelity baseline of normal operations. When a signal bifurcates from the projected trajectory, the system tags the exact moment of variance for tactical response.
            </p>
          </div>
          
          <div className="border border-[#1A1A1A] bg-[#0A0A0A] h-48 relative overflow-hidden flex items-center justify-center">
            <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Baseline (white) */}
              <path 
                d="M 5,50 Q 15,40 25,50 T 45,50" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="1.5" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Projected trajectory (dotted white) */}
              <path 
                d="M 45,50 Q 55,60 65,50 T 85,50 T 95,50" 
                fill="none" 
                stroke="#7A7A7A" 
                strokeWidth="1" 
                strokeDasharray="2,2"
                vectorEffect="non-scaling-stroke"
              />
              {/* Deviation (orange) */}
              <path 
                d="M 45,50 L 48,25 L 52,65 L 55,50" 
                fill="none" 
                stroke="#C45E1A" 
                strokeWidth="1.5" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Detection Point */}
              <motion.circle cx="48" cy="25" r="1.5" fill="#C45E1A" animate={{ opacity: [1, 0.2, 1], r: [1.5, 3, 1.5] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
            </svg>
            
            <div className="absolute top-[20%] left-[50%] font-mono text-[8px] text-[#C45E1A] tracking-[0.1em] uppercase">
              DETECTION_POINT_ALPHA
            </div>
          </div>
        </div>

        {/* INTELLIGENCE PRIORITIZATION Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            INTELLIGENCE PRIORITIZATION
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                01 / SIGNAL WEIGHTING
              </div>
              <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
                Dynamic assignment of importance based on sensor source reliability and historical accuracy metrics.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                02 / EVENT CORRELATION
              </div>
              <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
                Mapping disparate data points into a unified narrative to identify complex multi-vector system threats.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                03 / RISK CLASSIFICATION
              </div>
              <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
                Automated tiering of anomalies from baseline noise to immediate operational shutdown requirements.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                04 / RESPONSE PRIORITIZATION
              </div>
              <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
                Orchestration of remedial actions based on the kinetic impact and recovery timeframe availability.
              </p>
            </div>
          </div>
        </div>

        {/* MONITOR_INTERROGATOR_V2.0 Section */}
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-6 relative overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
          
          <div className="relative z-10 flex flex-col gap-12">
            <div className="flex justify-between items-center">
              <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">
                MONITOR_INTERROGATOR_V2.0
              </div>
              <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">
                SYSTEM_STATUS: ACTIVE_SCAN
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              {/* CH_01 */}
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase text-right">
                  CH_01_INPUT
                </div>
                <div className="h-4 bg-[#1A1A1A] w-[40%] relative">
                  <div className="absolute left-0 top-0 bottom-0 bg-[#333333] w-[95%]"></div>
                  <div className="absolute left-[95%] top-0 bottom-0 bg-[#C45E1A] w-1"></div>
                </div>
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase text-right leading-relaxed mt-1">
                  LATENCY: 0.002ms<br/>
                  JITTER: 0.0001
                </div>
              </div>
              
              {/* CH_02 */}
              <div className="flex flex-col gap-2 relative h-16">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase text-right absolute right-0 top-0">
                  CH_02_VARIANCE
                </div>
                <svg className="absolute inset-0 w-full h-full mt-4" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <polyline 
                    points="0,50 10,50 15,40 20,60 30,50 70,50" 
                    fill="none" 
                    stroke="#333333" 
                    strokeWidth="1" 
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="15" cy="40" r="1.5" fill="#C45E1A" />
                </svg>
              </div>
              
              {/* CH_03 */}
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase text-right">
                  CH_03_STABILITY
                </div>
                <div className="h-4 bg-[#333333] w-[60%]"></div>
              </div>
              
              {/* CH_04 */}
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[8px] text-[#7A7A7A] tracking-[0.1em] uppercase text-right">
                  CH_04_CRITICAL
                </div>
                <div className="h-4 bg-[#C45E1A] w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEXTUAL EVALUATION Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-6">
              PROPRIETARY DATA MOAT
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#FFFFFF] max-w-2xl">
              Aegis is trained on a continuously growing corpus of uniquely Indian data — from Helix's government graph, Nexus's enterprise graph, BhAi platform signals, Dexter's analytical outputs, and the BhAi News Platform. Every additional client and every additional data stream makes Aegis smarter. No foreign model trained on non-Indian data can replicate this.
            </p>
          </div>
          
          <div className="h-48 relative flex items-center justify-center">
            <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="60" y1="20" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="35" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="50" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="65" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              <line x1="60" y1="80" x2="75" y2="50" stroke="#333333" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute left-[75%] top-[50%] -translate-y-1/2 flex items-center gap-3">
              <div className="w-3 h-3 bg-[#C45E1A]"></div>
              <div className="font-mono text-[10px] text-[#FFFFFF] tracking-[0.1em] uppercase">
                INDIA_TRAINING_CORPUS
              </div>
            </div>
          </div>
        </div>

        {/* OPERATIONAL CHAIN Section */}
        <div>
          <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.15em] uppercase mb-8">
            OPERATIONAL CHAIN
          </div>
          
          <div className="flex items-center justify-between w-full">
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">HELIX</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">NEXUS</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#7A7A7A] tracking-[0.1em] uppercase">ORION</div>
            <div className="h-[1px] bg-[#1A1A1A] flex-1 mx-4"></div>
            <div className="font-mono text-[10px] text-[#C45E1A] tracking-[0.1em] uppercase">AEGIS</div>
          </div>
        </div>

        {/* Footer Area */}
        <div className="border border-[#1A1A1A] bg-[#0A0A0A] p-16 flex flex-col items-center justify-center text-center mt-8">
          <h2 className="text-3xl md:text-4xl font-medium text-[#FFFFFF] mb-8">
            Aegis makes MRDN the only intelligence platform operable by any Indian — in any language.
          </h2>
          <button className="bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors">
            REQUEST ACCESS
          </button>
          <div className="font-mono text-[9px] text-[#7A7A7A] tracking-[0.1em] uppercase mt-6">
            POWERED BY BhAi LLM // SOVEREIGN INFERENCE
          </div>
        </div>

      </div>
    </div>
  );
}


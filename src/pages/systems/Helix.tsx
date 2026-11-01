import { Link } from 'react-router-dom';

export default function Helix() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[80px] sm:pt-[120px] pb-32 min-h-screen">
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#C45E1A]"></div>
          <span className="font-mono text-[10px] text-[#C45E1A] tracking-widest uppercase">DEFENCE TRACK // HELIX</span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans font-bold text-[#FFFFFF] tracking-tighter mb-8 leading-none">HELIX</h1>
        <div className="flex">
          <div className="w-1 bg-[#C45E1A] mr-6"></div>
          <p className="font-mono text-lg md:text-xl text-[#7A7A7A] uppercase tracking-widest max-w-2xl leading-relaxed">
            Closed-door only
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <p className="text-2xl font-sans text-[#FFFFFF] leading-snug">
          Defence work (Helix) is discussed in closed-door meetings only. Nothing about it is shown on this site.
        </p>
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 flex flex-col gap-6">
          <span className="font-mono text-[9px] text-[#7A7A7A] tracking-widest uppercase">REQUEST A MEETING</span>
          <p className="text-[#7A7A7A] text-sm leading-relaxed">
            Write to us from your organisation&apos;s address and we&apos;ll arrange a closed-door meeting.
          </p>
          <a
            href="mailto:info@zaio.in?subject=Helix%20closed-door%20meeting"
            className="self-start bg-[#C45E1A] text-[#000000] font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-[#A34A10] transition-colors"
          >
            info@zaio.in
          </a>
          <Link to="/systems" className="font-mono text-[10px] text-[#7A7A7A] tracking-widest uppercase hover:text-[#FFFFFF] transition-colors">
            &larr; Back to systems
          </Link>
        </div>
      </div>
    </div>
  );
}

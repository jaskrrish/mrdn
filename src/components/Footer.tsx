export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-[48px] border-t border-[#1A1A1A] bg-[#000000] flex justify-between items-center px-6 z-50">
      <div className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#7A7A7A]">© 2026 MERIDIAN SYSTEMS</div>
      <div className="flex gap-4">
        <span className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#7A7A7A] cursor-default hover:text-[#C45E1A]">CLASSIFICATION: INTERNAL</span>
      </div>
      <div className="font-mono tracking-[0.05em] uppercase text-[10px] text-[#C45E1A] animate-pulse">SYSTEM_ONLINE</div>
    </footer>
  );
}

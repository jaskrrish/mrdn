type Props = {
  src: string;
  alt: string;
  label?: string;
};

/** A real Mrdn Core screenshot, framed in the site's HUD style. Always carries
 *  the synthetic-data caption: every Mrdn screen shown publicly is invented data. */
export default function DemoShot({ src, alt, label = 'MRDN CORE // DEMO BUILD' }: Props) {
  return (
    <figure className="w-full">
      <div className="relative border border-[#1A1A1A] bg-[#0A0A0A] p-2 sm:p-3">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff5722]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff5722]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff5722]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff5722]"></div>
        <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      </div>
      <figcaption className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[10px] tracking-[0.12em] uppercase">
        <span className="text-[#ff5722]">{label}</span>
        <span className="text-[#7A7A7A]">Synthetic data · fictional company</span>
      </figcaption>
    </figure>
  );
}

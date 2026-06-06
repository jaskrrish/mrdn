import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "nexus",     label: "NEXUS_GRAPH",      sublabel: "CORE HUB",          x: 50,  y: 50,  size: 14, accent: true  },
  { id: "erp",       label: "ERP_SYSTEM",        sublabel: "SAP / TALLY",       x: 22,  y: 22,  size: 9,  accent: false },
  { id: "plant1",    label: "PLANT_01",          sublabel: "BATCH OPERATIONS",  x: 76,  y: 18,  size: 9,  accent: false },
  { id: "plant2",    label: "PLANT_02",          sublabel: "KILN & PRODUCTION", x: 82,  y: 55,  size: 9,  accent: false },
  { id: "transport", label: "FLEET_NETWORK",     sublabel: "GPS + TELEMATICS",  x: 65,  y: 82,  size: 9,  accent: false },
  { id: "billing",   label: "BILLING_SYSTEM",    sublabel: "INVOICES & AR",     x: 30,  y: 80,  size: 9,  accent: false },
  { id: "signals",   label: "EXTERNAL_SIGNALS",  sublabel: "NEWS / MARKET",     x: 14,  y: 52,  size: 9,  accent: false },
  { id: "supplier",  label: "SUPPLIER_NETWORK",  sublabel: "VENDORS & LOTS",    x: 20,  y: 68,  size: 7,  accent: false },
  { id: "iot",       label: "IOT_SENSORS",       sublabel: "SCADA / PLANT",     x: 72,  y: 36,  size: 7,  accent: false },
  { id: "orders",    label: "ORDER_PIPELINE",    sublabel: "SALES & DISPATCH",  x: 44,  y: 14,  size: 7,  accent: false },
];

const EDGES = [
  { from: "nexus", to: "erp" },
  { from: "nexus", to: "plant1" },
  { from: "nexus", to: "plant2" },
  { from: "nexus", to: "transport" },
  { from: "nexus", to: "billing" },
  { from: "nexus", to: "signals" },
  { from: "nexus", to: "supplier" },
  { from: "nexus", to: "iot" },
  { from: "nexus", to: "orders" },
  { from: "erp",      to: "billing" },
  { from: "erp",      to: "orders" },
  { from: "plant1",   to: "iot" },
  { from: "plant2",   to: "iot" },
  { from: "transport",to: "billing" },
  { from: "signals",  to: "supplier" },
  { from: "orders",   to: "plant1" },
];

interface Particle {
  edgeIndex: number;
  progress: number;
  speed: number;
  size: number;
}

export default function NexusConstellationGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [dims, setDims] = useState({ w: 800, h: 500 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spawn = setInterval(() => {
      if (particlesRef.current.length < 24) {
        particlesRef.current.push({
          edgeIndex: Math.floor(Math.random() * EDGES.length),
          progress:  0,
          speed:     0.004 + Math.random() * 0.006,
          size:      1.5 + Math.random() * 1.5,
        });
      }
    }, 180);
    return () => clearInterval(spawn);
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      const el = entries[0];
      setDims({ w: el.contentRect.width, h: el.contentRect.height });
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = dims;
    canvas.width  = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width  = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let tick = 0;

    const toXY = (node: typeof NODES[number]) => ({
      x: (node.x / 100) * w,
      y: (node.y / 100) * h,
    });

    const draw = () => {
      tick++;
      ctx.clearRect(0, 0, w, h);

      EDGES.forEach(edge => {
        const src  = NODES.find(n => n.id === edge.from)!;
        const dest = NODES.find(n => n.id === edge.to)!;
        const { x: x1, y: y1 } = toXY(src);
        const { x: x2, y: y2 } = toXY(dest);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth   = 0.6;
        ctx.stroke();
      });

      particlesRef.current = particlesRef.current.filter(p => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;
        const edge = EDGES[p.edgeIndex];
        const src  = NODES.find(n => n.id === edge.from)!;
        const dest = NODES.find(n => n.id === edge.to)!;
        const { x: x1, y: y1 } = toXY(src);
        const { x: x2, y: y2 } = toXY(dest);
        const px = x1 + (x2 - x1) * p.progress;
        const py = y1 + (y2 - y1) * p.progress;
        const grd = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
        grd.addColorStop(0,   "rgba(255,100,30,0.95)");
        grd.addColorStop(0.4, "rgba(255,80,20,0.4)");
        grd.addColorStop(1,   "rgba(255,60,10,0)");
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,180,100,1)";
        ctx.fill();
        return true;
      });

      NODES.forEach(node => {
        const { x, y } = toXY(node);
        const pulse = Math.sin(tick * 0.04 + node.x * 0.1) * 0.15 + 0.85;
        const r = node.size * pulse;

        if (node.accent) {
          const half = r * 1.2;
          const grd = ctx.createRadialGradient(x, y, 0, x, y, half * 4);
          grd.addColorStop(0,   "rgba(255,90,20,0.3)");
          grd.addColorStop(0.5, "rgba(255,60,10,0.1)");
          grd.addColorStop(1,   "rgba(0,0,0,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(x, y, half * 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle   = "rgba(200,70,10,1)";
          ctx.fillRect(x - half, y - half, half * 2, half * 2);
          ctx.strokeStyle = "rgba(255,140,60,0.9)";
          ctx.lineWidth   = 1.5;
          ctx.strokeRect(x - half, y - half, half * 2, half * 2);
        } else {
          const half  = r * 0.85;
          const alpha = 0.55 + Math.sin(tick * 0.03 + node.y * 0.08) * 0.1;
          const grd = ctx.createRadialGradient(x, y, 0, x, y, half * 3.5);
          grd.addColorStop(0,   `rgba(255,90,30,${alpha * 0.2})`);
          grd.addColorStop(1,   "rgba(0,0,0,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(x, y, half * 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle   = `rgba(60,30,15,${alpha})`;
          ctx.strokeStyle = `rgba(200,80,20,${alpha * 0.85})`;
          ctx.lineWidth   = 1;
          ctx.fillRect(x - half, y - half, half * 2, half * 2);
          ctx.strokeRect(x - half, y - half, half * 2, half * 2);
        }

        const labelY = y + node.size * 1.8 + 8;
        ctx.font      = `700 8px 'Courier New', monospace`;
        ctx.textAlign = "center";
        ctx.fillStyle = node.accent ? "rgba(255,130,60,0.95)" : "rgba(180,120,70,0.75)";
        ctx.fillText(node.label, x, labelY);
        ctx.font      = `400 6.5px 'Courier New', monospace`;
        ctx.fillStyle = "rgba(120,80,40,0.55)";
        ctx.fillText(node.sublabel, x, labelY + 9);
      });

      ctx.font      = "500 8px 'Courier New', monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(100,60,20,0.4)";
      ctx.fillText("TACTICAL_GRID_OVERLAY_V1.0", 10, 16);

      ctx.textAlign = "right";
      ctx.font      = "500 7.5px 'Courier New', monospace";
      ctx.fillStyle = "rgba(200,90,30,0.55)";
      ctx.fillText(`CORE_HUB: NEXUS_GRAPH`, w - 12, h - 38);
      ctx.fillStyle = "rgba(160,80,30,0.45)";
      ctx.fillText(`GRAPH_INTEGRITY: 100%`, w - 12, h - 26);
      ctx.fillText(`ACTIVE_ENTITIES: ${(1442 + Math.floor(Math.sin(tick * 0.007) * 3)).toLocaleString()}`, w - 12, h - 14);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [dims]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", minHeight: "380px", position: "relative", background: "transparent" }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}

import { useEffect, useRef } from "react";

/* ── Star color palette (weighted random) ── */
function pickStarColor(): [number, number, number] {
  const r = Math.random();
  if (r < 0.70) return [220, 228, 240]; // cool white-blue
  if (r < 0.88) return [91, 184, 245];  // Aplora blue
  if (r < 0.96) return [255, 244, 230]; // warm white
  return [250, 195, 100];               // muted gold
}

/* ── Types ── */
interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseAlpha: number;
  alpha: number;
  tier: "dim" | "medium" | "bright";
  color: [number, number, number];
  twinkleSpeed: number;
  twinklePhase: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  active: boolean;
}

/* ── Star factory ── */
const TIER_DEFS = {
  dim:    { rMin: 0.3, rMax: 0.8, aMin: 0.15, aMax: 0.35, vel: 0.04 },
  medium: { rMin: 0.9, rMax: 1.6, aMin: 0.4,  aMax: 0.65, vel: 0.06 },
  bright: { rMin: 1.8, rMax: 2.8, aMin: 0.7,  aMax: 0.9,  vel: 0.02 },
} as const;

function createStar(w: number, h: number, tier: Star["tier"]): Star {
  const d = TIER_DEFS[tier];
  const baseAlpha = d.aMin + Math.random() * (d.aMax - d.aMin);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    r: d.rMin + Math.random() * (d.rMax - d.rMin),
    baseAlpha,
    alpha: baseAlpha,
    vx: (Math.random() - 0.5) * d.vel,
    vy: (Math.random() - 0.5) * d.vel,
    tier,
    color: pickStarColor(),
    twinkleSpeed: 0.003 + Math.random() * 0.017,
    twinklePhase: Math.random() * Math.PI * 2,
  };
}

function initStars(w: number, h: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < 60; i++) stars.push(createStar(w, h, "dim"));
  for (let i = 0; i < 24; i++) stars.push(createStar(w, h, "medium"));
  for (let i = 0; i < 6; i++)  stars.push(createStar(w, h, "bright"));
  return stars;
}

/* ── Shooting star ── */
function spawnShootingStar(w: number): ShootingStar {
  return {
    x: Math.random() * w * 0.6 + w * 0.2,
    y: -10,
    vx: -(3 + Math.random() * 2),
    vy: 4 + Math.random() * 3,
    life: 0,
    maxLife: 400 + Math.random() * 300,
    active: true,
  };
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const shootingRef = useRef<ShootingStar | null>(null);
  const nextShootRef = useRef(Date.now() + 5000 + Math.random() * 10000);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      starsRef.current = initStars(canvas!.width, canvas!.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      const mouse = mouseRef.current;
      const connectable: Star[] = [];

      /* ── Update & draw stars ── */
      for (const s of stars) {
        // Drift
        s.x += s.vx;
        s.y += s.vy;

        // Wrap edges
        if (s.x < -5) s.x = w + 5;
        if (s.x > w + 5) s.x = -5;
        if (s.y < -5) s.y = h + 5;
        if (s.y > h + 5) s.y = -5;

        // Twinkle
        s.twinklePhase += s.twinkleSpeed;
        const twinkle = Math.sin(s.twinklePhase) * 0.3;
        s.alpha = Math.max(0.05, Math.min(1, s.baseAlpha + s.baseAlpha * twinkle));

        // Mouse gravitational pull + brightness boost
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 1) {
          const force = 0.02 * (1 - dist / 200);
          s.vx += (dx / dist) * force;
          s.vy += (dy / dist) * force;
          s.vx *= 0.98;
          s.vy *= 0.98;
          s.alpha = Math.min(1, s.alpha + 0.15 * (1 - dist / 200));
        }

        // Draw star
        const [cr, cg, cb] = s.color;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${cr},${cg},${cb},${s.alpha})`;
        ctx!.fill();

        // Bright star glow ring
        if (s.tier === "bright") {
          ctx!.beginPath();
          ctx!.arc(s.x, s.y, 8, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${cr},${cg},${cb},0.08)`;
          ctx!.fill();
        }

        if (s.tier === "medium" || s.tier === "bright") {
          connectable.push(s);
        }
      }

      /* ── Constellation lines ── */
      ctx!.strokeStyle = "rgba(180,200,220,0.08)";
      ctx!.lineWidth = 0.4;
      for (const s of connectable) {
        const neighbors: { star: Star; dist: number }[] = [];
        for (const other of connectable) {
          if (other === s) continue;
          const ddx = s.x - other.x;
          const ddy = s.y - other.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < 180) neighbors.push({ star: other, dist: d });
        }
        neighbors.sort((a, b) => a.dist - b.dist);
        for (let i = 0; i < Math.min(2, neighbors.length); i++) {
          const n = neighbors[i].star;
          ctx!.beginPath();
          ctx!.moveTo(s.x, s.y);
          ctx!.lineTo(n.x, n.y);
          ctx!.stroke();
        }
      }

      /* ── Shooting star ── */
      const nowMs = Date.now();
      if (!shootingRef.current && nowMs > nextShootRef.current) {
        shootingRef.current = spawnShootingStar(w);
      }
      const ss = shootingRef.current;
      if (ss && ss.active) {
        ss.life += 16;
        ss.x += ss.vx;
        ss.y += ss.vy;
        const progress = ss.life / ss.maxLife;
        if (progress >= 1 || ss.x < -50 || ss.y > h + 50) {
          ss.active = false;
          shootingRef.current = null;
          nextShootRef.current = nowMs + 8000 + Math.random() * 7000;
        } else {
          const tailLen = 40 + progress * 30;
          const headAlpha = 1 - progress * 0.6;
          const grad = ctx!.createLinearGradient(
            ss.x, ss.y,
            ss.x - ss.vx * tailLen * 0.3, ss.y - ss.vy * tailLen * 0.3
          );
          grad.addColorStop(0, `rgba(255,255,255,${headAlpha})`);
          grad.addColorStop(1, "rgba(250,195,100,0)");
          ctx!.beginPath();
          ctx!.moveTo(ss.x, ss.y);
          ctx!.lineTo(ss.x - ss.vx * tailLen * 0.3, ss.y - ss.vy * tailLen * 0.3);
          ctx!.strokeStyle = grad;
          ctx!.lineWidth = 1.5;
          ctx!.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -2 }}
    />
  );
}

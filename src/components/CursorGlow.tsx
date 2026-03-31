import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -9999, y: -9999 });
  const targetRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      targetRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleLeave);

    let raf: number;
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12;

      if (glowRef.current) {
        const x = posRef.current.x;
        const y = posRef.current.y;
        glowRef.current.style.background = [
          `radial-gradient(600px circle at ${x}px ${y}px, rgba(91,184,245,0.025), transparent 70%)`,
          `radial-gradient(300px circle at ${x}px ${y}px, rgba(140,160,220,0.03), transparent 70%)`,
          `radial-gradient(150px circle at ${x}px ${y}px, rgba(250,195,100,0.015), transparent 70%)`,
        ].join(",");
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const controls = animate(0, target, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 48500, suffix: "+", label: "Links Analyzed" },
  { value: 12300, suffix: "+", label: "Threats Detected" },
  { value: 95, suffix: "%", label: "Awareness Improved" },
];

const StatsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-foreground">
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

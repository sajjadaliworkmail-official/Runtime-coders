import { motion } from "framer-motion";
import { Zap, MessageSquareText, Palette, UserCheck } from "lucide-react";

const features = [
  { icon: Zap, title: "Real-time Link Analysis", desc: "Instant threat detection with sub-second scanning powered by pattern matching and domain intelligence." },
  { icon: MessageSquareText, title: "Clear Risk Explanation", desc: "Every scan result comes with a plain-language reason, not cryptic codes." },
  { icon: Palette, title: "Color-coded Results", desc: "Green, yellow, and red indicators make risk levels obvious at a glance." },
  { icon: UserCheck, title: "Beginner-friendly UI", desc: "Designed for everyday users — no cybersecurity expertise required." },
];

const FeaturesGrid = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        Key Features
      </motion.h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-border bg-card p-6 shadow-elevated transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent p-3">
              <f.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;

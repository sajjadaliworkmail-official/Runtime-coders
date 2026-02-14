import { motion } from "framer-motion";
import { Link, Search, FileText } from "lucide-react";

const steps = [
  { icon: Link, title: "Enter a Link or Message", desc: "Paste any URL or suspicious message into PhishEye's input field." },
  { icon: Search, title: "System Analyzes Patterns", desc: "Our engine checks domain reputation, URL structure, and known threat databases." },
  { icon: FileText, title: "Risk Explanation Shown", desc: "Get a clear, color-coded result with a human-readable reason — not just a score." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        How PhishEye Works
      </motion.h2>
      <div className="mt-14 grid md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 inline-flex items-center justify-center rounded-full bg-accent p-4">
              <s.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

import { motion } from "framer-motion";
import { Link2Off, HelpCircle, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: Link2Off,
    title: "Deceptive Links Everywhere",
    desc: "Millions of phishing URLs circulate daily. One wrong click can compromise accounts, passwords, and personal data.",
  },
  {
    icon: HelpCircle,
    title: "No Clear Explanation",
    desc: "Existing tools flag links but never tell users why something is dangerous — leaving them vulnerable to the same trick again.",
  },
  {
    icon: ShieldOff,
    title: "Beginners Are Unprotected",
    desc: "Non-technical users lack the awareness or tools to evaluate link safety, making them the easiest targets for attackers.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        The Problem We're Solving
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 grid md:grid-cols-3 gap-8"
      >
        {problems.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="rounded-xl border border-border bg-card p-7 shadow-elevated"
          >
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent p-3">
              <p.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;

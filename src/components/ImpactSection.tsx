import { motion } from "framer-motion";
import { GraduationCap, Users, Globe, School } from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "Students", desc: "Learn to identify phishing in a safe, guided environment." },
  { icon: Users, title: "Beginners", desc: "Get plain-language explanations without jargon." },
  { icon: Globe, title: "General Internet Users", desc: "Stay protected while browsing, shopping, and banking online." },
  { icon: School, title: "Educational Institutions", desc: "Integrate PhishEye into digital literacy programs." },
];

const ImpactSection = () => (
  <section id="about" className="py-24 bg-surface">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        Who Benefits from PhishEye?
      </motion.h2>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 text-center shadow-elevated"
          >
            <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-full bg-accent p-3">
              <a.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;

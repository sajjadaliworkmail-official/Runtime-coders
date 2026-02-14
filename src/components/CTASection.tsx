import { motion } from "framer-motion";
import { Search } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Check Before You Click</h2>
        <p className="mt-4 text-muted-foreground">Paste any suspicious link below and let PhishEye analyze it for you.</p>
        <div className="mt-8 flex gap-3">
          <input
            type="text"
            placeholder="https://suspicious-link.example.com"
            className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button className="inline-flex items-center gap-2 rounded-lg bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            <Search className="h-4 w-4" />
            Scan
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

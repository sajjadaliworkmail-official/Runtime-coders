import { motion } from "framer-motion";

const HackathonSection = () => (
  <section className="py-20 bg-surface">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Hackathon Project</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Built for SIBATHON 26</h2>
        <div className="mt-6 space-y-1 text-sm text-muted-foreground leading-relaxed">
          <p><span className="font-semibold text-foreground">Team:</span> Runtime Coders</p>
          <p><span className="font-semibold text-foreground">Theme:</span> Cybersecurity</p>
          <p className="mt-4 max-w-md mx-auto">
            PhishEye was designed and developed in a hackathon setting to demonstrate how beginner-friendly cybersecurity tools can make the internet safer for everyone.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HackathonSection;

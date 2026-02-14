import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="relative pt-32 pb-20 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            Detect Phishing{" "}
            <span className="text-gradient-hero">Before It Steals</span>{" "}
            Your Data
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            PhishEye scans links in real time, identifies phishing patterns, and explains risks in plain language — so you never fall for a fake URL again.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-hero-gradient px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Try Demo
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              View Dashboard
            </a>
          </div>
        </motion.div>

        {/* Right — mock dashboard card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-2xl border border-border bg-card p-6 shadow-elevated">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-semibold text-foreground">Recent Scans</span>
              <span className="text-xs text-muted-foreground">Just now</span>
            </div>
            <div className="space-y-3">
              {[
                { url: "paypal-secure.xyz/login", status: "Risky", icon: AlertTriangle, color: "risky" },
                { url: "drive.google.com/share/a8x", status: "Safe", icon: CheckCircle, color: "safe" },
                { url: "amaz0n-deals.net/offer", status: "Suspicious", icon: Shield, color: "suspicious" },
              ].map((item) => (
                <div
                  key={item.url}
                  className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3"
                >
                  <span className="text-sm font-mono text-foreground truncate max-w-[200px]">{item.url}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-${item.color}/10 text-${item.color}`}
                  >
                    <item.icon className="h-3 w-3" />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

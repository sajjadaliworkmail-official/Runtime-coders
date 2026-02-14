import { motion } from "framer-motion";

type Row = { url: string; risk: "Safe" | "Suspicious" | "Risky"; reason: string; time: string };

const data: Row[] = [
  { url: "paypal-secure.xyz/login", risk: "Risky", reason: "Known phishing domain", time: "2 min ago" },
  { url: "drive.google.com/share/a8x", risk: "Safe", reason: "Verified Google domain", time: "5 min ago" },
  { url: "amaz0n-deals.net/offer", risk: "Suspicious", reason: "Typosquatting detected", time: "8 min ago" },
  { url: "microsoft365-reset.com", risk: "Risky", reason: "Credential harvesting pattern", time: "12 min ago" },
  { url: "github.com/repo/issues/42", risk: "Safe", reason: "Verified GitHub domain", time: "15 min ago" },
];

const badgeClass: Record<string, string> = {
  Safe: "bg-safe/10 text-safe",
  Suspicious: "bg-suspicious/10 text-suspicious",
  Risky: "bg-risky/10 text-risky",
};

const DashboardPreview = () => (
  <section id="dashboard" className="py-24">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-foreground"
      >
        Scan Results Dashboard
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-12 rounded-xl border border-border bg-card shadow-elevated overflow-x-auto"
      >
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 font-semibold text-muted-foreground">URL</th>
              <th className="px-6 py-4 font-semibold text-muted-foreground">Risk Level</th>
              <th className="px-6 py-4 font-semibold text-muted-foreground hidden md:table-cell">Reason</th>
              <th className="px-6 py-4 font-semibold text-muted-foreground hidden lg:table-cell">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.url}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="px-6 py-4 font-mono text-foreground">{row.url}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${badgeClass[row.risk]}`}>
                    {row.risk}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{row.reason}</td>
                <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  </section>
);

export default DashboardPreview;

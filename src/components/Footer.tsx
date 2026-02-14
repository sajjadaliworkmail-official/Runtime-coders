import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 font-semibold text-foreground">
        <Shield className="h-4 w-4 text-primary" />
        PhishEye
      </div>
      <p>Built by Runtime Coders for SIBATHON 26</p>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;

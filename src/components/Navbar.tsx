import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const navItems = ["Home", "Features", "Dashboard", "How It Works", "About"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/95 backdrop-blur-md shadow-navbar" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Shield className="h-6 w-6 text-primary" />
          PhishEye
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Scan Link
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

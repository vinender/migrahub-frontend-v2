"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Home, Briefcase, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { name: "How It Works", href: "#process", icon: <ArrowRight className="h-4 w-4" /> },
  { name: "Destinations", href: "#destinations", icon: <Globe className="h-4 w-4" /> },
  { name: "Family Visa", href: "#family", icon: <Briefcase className="h-4 w-4" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-[5000] mx-auto pointer-events-none"
        )}
      >
        <div className="w-full px-4 md:px-6 py-4 pointer-events-auto">
          <div className="flex items-center justify-between max-w-7xl mx-auto glass rounded-2xl shadow-lg px-6 py-3 transition-all duration-300 hover:shadow-xl">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                M
              </div>
              <h1 className="text-xl font-bold text-primary-900 tracking-tight group-hover:text-primary-700 transition-colors">
                MigraHub
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-primary-600 hover:text-primary-900 hover:bg-primary-50 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-2 rounded-full text-sm font-semibold text-primary-700 hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="relative group px-6 py-2.5 rounded-full bg-primary-900 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-primary-600 hover:bg-primary-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-4 right-4 mt-2 md:hidden glass rounded-3xl shadow-xl overflow-hidden origin-top"
              >
                <div className="p-4 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50/50 transition-colors"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-primary-100 grid grid-cols-2 gap-3">
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center px-4 py-3 rounded-xl bg-primary-50 text-primary-900 font-semibold text-sm hover:bg-primary-100 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center px-4 py-3 rounded-xl bg-primary-900 text-white font-semibold text-sm hover:bg-primary-800 transition-colors shadow-lg"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
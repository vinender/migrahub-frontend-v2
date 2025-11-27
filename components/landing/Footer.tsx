"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    visaServices: [
      { name: "Eligibility Assessment", href: "/assessment" },
      { name: "Family Visa Applications", href: "#family" },
      { name: "Document Upload", href: "/profile/documents" },
      { name: "Application Tracking", href: "/applications" }
    ],
    destinations: [
      { name: "Canada", href: "#destinations" },
      { name: "USA", href: "#destinations" },
      { name: "Australia", href: "#destinations" },
      { name: "United Kingdom", href: "#destinations" },
      { name: "Germany", href: "#destinations" }
    ],
    support: [
      { name: "How It Works", href: "#process" },
      { name: "FAQs", href: "#" },
      { name: "Contact Support", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/migrahub", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/migrahub", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/migrahub", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/migrahub", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/migrahub", label: "YouTube" }
  ];

  return (
    <footer className="bg-primary-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-primary-800 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Glow - Hidden on mobile */}
            <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="grid md:grid-cols-2 gap-5 sm:gap-8 items-center relative z-10">
              <div>
                <h3 className="text-xl sm:text-heading-4 font-bold mb-2 sm:mb-3 text-white">Stay Updated</h3>
                <p className="text-primary-200 text-sm sm:text-lg">
                  Get the latest immigration news, policy updates, and tips delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-primary-950/50 backdrop-blur-sm border border-primary-700 placeholder:text-primary-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all text-white text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white text-primary-950 font-bold text-sm sm:text-base hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6 group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center text-primary-950 font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform">
                  M
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  MigraHub
                </h2>
              </div>
            </Link>
            <p className="text-primary-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Your trusted partner for visa applications. File for yourself and your family members with AI-powered assessments and expert guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:support@migrahub.com" className="flex items-center gap-2 sm:gap-3 text-primary-300 hover:text-white transition-colors group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-900 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <span className="text-sm sm:text-base">support@migrahub.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-900 border border-primary-800 flex items-center justify-center hover:bg-accent-600 hover:border-accent-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Visa Services */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Visa Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.visaServices.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-accent-300 transition-colors text-xs sm:text-sm block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Destinations</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-accent-300 transition-colors text-xs sm:text-sm block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-400 hover:text-accent-300 transition-colors text-xs sm:text-sm block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-900 bg-primary-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-primary-500 text-xs sm:text-sm font-medium">
              © {currentYear} MigraHub. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm font-medium">
              <Link href="/privacy" className="text-primary-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-primary-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
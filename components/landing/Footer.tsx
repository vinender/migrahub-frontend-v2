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
  Phone,
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Express Entry", href: "/services/express-entry" },
      { name: "Family Sponsorship", href: "/services/family" },
      { name: "Work Permits", href: "/services/work" },
      { name: "Student Visas", href: "/services/student" },
      { name: "Business Immigration", href: "/services/business" },
      { name: "Provincial Nominee", href: "/services/pnp" }
    ],
    destinations: [
      { name: "Canada Immigration", href: "/destinations/canada" },
      { name: "USA Immigration", href: "/destinations/usa" },
      { name: "Australia Immigration", href: "/destinations/australia" },
      { name: "UK Immigration", href: "/destinations/uk" },
      { name: "New Zealand", href: "/destinations/nz" },
      { name: "Europe", href: "/destinations/europe" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Success Stories", href: "/testimonials" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press & Media", href: "/press" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Immigration News", href: "/news" },
      { name: "Visa Calculator", href: "/calculator" },
      { name: "Document Checklist", href: "/checklist" },
      { name: "FAQs", href: "/faqs" },
      { name: "Contact Us", href: "/contact" }
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
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
                <p className="text-white/90">
                  Get the latest immigration news, policy updates, and tips delivered to your inbox.
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
                <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-bold text-white">
                MigraHub
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in making immigration dreams come true. 
              AI-powered assessments, expert guidance, and proven success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+1-800-MIGRAHUB" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1-800-MIGRAHUB</span>
              </a>
              <a href="mailto:support@migrahub.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>support@migrahub.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Immigration Plaza<br />
                  Toronto, ON M5V 3A8<br />
                  Canada
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-white mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} MigraHub. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
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
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
];

const destinations = [
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "US", name: "USA", flag: "🇺🇸" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
];

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2940",
    country: "Canada",
    caption: "Canadian Rocky Mountains"
  },
  {
    url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2940",
    country: "USA",
    caption: "New York City Skyline"
  },
  {
    url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2940",
    country: "Australia",
    caption: "Sydney Opera House"
  },
  {
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940",
    country: "United Kingdom",
    caption: "London Cityscape"
  },
  {
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2940",
    country: "Germany",
    caption: "Neuschwanstein Castle"
  }
];

export default function HeroSection() {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Images Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImageIndex].url}
            alt={backgroundImages[currentImageIndex].caption}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Sophisticated Overlay - Darker on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-950/60 sm:from-primary-950/90 sm:via-primary-950/60 sm:to-primary-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/30 to-transparent sm:from-primary-950/90 sm:via-transparent" />

          {/* Location label - Hidden on mobile */}
          <div className="hidden sm:flex absolute bottom-8 right-8 items-center gap-2 text-white/60 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <MapPin className="h-3 w-3" />
            <p className="text-xs font-medium tracking-wide uppercase">{backgroundImages[currentImageIndex].country} • {backgroundImages[currentImageIndex].caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-0">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-white text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">Family Visa Applications Made Simple</span>
            </motion.div>

            <h1 className="text-heading-1 mb-4 sm:mb-6 leading-tight tracking-tight">
              Apply for Your Visa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-info-300">
                With Your Family
              </span>
            </h1>

            <p className="text-body-lg sm:text-body-xl text-primary-100 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              File visa applications for yourself and your family members in one place.
              AI-powered eligibility assessments and real-time tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16 justify-center lg:justify-start">
              <Link href="/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-primary bg-white text-primary-950 hover:bg-primary-50 border-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-glow">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 inline-block" />
                </button>
              </Link>
              <Link href="#process" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white border border-white/20 rounded-button font-semibold hover:bg-white/10 backdrop-blur-sm transition-all text-base sm:text-lg">
                  How It Works
                </button>
              </Link>
            </div>

            {/* Stats - Minimal */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-6 sm:pt-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">98%</h3>
                <p className="text-primary-300 text-xs sm:text-sm uppercase tracking-wider font-medium">Success Rate</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">48h</h3>
                <p className="text-primary-300 text-xs sm:text-sm uppercase tracking-wider font-medium">Processing</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">24/7</h3>
                <p className="text-primary-300 text-xs sm:text-sm uppercase tracking-wider font-medium">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Decorative Elements - Hidden on mobile to prevent overflow */}
            <div className="hidden sm:block absolute -top-10 -right-10 w-64 h-64 bg-accent-500/30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="hidden sm:block absolute -bottom-10 -left-10 w-64 h-64 bg-info-500/30 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

            <div className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-info-500" />

              <h2 className="text-xl sm:text-2xl font-bold text-primary-900 mb-1 sm:mb-2">
                Start Your Application
              </h2>
              <p className="text-primary-500 text-sm mb-5 sm:mb-8">
                Check your eligibility and apply with your family.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    I am from
                  </label>
                  <div className="relative">
                    <select
                      value={fromCountry}
                      onChange={(e) => setFromCountry(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 sm:py-4 rounded-xl bg-primary-50/50 border border-primary-200 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all appearance-none cursor-pointer font-medium text-sm sm:text-base"
                    >
                      <option value="">Select Origin Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-primary-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    I want to go to
                  </label>
                  <div className="relative">
                    <select
                      value={toCountry}
                      onChange={(e) => setToCountry(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 sm:py-4 rounded-xl bg-primary-50/50 border border-primary-200 text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all appearance-none cursor-pointer font-medium text-sm sm:text-base"
                    >
                      <option value="">Select Destination</option>
                      {destinations.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                    <Globe className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-primary-400 pointer-events-none" />
                  </div>
                </div>

                <Link href={`/assessment?from=${fromCountry}&to=${toCountry}`} className="block pt-1 sm:pt-2">
                  <button
                    disabled={!fromCountry || !toCountry}
                    className="w-full py-3 sm:py-4 bg-primary-900 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-primary-800 disabled:bg-primary-200 disabled:text-primary-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Check Eligibility
                  </button>
                </Link>
              </div>

              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 text-xs text-primary-500 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success-500" /> Free
                </span>
                <span className="w-1 h-1 rounded-full bg-primary-300" />
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success-500" /> Instant
                </span>
                <span className="w-1 h-1 rounded-full bg-primary-300" />
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success-500" /> Secure
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, MapPin } from "lucide-react";
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
];

export default function HeroSection() {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scenic images from destination countries
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
      url: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2940",
      country: "Canada",
      caption: "Toronto Skyline"
    },
    {
      url: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911?q=80&w=2940",
      country: "USA",
      caption: "Golden Gate Bridge"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[currentImageIndex].url}
            alt={backgroundImages[currentImageIndex].caption}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Location label */}
          <div className="absolute bottom-10 left-10 text-white/80">
            <p className="text-sm font-medium">{backgroundImages[currentImageIndex].country}</p>
            <p className="text-xs">{backgroundImages[currentImageIndex].caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-white">Trusted by 50,000+ immigrants</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey to a<br />
              <span className="text-gray-300">Better Tomorrow</span>
            </h1>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Simplifying immigration with AI-powered assessments, 
              expert guidance, and real-time application tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/register">
                <button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="#process">
                <button className="px-8 py-4 bg-transparent text-white border border-white/50 rounded-lg font-medium hover:bg-white/10 backdrop-blur-sm transition-colors">
                  Learn How It Works
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white">98%</h3>
                <p className="text-gray-300 text-sm">Success Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">48hrs</h3>
                <p className="text-gray-300 text-sm">Processing</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-gray-300 text-sm">Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - Country selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Check Your Eligibility
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    Current Country
                  </label>
                  <select
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <Globe className="h-4 w-4" />
                    Destination Country
                  </label>
                  <select
                    value={toCountry}
                    onChange={(e) => setToCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Select destination</option>
                    {destinations.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <Link href={`/assessment?from=${fromCountry}&to=${toCountry}`}>
                  <button
                    disabled={!fromCountry || !toCountry}
                    className="w-full py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-900 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    Check Eligibility Now
                  </button>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-xs text-center">
                  Free assessment • No credit card required • 2 minutes
                </p>
              </div>
            </div>

            {/* Simple accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-50 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
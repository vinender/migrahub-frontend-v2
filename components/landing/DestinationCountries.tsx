"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, GraduationCap, Heart, Home, Briefcase, Shield, Clock, TrendingUp, CheckCircle } from "lucide-react";

const destinations = [
  {
    country: "Canada",
    flag: "🇨🇦",
    description: "Welcoming immigration policies",
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=2940",
    imageAlt: "CN Tower Toronto",
    highlights: [
      "Express Entry System",
      "Provincial Nominee Program",
      "Family Sponsorship",
      "Post-Graduate Work Permit"
    ],
    processingTime: "6 months",
    successRate: "98%",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
  },
  {
    country: "United States",
    flag: "🇺🇸",
    description: "Land of opportunities",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2940",
    imageAlt: "Statue of Liberty",
    highlights: [
      "H1-B Visa Program",
      "Green Card Process",
      "Family Immigration",
      "Investment Visa (EB-5)"
    ],
    processingTime: "8-12 months",
    successRate: "95%",
    popularCities: ["New York", "Los Angeles", "San Francisco", "Seattle"]
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    description: "Quality of life",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2940",
    imageAlt: "Sydney Harbour Bridge",
    highlights: [
      "Skilled Migration",
      "Employer Sponsorship",
      "Student to PR Pathway",
      "Business Innovation"
    ],
    processingTime: "4-6 months",
    successRate: "97%",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
  }
];

export default function DestinationCountries() {
  return (
    <section className="py-20 bg-gray-50" id="destinations">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Choose Your Destination
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in immigration to the world's top destinations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
            >
              {/* Background Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Country Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <span className="font-semibold text-sm text-gray-900">{dest.country}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Immigration to {dest.country}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {dest.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <p className="text-xs text-gray-500">Processing</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {dest.processingTime}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <p className="text-xs text-gray-500">Success</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {dest.successRate}
                    </p>
                  </div>
                </div>

                {/* Programs */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Popular Programs</p>
                  {dest.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Cities */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Popular Cities</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.popularCities.map((city) => (
                      <span key={city} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors group">
                  <span className="flex items-center justify-center gap-2">
                    Explore {dest.country}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
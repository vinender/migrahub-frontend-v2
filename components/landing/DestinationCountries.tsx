"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const destinations = [
  {
    country: "Canada",
    slug: "canada",
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
    slug: "usa",
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
    slug: "australia",
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
    <section className="py-16 sm:py-24 bg-primary-50" id="destinations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-heading-2 text-primary-900 mb-3 sm:mb-4">
            Choose Your Destination
          </h2>
          <p className="text-body-base sm:text-body-lg text-primary-600 max-w-2xl mx-auto px-2">
            We specialize in immigration to the world's top destinations, offering tailored pathways for your unique profile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl sm:rounded-card overflow-hidden border border-primary-100 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Image */}
              <div className="relative h-44 sm:h-56 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />

                {/* Country Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-1.5 sm:gap-2 shadow-sm">
                  <span className="text-xl sm:text-2xl">{dest.flag}</span>
                  <span className="font-bold text-xs sm:text-sm text-primary-900">{dest.country}</span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-heading-5 font-semibold text-primary-900 mb-1 sm:mb-2">
                    Immigration to {dest.country}
                  </h3>
                  <p className="text-xs sm:text-body-sm text-primary-500">
                    {dest.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-primary-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-primary-100">
                    <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400" />
                      <p className="text-[10px] sm:text-xs font-semibold text-primary-500 uppercase tracking-wider">Processing</p>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-primary-900">
                      {dest.processingTime}
                    </p>
                  </div>
                  <div className="bg-success-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-success-100">
                    <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-success-500" />
                      <p className="text-[10px] sm:text-xs font-semibold text-success-600 uppercase tracking-wider">Success</p>
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-success-700">
                      {dest.successRate}
                    </p>
                  </div>
                </div>

                {/* Programs */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <p className="text-[10px] sm:text-xs font-bold text-primary-400 uppercase tracking-wider">Popular Programs</p>
                  {dest.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-primary-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Popular Cities */}
                <div className="mb-5 sm:mb-8">
                  <p className="text-[10px] sm:text-xs font-bold text-primary-400 uppercase tracking-wider mb-2 sm:mb-3">Popular Cities</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {dest.popularCities.map((city) => (
                      <span key={city} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-primary-50 text-[10px] sm:text-xs font-medium text-primary-600 rounded-full border border-primary-100">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/countries/${dest.slug}`}>
                  <button className="w-full py-2.5 sm:py-3 bg-primary-900 text-white rounded-lg sm:rounded-button font-semibold text-sm sm:text-base hover:bg-primary-800 transition-all group-hover:shadow-lg flex items-center justify-center gap-2">
                    Explore {dest.country}
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
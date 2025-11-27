"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Immigrants",
    description: "Successfully relocated"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Industry leading"
  },
  {
    icon: Clock,
    value: "48hrs",
    label: "Fast Processing",
    description: "Application submission"
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries",
    description: "Global reach"
  }
];

export default function ImmigrationStats() {

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-primary-50">
      {/* Background Image - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=2940"
          alt="World Map"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-transparent to-primary-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-heading-2 text-primary-900 mb-3 sm:mb-4">
            Trusted Immigration Partner
          </h2>
          <p className="text-body-base sm:text-body-lg text-primary-600 max-w-2xl mx-auto px-2">
            Join thousands who have successfully immigrated with our help. We turn complex processes into simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-card p-4 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-primary-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-accent-50 transition-colors">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-900 group-hover:text-accent-600 transition-colors" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-primary-900 mb-1 sm:mb-2 group-hover:text-accent-600 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-lg font-bold text-primary-800 mb-0.5 sm:mb-2">
                  {stat.label}
                </p>
                <p className="text-xs sm:text-sm text-primary-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-48 sm:h-72 rounded-xl sm:rounded-card overflow-hidden group shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
              alt="Canadian Mountains"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <p className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">Canada</p>
              <p className="text-xs sm:text-sm text-primary-200">Most Popular Destination</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-48 sm:h-72 rounded-xl sm:rounded-card overflow-hidden group shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2940"
              alt="US Cityscape"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <p className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">United States</p>
              <p className="text-xs sm:text-sm text-primary-200">Land of Opportunities</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-48 sm:h-72 rounded-xl sm:rounded-card overflow-hidden group shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=2940"
              alt="Australian Beach"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
              <p className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">Australia</p>
              <p className="text-xs sm:text-sm text-primary-200">Quality of Life</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
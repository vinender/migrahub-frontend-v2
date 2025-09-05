"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Clock, Globe } from "lucide-react";

export default function ImmigrationStats() {
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1569163139394-de4798aa62b6?q=80&w=2940"
          alt="World Map"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Trusted Immigration Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands who have successfully immigrated with our help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
                  <stat.icon className="h-7 w-7 text-gray-700" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-900 font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2940"
              alt="Canadian Mountains"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Canada</p>
              <p className="text-sm opacity-90">Most Popular Destination</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=2940"
              alt="US Cityscape"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">United States</p>
              <p className="text-sm opacity-90">Land of Opportunities</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?q=80&w=2940"
              alt="Australian Beach"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Australia</p>
              <p className="text-sm opacity-90">Quality of Life</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
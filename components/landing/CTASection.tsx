"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-20">
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2940"
            alt="Vancouver"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940"
            alt="Golden Gate"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2940"
            alt="Sydney"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">4.9 Rating</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">50,000+ Clients</span>
              </div>
              <div className="h-4 w-px bg-white/30" />
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">30+ Countries</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Immigration Journey?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful immigrants who trusted MigraHub with their dreams. 
              Get your free assessment in just 2 minutes.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Assessment</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>98% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/assessment">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-2xl"
                >
                  Start Free Assessment
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Talk to an Expert
                </motion.button>
              </Link>
            </div>

            {/* Urgency Message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-gray-400"
            >
              ⚡ Limited spots available for priority processing this month
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}